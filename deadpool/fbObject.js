import React, { Component, useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import firebase from 'firebase';
import auth from '@react-native-firebase/auth';
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
    const fire = firebase.initializeApp(firebaseConfig);
  }

function FBApp() {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
  
    // Handle user state changes
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
  
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
  
    if (initializing) return null;
  
    if (!user) {
      return (
        <View>
          <Text>Login</Text>
        </View>
      );
    }
  
    return (
      <View>
        <Text>Welcome {user.email}</Text>
      </View>
    );
}

export default class FBObject extends React.Component {
    render() {
        return (
            <View>
                <FBApp/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#1E90FF',
        alignItems : 'center', 
    },
});