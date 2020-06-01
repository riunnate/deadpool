import React from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

export default class login extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style = {{fontSize : 20}}>
                    MAIN PAGE
                </Text>
                <TouchableOpacity style = {{marginTop : 20}} onPress={() => this.props.navigation.navigate('Main')}>
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