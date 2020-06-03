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
import auth from '@react-native-firebase/auth';

export default class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
          email: '',
          password: ''
        })
    }
    signin = (email, password) => {
        auth()
          .signInWithEmailAndPassword(email,password)
          .then(() => {
            console.log('User account created & signed in!');
            this.props.navigation.navigate("Main");
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');
              alert('That email address is already in use!');
            }
    
            if (error.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
              alert('That email address is invalid!');
            }
    
            console.error(error);
          });
    }
    logoff = () => {
        auth()
          .signOut()
          .then(() => console.log('User signed out!'));
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
                        title="Sign UP"
                        onPress={() => this.props.navigation.navigate("User_register")}
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