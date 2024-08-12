import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const Categories = props => {
  console.log(props.link.toString())
  const lin = "vikas"
  const transport = () => {
    navigation.navigate('VideoPlayer')
  }
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity activeOpacity={0.8}
        onPress={() => transport()}
        style={{ height: 170, width: 200, marginLeft: 10, marginRight: 10 }}>
        <View
          style={{
            flex: 2,
            elevation: 2,
            shadowColor: 'black',
            shadowOpacity: 1,
            shadowOffset: { width: 1, height: 3 },
            shadowRadius: 10,
            height: '100%', width: '100%', alignSelf: 'center'
          }}>
          <Image source={props.imageURI}
            style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 10 }} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 14, color: 'white', alignSelf: 'center', marginTop: 2 }}> {props.name} </Text>
        </View>
      </TouchableOpacity>
    </View>
  )

}
export default Categories;
