import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './login.js'
import Main from './main.js'
import User_register from './user_register.js'
import FDBtest from './fDBtest.js'

class navigation extends React.Component {
    
    static navigationOptions = { header: null }; //navigation bar를 숨기는 설정
    render() {
        return (
            <View>
                <Login/>
                <Main/>
                <User_register/>
                <FDBtest/>
            </View>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        Login: Login,
        Main : Main,
        User_register : User_register,
        FDBtest : FDBtest,
    },
    {
        initialRouteName: 'Login',
    }
);

export default createAppContainer(AppNavigator);