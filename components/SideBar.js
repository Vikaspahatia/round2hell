import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, Platform, Linking } from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient, colors } from 'expo-linear-gradient';

export default Sidebar = ({ navigation }) => (
   <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
         <View style={styles.upper}>
            <View style={{ flexDirection: 'row' }}>
               <View style={{
                  height: 90, width: 90,
                  backgroundColor: 'white',
                  borderRadius: 10,
                  marginTop: 55,
                  marginLeft: 20,
                  overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
                  //elevation:5,
                  shadowColor: 'black',
                  shadowOpacity: 0.2,
                  shadowOffset: { width: 0, height: 0 },
                  shadowRadius: 30,
               }}>
               </View>
               <View>
                  <Text style={{ marginTop: 74, paddingLeft: 15, fontSize: 14, fontStyle: 'italic' }}>Hey there,</Text>
                  <Text style={{ paddingLeft: 15, fontSize: 23, fontWeight: 'bold' }}>username</Text>
               </View>
            </View>
         </View>

         <View style={styles.lower}>
            <LinearGradient style={{ flex: 1 }} colors={["#262628", "#262628"]} start={[0, 0]} end={[1, 1]}>
               <TouchableOpacity onPress={() => navigation.navigate('Profile')} >
                  <Text style={{ color: '#fda507', fontSize: 17, paddingLeft: 30, marginTop: 15 }}>Profile</Text>
               </TouchableOpacity>
               <View style={{ borderBottomWidth: 0.3, borderBottomColor: 'white', margin: 15 }}></View>
               <Text style={{ color: '#fda507', fontSize: 17, paddingLeft: 30, marginTop: 3 }}>Credits</Text>
               <View style={{ borderBottomWidth: 0.3, borderBottomColor: 'white', margin: 15 }}></View>
               <TouchableOpacity onPress={() => Linking.openURL('mailto:vikaspahatia@gmail.com')} >
                  <Text style={{ color: '#fda507', fontSize: 17, paddingLeft: 30, marginTop: 3 }}>Reoprt issues</Text>
               </TouchableOpacity>
               <View style={{ borderBottomWidth: 0.3, borderBottomColor: 'white', margin: 15 }}></View>
               <Text style={{ color: '#fda507', fontSize: 17, paddingLeft: 30, marginTop: 3 }}>About Credits</Text>
               <View style={{ borderBottomWidth: 0.3, borderBottomColor: 'white', margin: 15 }}></View>




               <Image style={{ height: 100, width: 100, alignSelf: 'center', bottom: 40, position: 'absolute', }} source={require('../assets/r2hLogo.png')} />
               <Text onPress={() => navigation.navigate('Splash')} style={{
                  color: '#fda507', fontSize: 27,
                  alignSelf: 'center', bottom: 25,
                  position: 'absolute',
                  // fontStyle: 'italic'
               }}>Round 2 Hell</Text>
            </LinearGradient>
         </View>

      </View>
   </View>
)

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   upper: {
      flex: 1,
      backgroundColor: '#fe5c5b',
   },
   lower: {
      flex: 3,
   },
   text1: {
      fontSize: 15,
      color: 'white',
      alignSelf: 'center',
      position: 'absolute',
      bottom: 65,
   },
   text2: {
      fontSize: 15,
      color: 'white',
      alignSelf: 'center',
      position: 'absolute',
      bottom: 40,
   },
   text3: {
      fontSize: 15,
      color: 'white',
      alignSelf: 'center',
      position: 'absolute',
      bottom: 15,
   },
   text: {
      fontSize: 15,
      color: 'black',
      // alignSelf: 'center',
      // position: 'absolute',
      // bottom: 15,
   }
});