import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const HomeScreen = props => {

    const loadSignUpScreen = () => {
        props.navigation.navigate('SignUp');
    };

    return (
        <View style={styles.container}>

            <View style={styles.actionView}>
                <Text style={styles.label}>Welcome!</Text>
                <Button title="Sign Up" onPress={loadSignUpScreen}></Button>
            </View>

        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    actionView: {
        width: '90%',
        height: 100,
        marginLeft: '5%',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    label: {
        color: '#333333',
        fontSize: 25
    }
});

export default HomeScreen;