import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Platform} from 'react-native';
import { LinearGradient, colors } from 'expo-linear-gradient';

const SignUpScreen = ({navigation}) => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    return (
        <View style={styles.container}>
        <LinearGradient style={{flex:1}} colors={["#28334f", "#191f30"]} start={[0, 0]} end={[1,1]}>
{/*     
        <Text style={{fontSize: 20, color: '#427f95', marginTop: 180, marginBottom: 100  }}>Redeem Steps</Text> */}

        <Image style={{height: 200, width: 160, margin: 10, alignSelf: 'center', marginTop: 80}} source={require('../assets/RS_logo.png')} />

        <TextInput  
        style={{height: 45,
        backgroundColor: '#3d5875', 
        alignSelf: 'center',
        fontSize: 20, width: 260, 
        borderRadius: 30,
        borderColor:'#368cb3',
        paddingLeft: 20,
        width: '80%',
        margin: 10,
        borderWidth: 0,
        overflow:Platform.OS === 'android' && Platform.Version >= 21 ?'hidden':'visible',
        elevation:25,
        shadowColor:'white',
        shadowOpacity:0.4,
        shadowOffset:{width:2,height:2},
        shadowRadius:20}} 
        fontSize={18}
        
        placeholderTextColor= '#ffffff'
        onChangeText={inputText => setUsername(inputText)}
        value={username}
        placeholder="Username..."/>

        <TextInput  
        style={{height: 45,
        backgroundColor: '#3d5875', 
        alignSelf: 'center',
        fontSize: 20, width: 260,
        borderRadius: 30,
        borderColor:'#368cb3',
        borderWidth: 0,
        paddingLeft: 20,
        width: '80%',
        margin: 8,
        overflow:Platform.OS === 'android' && Platform.Version >= 21 ?'hidden':'visible',
        elevation:25,
        shadowColor:'white',
        shadowOpacity:0.4,
        shadowOffset:{width:2,height:2},
        shadowRadius:20,
        }} 
        placeholderTextColor= '#ffffff'
        fontSize={18}
        onChangeText={inputText => setPassword(inputText)}
        value={password}
        placeholder="Password..."/>

       
        <LinearGradient style={styles.appButtonContainer} colors={["#ffc35c", "#f09802"]} start={[1, 0]} end={[1,0.7]}>
        <TouchableOpacity 
        onPress = {() => navigation.navigate('Home')}>
        <Text style={styles.appButtonText}>Sign up</Text>
        </TouchableOpacity>


        </LinearGradient>
        </LinearGradient>
        </View>
        )
    }
  
  export default SignUpScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   alignItems: 'center',
    },
    appButtonContainer: {
      margin: 50,
      //backgroundColor: "#fda507",
      borderRadius: 23,
      width: 140,
      paddingVertical: 10,
      paddingHorizontal: 12,
      alignSelf: 'center',
      width: '80%',
      height: 45,
      overflow:Platform.OS === 'android' && Platform.Version >= 21 ?'hidden':'visible',
      elevation:25,
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