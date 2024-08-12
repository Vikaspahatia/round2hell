import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, Image, AsyncStorage} from 'react-native';
import { LinearGradient, colors } from 'expo-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import * as stepsAction from '../store/actions/steps';
import * as changeDateAction from '../store/actions/changeDate';

const SplashScreen = props => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
     
    const dispatch = useDispatch();
    useEffect(()=>{
        const tryLogin = async ()=>{
            const userData =await AsyncStorage.getItem('userSteps');
            // const monthDate = await AsyncStorage.getItem('month');
            // const transformedMonth = JSON.parse(monthDate);
            // console.log(transformedMonth, 'transformedMonth');
            // const date = transformedMonth.data;
            const transformedData =await JSON.parse(userData);
            console.log(transformedData,'transformeddata');
            
            if(!userData){
                
                props.navigation.navigate('Home');
                return;
            }
            
            
            try{
                await dispatch(stepsAction.setSteps(transformedData.steps));
                
                await dispatch(changeDateAction.fetchDaily());
              
                
            } catch(err){
                Alert.alert(err.message)
            }
            props.navigation.navigate('Splash2');
        }
        tryLogin();
    },[dispatch])
    useEffect(()=>{

    },[]);

    return (
        <View style={styles.container}>
        <LinearGradient style={{flex:1}} colors={["#28334f", "#191f30"]} start={[0, 0]} end={[1,1]}>
    
   
        <Image style={{marginTop: '70%', height: 150, width: 220, alignSelf: 'center'}} source={require('../assets/3.gif')} />


        </LinearGradient>
        </View>
        )
    }
  
  export default SplashScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   alignItems: 'center',
    },
    appButtonContainer: {
      bottom: 50,
      position: 'absolute',
      //backgroundColor: "#fda507",
      borderRadius: 23,
      width: 140,
      paddingVertical: 10,
      paddingHorizontal: 12,
      alignSelf: 'center',
      width: '80%',
      height: 45,
      overflow:Platform.OS === 'android' && Platform.Version >= 21 ?'hidden':'visible',
      elevation:10,
      shadowColor:'white',
      shadowOpacity:0.4,
      shadowOffset:{width:2,height:2},
      shadowRadius:20,
    },
    appButtonText: {
      //marginTop: 2,
      fontSize: 19,
      color: "#fff",
      alignSelf: "center",
      textTransform: "uppercase",
      //fontWeight: 'bold'
    },
    text: {
      marginTop: -32,
      fontSize: 15,
      color: "white",
      alignSelf: "center",
    },
    text1: {
      marginTop: 8,
      fontSize: 14,
      color: "#fff",
      alignSelf: "center",
    }
  });