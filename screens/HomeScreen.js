import StatusBar from "expo";
import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient, colors } from 'expo-linear-gradient';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Category from "../components/Categories";
const HomeScreen = props => {

  useEffect(() => {

  }, []);

  // #262628 old color which is the dark grey one.
  return (


    <LinearGradient style={{ flex: 1 }} colors={["#192734", "#192734"]} start={[0, 0]} end={[1, 1]}>
      <View style={{ paddingTop: 25 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
          <Octicons style={{ marginLeft: 16, marginTop: 7 }} name="three-bars" size={26} color="#fe5c5b"
            onPress={() => { props.navigation.toggleDrawer(); }} />
          <Image style={{ height: 60, width: 60, alignSelf: 'center', marginTop: -10, marginLeft: -16 }}
            source={require('../assets/logo.png')} />
          <Octicons name="three-bars" size={26} color="#192734" />
        </View>
      </View>

      <View style={{ flex: 3, width: '100%' }}>
        <Image source={require('../assets/1959.jpg')}
          style={{ position: 'absolute', height: '95%', width: '100%' }} />
        <Image source={require('../assets/bgShade.png')}
          style={{ height: '95%', width: '100%' }} />
        <View style={{ height: 2.5, width: '100%', backgroundColor: 'black' }}></View>
        <Ionicons name="ios-play" size={50} color="#262628"
          style={{ marginTop: 90, alignSelf: 'center', position: 'absolute' }}
          onPress={() => props.navigation.navigate('VideoPlayer',
            {
              linkKey: "xhsIMUmd4sY",
              nameKey: "1959",
              descriptionKey: "The story begins with a guy’s mistake and his friend time travels to correct that mistake, and in that time he finds his people. Any one of his actions can change a lot, he does not want anything to change, and all this happens in the year 1959 .Will he be able to save his friend and whether he will be able to change his people or not, for this, definitely watch the full video till the end."
            })} />
      </View>



      {/* 
      <ScrollView
        scrollEventThrottle={16}>
        <View style={{ flex: 1, height: 130, marginTop: 16, marginBottom: 10, }}>
          <ScrollView style={{ marginBottom: -10 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <Category imageURI={require('../assets/1959.jpg')}
              name="1959"
              link="xhsIMUmd4sY" />
            <Category imageURI={require('../assets/zombie.jpg')}
              name="ZOMBIE | The Living Dead"
              link="RqLFXpuZFFk" />
            <Category imageURI={require('../assets/dod.jpg')}
              name="DECODE OR DIE"
              link="MzwYN2eVv0E" />
          </ScrollView>
        </View>
      </ScrollView> */}

      <View style={{ flex: 5 }}>
        {/* R2H PLAYLIST STARTS HERE  */}
        <Text style={{ marginTop: 0, fontSize: 17, marginLeft: 15, color: '#fe5c5b' }}>R2H Playlist</Text>
        <ScrollView horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          style={{ marginTop: 15 }}>
          <TouchableOpacity activeOpacity={0.8}
            onPress={() => props.navigation.navigate('VideoPlayer',
              {
                linkKey: "xhsIMUmd4sY",
                nameKey: "1959",
                descriptionKey: "The story begins with a guy’s mistake and his friend time travels to correct that mistake, and in that time he finds his people. Any one of his actions can change a lot, he does not want anything to change, and all this happens in the year 1959 .Will he be able to save his friend and whether he will be able to change his people or not, for this, definitely watch the full video till the end."
              })}
            style={{ height: 170, width: 200, marginLeft: 10, marginRight: 10 }}>
            <View
              style={styles.gridView}>
              <Image source={require('../assets/1959.jpg')}
                style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 10 }} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 14, color: 'white', alignSelf: 'center', marginTop: 2 }}> 1959 </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}
            onPress={() => props.navigation.navigate('VideoPlayer',
              {
                linkKey: "RqLFXpuZFFk",
                nameKey: "ZOMBIE | The Living Dead",
                descriptionKey: "The story begins with a guy’s mistake and his friend time travels to correct that mistake, and in that time he finds his people. Any one of his actions can change a lot, he does not want anything to change, and all this happens in the year 1959 .Will he be able to save his friend and whether he will be able to change his people or not, for this, definitely watch the full video till the end."
              })}
            style={{ height: 170, width: 200, marginLeft: 10, marginRight: 10 }}>
            <View
              style={styles.gridView}>
              <Image source={require('../assets/zombie.jpg')}
                style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 10 }} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 14, color: 'white', alignSelf: 'center', marginTop: 2 }}> ZOMBIE | The Living Dead </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}
            onPress={() => props.navigation.navigate('VideoPlayer',
              {
                linkKey: "MzwYN2eVv0E",
                nameKey: "DECODE OR DIE",
                descriptionKey: "The story begins with a guy’s mistake and his friend time travels to correct that mistake, and in that time he finds his people. Any one of his actions can change a lot, he does not want anything to change, and all this happens in the year 1959 .Will he be able to save his friend and whether he will be able to change his people or not, for this, definitely watch the full video till the end."
              })}
            style={{ height: 170, width: 200, marginLeft: 10, marginRight: 10 }}>
            <View
              style={styles.gridView}>
              <Image source={require('../assets/dod.jpg')}
                style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 10 }} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 14, color: 'white', alignSelf: 'center', marginTop: 2 }}> DECODE OR DIE </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: '5.3%', marginRight: 20 }}
            onPress={() => props.navigation.navigate('R2HPlaylist')}>
            <Ionicons name="arrow-forward" size={35} color="black" />
          </TouchableOpacity>
        </ScrollView>


        {/* TOP 5 FAN FAVOURITES STARTS HERE  */}
        <Text style={{ fontSize: 17, marginLeft: 15, color: '#fe5c5b', marginTop: -40 }}
        >Top 5 Fan Favourites</Text>
        <ScrollView horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          style={{ marginTop: 15 }}>
          <TouchableOpacity activeOpacity={0.8}
            onPress={() => props.navigation.navigate('VideoPlayer',
              {
                linkKey: "F1t6zmvAnp0",
                nameKey: "ALADDIN",
                descriptionKey: "A young orphan named Aladin, who is often bullied by his peers. Chances upon a life-altering object, a magic lamp. He sets off on a series of adventures and uses the lamp to defeat a bully. Watch yourself to find out what happned in the end."
              })}
            style={{ height: 170, width: 200, marginLeft: 10, marginRight: 10 }}>
            <View
              style={styles.gridView}>
              <Image source={require('../assets/aladin.jpg')}
                style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 10 }} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 14, color: 'white', alignSelf: 'center', marginTop: 2 }}> ALADDIN </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}
            onPress={() => props.navigation.navigate('VideoPlayer',
              {
                linkKey: "tORKgibhfBo",
                nameKey: "SCHOOL LIFE PART-2",
                descriptionKey: "This is the second part of school life , this part starts from the end of school life part 1 when history teacher told to every student of 9th class that this is the last day of your school and the rest of story in the video ..."
              })}
            style={{ height: 170, width: 200, marginLeft: 10, marginRight: 10 }}>
            <View
              style={styles.gridView}>
              <Image source={require('../assets/school.jpg')}
                style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 10 }} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 14, color: 'white', alignSelf: 'center', marginTop: 2 }}> SCHOOL LIFE PART-2 </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}
            onPress={() => props.navigation.navigate('VideoPlayer',
              {
                linkKey: "Pppxc0Ys-FI",
                nameKey: "DUMB BLIND DEAF",
                descriptionKey: "Three Guys Who are Physically Disable have more Fun in Their Life Than ours !"
              })}
            style={{ height: 170, width: 200, marginLeft: 10, marginRight: 10 }}>
            <View
              style={styles.gridView}>
              <Image source={require('../assets/dfd.jpg')}
                style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 10 }} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 14, color: 'white', alignSelf: 'center', marginTop: 2 }}> DUMB BLIND DEAF </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}
            onPress={() => props.navigation.navigate('VideoPlayer',
              {
                linkKey: "LNZuRaS_cnQ",
                nameKey: "PARALLEL WORLD",
                descriptionKey: "What if somebody gone in a parallel world ? As we know that there are many planets in the universe so if there is planet where everything is opposite to the earth."
              })}
            style={{ height: 170, width: 200, marginLeft: 10, marginRight: 10 }}>
            <View
              style={styles.gridView}>
              <Image source={require('../assets/pworld.jpg')}
                style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 10 }} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 14, color: 'white', alignSelf: 'center', marginTop: 2 }}> PARALLEL WORLD </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}
            onPress={() => props.navigation.navigate('VideoPlayer',
              {
                linkKey: "0voI9HJD_Ns",
                nameKey: "IPL SPOOF | CSK VS RCB",
                descriptionKey: "Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for fair use for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use. No copyright infringement intended."
              })}
            style={{ height: 170, width: 200, marginLeft: 10, marginRight: 10 }}>
            <View
              style={styles.gridView}>
              <Image source={require('../assets/epl.jpg')}
                style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 10 }} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 14, color: 'white', alignSelf: 'center', marginTop: 2 }}> IPL SPOOF | CSK VS RCB </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: '5.3%', marginRight: 20 }}
            onPress={() => props.navigation.navigate('R2HPlaylist')}>
            <Ionicons name="arrow-forward" size={35} color="black" />
          </TouchableOpacity>
        </ScrollView>

      </View>
    </LinearGradient>

  );
}

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: 50,
    //alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#28334f',
  },
  step: {
    margin: 5,
    marginTop: 55,
    fontSize: 55,
    color: '#fda507',
    alignSelf: 'center',
  },
  text: {
    //margin:5,
    marginTop: -8,
    fontSize: 13,
    color: '#fda507',
    alignSelf: 'center',
  },
  label: {
    margin: 5,
    marginTop: 30,
    fontSize: 50,
    color: '#fda507',
    alignSelf: 'center',
  },
  gridView: {
    flex: 2,
    elevation: 2,
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowOffset: { width: 1, height: 3 },
    shadowRadius: 10,
    height: '100%', width: '100%', alignSelf: 'center'
  }
});



// // <TouchableOpacity
// // onPress={() => { props.navigation.navigate({routeName: 'Profile'}); }}><Text>click</Text>
// // </TouchableOpacity>