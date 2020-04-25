import React, {useState} from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';

import CustomTextInput from '../formLib/components/CustomTextInput';
import CustomButton from '../formLib/components/CustomButton';

const SignUpScreen = props => {

    const [isFocused, setEmailFocus] = useState(false);

    const signUpButtonClick = () => {
        setEmailFocus(true);
    }

    return(
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.logoImg} />
            <Text style={styles.subHeaderLb}>Create an Account</Text>
            <View style={styles.formView}>
                <CustomTextInput isRequired={true} isPwdMaskRequired={false} labelText="Enter your email" maxLength={50} placeholderText="Enter your email"/>
                <CustomTextInput isRequired={true} isPwdMaskRequired={true} labelText="Password" maxLength={50} placeholderText="Enter your password"/>
            </View>
            <View style={styles.actionView}>
                <CustomButton buttonTitle="SignUp" onButtonPress={signUpButtonClick}/>
                <View style={styles.loginView}> 
                    <Button style={styles.loginButton} title="Already have an account? Log In"></Button>
                </View>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    logoImg: {
        width: 60,
        height: 60,
        marginTop: 50
    },  
    subHeaderLb: {
        fontWeight: '600',
        fontSize: 20,
        marginTop: 20
    },  
    formView: {
        width: '100%',
        marginTop: 30,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    actionView: {
        width: '100%',
        marginTop: 80,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    loginView: {
        marginTop: 15
    }
});

export default SignUpScreen;