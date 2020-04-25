import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import * as Colors from '../constants/colors';

const CustomText = props => {

    // console.log(props.isRequired);

    return (
        <View style={{...styles.customLbView, ...props.style}}> 
            <Text style={styles.label}>{props.textString}</Text>
            {
                (props.isRequired) ? <Text style={styles.mandatoryLb}> *</Text> : null
            }
        </View>
        
    );

}

const styles = StyleSheet.create({
    customLbView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    label: {
        color: Colors.labelColor,
        fontSize: 16
    },

    mandatoryLb: {
        color: Colors.redColor,
        fontSize: 16
    }

});

export default CustomText;