import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import FBobject from './fbObject';
import Firebase from 'firebase'
import database from '@react-native-firebase/database';

import { Button, Input } from 'react-native-elements';


export default class FDBtest extends React.Component {
    
    writeuserdata(name, age){
        let today = new Date() 
        let dateYMD = today.getFullYear().toString() + "," + (today.getMonth()+1).toString() + "," + today.getDay().toString()
        let dateHM = today.getHours().toString() +":"+ today.getMinutes().toString()
        Firebase.database().ref('User/').child(name).child(dateYMD).child(dateHM).set({
            name,
            age
        }).then((data) => {
            console.log('data', data)
        }).catch((error) =>{
            console.log('error, error')
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <FBobject/>
                <Text style = {{fontSize : 20}}>
                    DBtest
                </Text>
                <Input
                    placeholder='Enter name'
                    onChangeText = {(name)=> this.setState({name})}
                />
                <Input
                    placeholder='Enter age'
                    onChangeText = {(age)=> this.setState({age})}
                />
                <View style = {{marginTop: 40, flexDirection: 'row' , alignItems : "center", justifyContent : "center"}}> 
                    <Button
                        style = {{flex : 1}}
                        title="Save"
                        onPress = {()=> this.writeuserdata(this.state.name, this.state.age)}
                    />
                </View>
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