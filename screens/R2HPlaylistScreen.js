import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Octicons } from '@expo/vector-icons';

const R2HPlaylistScreen = props => {

    return (
        <View style={styles.container}>
            <View style={{ paddingTop: 25 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                    <Octicons style={{ marginLeft: 16, marginTop: 7 }} name="three-bars" size={26} color="#fe5c5b"
                        onPress={() => { props.navigation.toggleDrawer(); }} />
                    <Image style={{ height: 60, width: 60, alignSelf: 'center', marginTop: -10, marginLeft: -16 }}
                        source={require('../assets/logo.png')} />
                    <Octicons name="three-bars" size={26} color="#192734" />
                </View>
            </View>
            <Text style={{ fontSize: 24, color: 'white', alignSelf: 'center' }}>R2H Playlist</Text>

            <ScrollView
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                style={{ marginTop: 15 }}>
                <TouchableOpacity activeOpacity={0.8}
                    onPress={() => props.navigation.navigate('VideoPlayer',
                        {
                            linkKey: "xhsIMUmd4sY",
                            nameKey: "1959",
                            descriptionKey: "The story begins with a guy’s mistake and his friend time travels to correct that mistake, and in that time he finds his people. Any one of his actions can change a lot, he does not want anything to change, and all this happens in the year 1959 .Will he be able to save his friend and whether he will be able to change his people or not, for this, definitely watch the full video till the end."
                        })}>
                    <View
                        style={styles.gridView}>
                        <Image source={require('../assets/1959.jpg')}
                            style={styles.imageView} />
                        <Text style={styles.text}> 1959 </Text>
                        <Text style={styles.textSub}>  • 41 M views </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}
                    onPress={() => props.navigation.navigate('VideoPlayer',
                        {
                            linkKey: "RqLFXpuZFFk",
                            nameKey: "ZOMBIE | The Living Dead",
                            descriptionKey: "The story begins with a guy’s mistake and his friend time travels to correct that mistake, and in that time he finds his people. Any one of his actions can change a lot, he does not want anything to change, and all this happens in the year 1959 .Will he be able to save his friend and whether he will be able to change his people or not, for this, definitely watch the full video till the end."
                        })}>
                    <View style={styles.gridView}>
                        <Image source={require('../assets/zombie.jpg')}
                            style={styles.imageView} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.text}> ZOMBIE | The Living Dead</Text>
                        <Text style={styles.textSub}>  • 58 M views </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}
                    onPress={() => props.navigation.navigate('VideoPlayer',
                        {
                            linkKey: "MzwYN2eVv0E",
                            nameKey: "DECODE OR DIE",
                            descriptionKey: "The story begins with a guy’s mistake and his friend time travels to correct that mistake, and in that time he finds his people. Any one of his actions can change a lot, he does not want anything to change, and all this happens in the year 1959 .Will he be able to save his friend and whether he will be able to change his people or not, for this, definitely watch the full video till the end."
                        })}>
                    <View style={styles.gridView}>
                        <Image source={require('../assets/dod.jpg')}
                            style={styles.imageView} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.text}> DECODE OR DIE </Text>
                        <Text style={styles.textSub}>  • 53 M views </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}
                    onPress={() => props.navigation.navigate('VideoPlayer',
                        {
                            linkKey: "0voI9HJD_Ns",
                            nameKey: "IPL SPOOF | CSK VS RCB",
                            descriptionKey: "Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for fair use for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use. No copyright infringement intended."
                        })}>
                    <View style={styles.gridView}>
                        <Image source={require('../assets/epl.jpg')}
                            style={styles.imageView} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.text}> IPL SPOOF | CSK VS RCB</Text>
                        <Text style={styles.textSub}>  • 67 M views </Text>
                    </View>
                </TouchableOpacity>

            </ScrollView>






        </View>
    );
}

export default R2HPlaylistScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#192734'
    },
    gridView: {
        flex: 2,
        elevation: 2,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowOffset: { width: 1, height: 3 },
        shadowRadius: 10,
        height: '100%', width: '100%', alignSelf: 'center',
        alignSelf: 'center'
    },
    imageView: {
        height: 200,
        width: '100%',
        //alignSelf: 'center',
        //marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        //borderRadius: 10
    },
    text: {
        fontSize: 17,
        color: 'white',
        //alignSelf: 'center',
        marginLeft: 20,
        marginTop: 1,
        marginBottom: 1
    },
    textSub: {
        fontSize: 12,
        color: 'white',
        //alignSelf: 'center',
        marginLeft: 20,
        marginTop: 1,
        marginBottom: 10
    }
});
