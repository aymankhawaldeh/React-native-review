import React from 'react';
import { StyleSheet, Text, View ,Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({navigation, title}){
    const openMenu = () =>{
        navigation.openDrawer();

    }
    return (
    
        <View style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
            <View style={styles.headerTitle} >
                <Image source={require('../assets/logo_file.png')} style={styles.headerImage}/>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )


}


const styles = StyleSheet.create({
    header: {
        position: 'relative',

    
     
        flexDirection: 'row',
        alignItems: 'center',
    
        
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 1,
    },
    icon: {
        paddingRight:130
        
    },
    headerTitle: {
        flexDirection: 'row'

    },
    headerImage: {
        position: 'absolute',
        width: 32,
        height: 32,
        marginLeft: 55,
        alignItems: 'center',
    }
})