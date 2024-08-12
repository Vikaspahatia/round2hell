import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from 'react-navigation-drawer';
import IntroScreen from "../screens/IntroScreen";
import LoginSignupScreen from "../screens/LoginSignupScreen";

import HomeScreen from "../screens/HomeScreen";
import R2HPlaylistScreen from "../screens/R2HPlaylistScreen";

import ProfileScreen from "../screens/ProfileScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import SideBar from "../components/SideBar";
import SplashScreen from '../screens/SplashScreen';
import VideoPlayerScreen from '../screens/VideoPlayerScreen';
const ScreenNavigator = createStackNavigator({
    Splash: SplashScreen,
    VideoPlayer: VideoPlayerScreen,
    R2HPlaylist: R2HPlaylistScreen,
    // Intro: {
    //     screen: IntroScreen},
    Splash: {
        screen: SplashScreen
    },
    // LoginSignup: {
    //     screen: LoginSignupScreen},
    // Login: {
    //     screen: LoginScreen},
    Home: {
        screen: HomeScreen
    },
    Profile: {
        screen: ProfileScreen
    },
    SignUp: {
        screen: SignUpScreen
    },
}, {
    defaultNavigationOptions: {
        title: 'MyScreen',
        headerShown: false,
    }
}
);
const DrawerNavigator = createDrawerNavigator({
    Screen: ScreenNavigator,
    // Logout: logOut
}, {
    contentComponent: props => <SideBar {...props} />
});

export default createAppContainer(DrawerNavigator)