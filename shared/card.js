import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Card (props ){
    return(
        <View style={styles.card}>
            <View style={styles.cardcontent}>
                {props.children}
            </View>
        </View>
    )
}


const styles= StyleSheet.create({
    card: {
    borderRadius: 12,
    borderColor: 'black',
    borderWidth: 1,
    
    backgroundColor: '#00B3B6',
    shadowOffset: {width: 1, height: 1},
    marginHorizontal: 9,
    marginVertical: 12,      
    },
    cardcontent: {
        marginHorizontal: 18,
        marginVertical: 9

    }

})