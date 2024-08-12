import React, { useReducer } from "react";
import { View, Text, StyleSheet, ScrollView, Platform } from "react-native";
import { LinearGradient, colors } from 'expo-linear-gradient';
import { Ionicons, Entypo } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient style={{ flex: 1 }} colors={["#28334f", "#191f30"]} start={[0, 0]} end={[1, 1]}>

        <LinearGradient style={{ flex: 1 }} colors={["#ffcc00", "#ff9100"]} start={[0, 0]} end={[1, 1]}>
          <View style={{ justifyContent: 'center', flexDirection: 'row', marginVertical: 20 }}>

            <View style={styles.imageContainer}>
              <View style={styles.check}>
                <Ionicons name="md-checkmark" size={24} color={"#fea405"} />
              </View>
              <View style={{
                width: 120,
                height: 120,
                borderRadius: 25,
                backgroundColor: 'white',
                marginTop: -7,
                overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
                elevation: 10,
                shadowColor: 'black',
                shadowOpacity: 0.4,
                shadowOffset: { width: 2, height: 2 },
                shadowRadius: 20
              }}>
                {/* IMAGE HERE */}
              </View>
            </View>
          </View>
          <Text style={styles.title}>Username</Text>
        </LinearGradient>


        <View style={{ marginTop: 20, flex: 2 }}>
          <LinearGradient colors={["#28334f", "#315070"]} start={[1, 3]} end={[0, 0]}
            style={{
              width: '85%',
              alignSelf: 'center',
              borderRadius: 13,
              borderWidth: 0.3,
              margin: 10,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{
                paddingLeft: 20,
                justifyContent: 'center',
                marginTop: 14,
                fontSize: 18,
                color: '#00e0ff',
                marginBottom: 15,
              }}>Steps walked today - </Text>

              <Text style={{
                paddingLeft: 20,
                justifyContent: 'flex-end',
                marginTop: 10,
                fontSize: 25,
                color: '#ff9100',
                marginBottom: 10,
              }}>69</Text>
            </View>
          </LinearGradient>

          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <LinearGradient colors={["#28334f", "#315070"]} start={[1, 1]} end={[0, 0]} style={styles.grad}>
              <Text style={styles.num}>69</Text>
              <Text style={styles.text}>Total Steps</Text>

            </LinearGradient>


            <LinearGradient colors={["#28334f", "#315070"]} start={[1, 1]} end={[0, 0]} style={styles.grad}>
              <Text style={styles.num}>69</Text>
              <Text style={styles.text}>Total Credits</Text>
            </LinearGradient>

          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 40,
    shadowColor: "#253350",
    shadowOffset: { height: 3, width: 1 },
    shadowOpacity: 0.5,

  },
  check: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 100,
    width: 32,
    height: 32,
    position: 'absolute',
    zIndex: 1,
    right: -15,
    bottom: 25,
    overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
    elevation: 15,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 20,
  },
  title: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: -8,
  },
  text: {
    alignSelf: 'center',
    fontSize: 15,
    color: '#00e0ff',
    fontStyle: 'italic'
  },
  num: {
    alignSelf: 'center',
    fontSize: 45,
    color: '#ff9100',
  },
  grad: {
    width: '38%',
    height: '80%',
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 0.3,
    margin: 15,
  }
});