import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Platform} from 'react-native';
import { LinearGradient, colors } from 'expo-linear-gradient';

const LoginSignupScreen = ({navigation}) => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    return (
        <View style={styles.container}>
        <LinearGradient style={{flex:1}} colors={["#28334f", "#191f30"]} start={[0, 0]} end={[1,1]}>
{/*     
        <Text style={{fontSize: 20, color: '#427f95', marginTop: 180, marginBottom: 100  }}>Redeem Steps</Text> */}

        <Image style={{height: 200, width: 160, alignSelf: 'center', marginTop: '25%'}} source={require('../assets/RS_logo.png')} />

      
        <Text style={{
               color: '#fda507', fontSize: 28,
               alignSelf: 'center', fontStyle: 'italic',
               marginTop: -5}}>Redeem Steps</Text>
     
        <LinearGradient style={styles.appButtonContainer} colors={["#ffc35c", "#f09802"]} start={[1, 0]} end={[1,0.7]}>
        <TouchableOpacity 
        onPress = {() => navigation.navigate('SignUp')}>
        <Text style={styles.appButtonText}>Sign Up</Text>
        </TouchableOpacity>
        </LinearGradient>

        <LinearGradient style={styles.appButtonContainer1} colors={["#ffc35c", "#f09802"]} start={[1, 0]} end={[1,0.7]}>
        <TouchableOpacity 
        onPress = {() => navigation.navigate('Login')}>
        <Text style={styles.appButtonText}>LogIn</Text>
        </TouchableOpacity>
        </LinearGradient>
     
        

        </LinearGradient>
        </View>
        )
    }
  
  export default LoginSignupScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   alignItems: 'center',
    },
    appButtonContainer: {
      position: 'absolute',
      bottom: 120,
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
      shadowColor:'black',
      shadowOpacity:0.4,
      shadowOffset:{width:2,height:2},
      shadowRadius:20, 
    },
    appButtonContainer1: {
      position: 'absolute',
      bottom: 50,
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
      shadowColor:'black',
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