import React, { Component }  from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import {Button, Input} from 'react-native-elements';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDPZEWzuG6GnG4tEPUaSEOQ9sLmFSpU9KM",
    authDomain: "deadpool-7de31.firebaseapp.com",
    databaseURL: "https://deadpool-7de31.firebaseio.com",
    projectId: "deadpool-7de31",
    storageBucket: "deadpool-7de31.appspot.com",
    messagingSenderId: "278216050337",
    appId: "1:278216050337:web:2678eb4366c2731d7b12e0",
    measurementId: "G-57WJDQYG3C"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
export default class login extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = ({
        email : '',
        password : ''
        })
    }

    signup = (email, password) =>
    {
        try{
            firebase.auth().createUserWithEmailAndPassword(email, password)
        }
        catch(error)
        {
            console.log(error.toString())
        }
   
    }
    signin = (email, password) =>
    {
        try{
            firebase.auth().signInWithEmailAndPassword(email, password)
            console.log("login")
        }
        catch(error)
        {
            console.log(error.toString())
        }

    }
    render() {
        return (
            <View style={styles.container}>
                <View style = {{flex : 1, alignItems : 'center', justifyContent : 'flex-end'}}>
                    <Image source={require('./../image/LOGO.png')} style = {{ height : 70, width : 250, resizeMode : 'stretch'}}>
                    </Image>
                </View>
                <View style = {{flex : 2.5}}>
                    <View style = {styles.text}>
                        <Input
                        placeholder = 'Enter Email'
                        onChangeText = {(email) => this.setState({email})}
                        />
                    </View>
                    <View style = {styles.text}>
                        <Input 
                        placeholder = 'Enter password'
                        onChangeText = {(password) => this.setState({password})}
                        />
                    </View>
                    <View style = {{margin : 10, marginLeft : 50, marginRight : 50}}>
                        <Button 
                            title = "Sign In"
                            onPress = {()=> this.signin(this.state.email, this.state.password)}
                        />
                        <View style = {{ height : 20}}/>
                        <Button 
                            title = "Sign UP"
                            onPress = {()=> this.signup(this.state.email, this.state.password)}
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
    text : {
        height : 60, 
        backgroundColor : 'white',
        borderColor : 'gray' , 
        borderWidth : 2, 
        margin : 10,
        marginLeft : 50,
        marginRight : 50
    }
});