import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import * as Colors from '../constants/colors';

const CustomButton = props => {

    // console.log(props.isEnabled);

    return (
        // <TouchableOpacity
        //     style={{...props.buttonStyle, ...styles.customButton}} onPress={props.onButtonPress}> 
        //     <Text style={styles.buttonText}>{props.buttonTitle}</Text>
        // </TouchableOpacity>
        <LinearGradient
        colors={['blue', 'yellow', 'red']}
        start={[0, 1]}
        end={[1, 1.5]}
        style={{ width: '90%', padding: 15, alignItems: 'center', borderRadius: 5 }}>
        <Text
          style={{
            backgroundColor: 'transparent',
            fontSize: 20,
            color: '#333',
            fontWeight: '600'
          }}>
          SignUp
        </Text>
      </LinearGradient>
    );

}

const styles = StyleSheet.create({
    customButton:{
        width: '90%',
        height: 45,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.bgColor
    },
    buttonText:{
        color: Colors.formFieldColor,
        fontWeight: '700',
        fontSize: 18
    }

});

export default CustomButton;