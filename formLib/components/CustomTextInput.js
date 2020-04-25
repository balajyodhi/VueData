import React, { useEffect } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';


import CustomText from '../components/CustomText';
import * as Colors from '../constants/colors';

const CustomTextInput = props => {

    // console.log("formFieldIsValid: "+props.formFieldIsValid);
    return (
        <View style={styles.customInputView}> 
            <CustomText style={{width: '100%', height: 30}} isRequired={props.isRequired} textString={props.labelText} />
            <TextInput style={styles.formInput} secureTextEntry={props.isPwdMaskRequired} maxLength={props.maxLength} placeholder={props.placeholderText} value={props.selectedValue}/>
        </View>
    );

}

const styles = StyleSheet.create({
    customInputView: {
        height: 90,
        width: '90%',
        flexDirection: 'column',
        marginTop: 15
    },
    formInput: {
        width: '100%',
        height: 45,
        color: Colors.formFieldColor,
        fontSize: 16,
        borderColor: '#333333',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 5,
        marginTop: 10
    }
});

export default CustomTextInput;