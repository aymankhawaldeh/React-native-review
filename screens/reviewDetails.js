import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';
import { globalStyles, images} from '../styles/global';
import Card from '../shared/card';


export default function ReviewDetails ({navigation}){
    const rating = navigation.getParam('rating')

    const pressHandler = () =>{

        navigation.goBack()
    }
    return (
        <ImageBackground source={require('../assets/1b1812a71124d39cc8a4cac6f15b2d8d.jpg')} style={globalStyles.container}>
            <Card>
            <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('body')}</Text>
            <View style={styles.rating}>
            <Text>GameZone Raiting: </Text>
            <Image source={images.ratings[rating]} />
            {/* <Image source={require('..')} /> */}

            </View>

           </Card>
           <Button style={globalStyles.btn} title="Back To Home" onPress={pressHandler}  color='black'>a</Button>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
    
})




