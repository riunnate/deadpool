import React, { Component, useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import { Button, Input } from 'react-native-elements';

import auth from '@react-native-firebase/auth';
import FBObject from './fbObject';

class User_register extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            email: '',
            password: ''
        })
    }

    createUser = (email, password) => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User account created & signed in!');
                alert('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                    alert("That email address is already in use!");
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                    alert('That email address is invalid!');
                }

                console.error(error);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style = {{fontSize : 25}}>
                        User_Register
                    </Text>
                </View>
                <View style={{ flex: 2.5 }}>
                    <View style={styles.text}>
                        <Input
                            placeholder='Enter Email'
                            onChangeText={(email) => this.setState({ email })}
                        />
                    </View>
                    <View style={styles.text}>
                        <Input
                            placeholder='Enter password'
                            onChangeText={(password) => this.setState({ password })}
                        />
                    </View>
                    <View style={{ margin: 10, marginLeft: 50, marginRight: 50 }}>
                        <View style={{ height: 20 }} />
                        <Button
                            title="Sign UP"
                            onPress={() => this.createUser(this.state.email, this.state.password)}
                        />
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#1E90FF'
    },
    text: {
        height: 60,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 2,
        margin: 10,
        marginLeft: 50,
        marginRight: 50
    }
});

export default User_register;

