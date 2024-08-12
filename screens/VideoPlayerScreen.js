import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import { Octicons } from '@expo/vector-icons';

const VideoPlayerScreen = props => {
    const link = props.navigation.getParam('linkKey')
    const name = props.navigation.getParam('nameKey')
    const description = props.navigation.getParam('descriptionKey')
    //console.log(linkKey)
    return (
        <View style={styles.container}>
            <View style={{ paddingTop: 25 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                    <Octicons style={{ marginLeft: 16, marginTop: 7 }} name="three-bars" size={26} color="#fe5c5b"
                        onPress={() => { props.navigation.toggleDrawer(); }} />
                    <Image style={{ height: 60, width: 60, alignSelf: 'center', marginTop: -10, marginLeft: -16 }}
                        source={require('../assets/logo.png')} />
                    <Octicons name="three-bars" size={26} color="#262628" />
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <WebView
                    style={{ flex: 3 }}
                    javaScriptEnabled={true}
                    source={{ uri: 'https://www.youtube.com/embed/' + link + '?rel=0&autoplay=0&showinfo=0&controls=0' }}
                />
            </View>
            <View style={{ flex: 2 }}>
                <Text style={{
                    fontSize: 27, color: 'pink', alignSelf: 'center',
                    marginTop: 10
                }}>{name}</Text>
                <Text style={{
                    fontSize: 14, color: 'pink', alignSelf: 'center',
                    marginTop: 10, paddingLeft: 20, paddingRight: 20
                }}>{description}</Text>
            </View>
        </View>
    );
}

export default VideoPlayerScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#192734'
    },
});
