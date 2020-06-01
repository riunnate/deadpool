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


class navigation extends React.Component {
    render() {
        return (
            <View>
                <Login/>
                <Main/>
            </View>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        Login: Login,
        Main : Main,

    },
    {
        initialRouteName: 'Login',
    }
);

export default createAppContainer(AppNavigator);