import React from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import FBobject from './fbObject';
export default class Main extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FBobject/>
                <Text style = {{fontSize : 20}}>
                    MAIN PAGE
                </Text>
                <TouchableOpacity style = {{marginTop : 20}} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style = {{fontSize : 20}}>
                        Welcome
                    </Text>
                </TouchableOpacity>
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