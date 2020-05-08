import React, { useState } from 'react';
import Card from '../shared/card'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';
import {AntDesign} from '@expo/vector-icons'



export default function Home ({navigation}){
    const addReview =(review) =>{
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews]
        });
        setModalOpen(false)
    }
    const[modalOpen, setModalOpen] = useState(false)
    const [reviews, setReviews] = useState([
        {title: 'Keep In Touch', rating: 5, body: 'Amazing App', key: '4'},
        {title: 'Github Finder', rating: 4, body: 'So cool App', key: '5'},
        {title: 'Food Ashurs', rating: 3, body: 'YUP', key: '6'},


    ])
    
const pressHandler= (key) => {
    setReviews((prevTodos) =>{
      return prevTodos.filter(todo => todo.key != key)
     
    })
  }
    // const pressHandler = () =>{
    //     navigation.navigate('ReviewDetails')
    // }

    return (
        <ImageBackground style={globalStyles.container} source={require('../assets/1b1812a71124d39cc8a4cac6f15b2d8d.jpg')}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                
                <View style={styles.modalContent}>
                <MaterialIcons
            name='close'
            size={24}
            style={{...styles.modalToggle, ...styles.modalClosed}}
            onPress={() => setModalOpen(false)}
            />
        <ReviewForm addReview={addReview} />
                </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons
            name='add'
            size={24}
            style={styles.modalToggle}
            onPress={() => setModalOpen(true)}
            />
            <FlatList 
            data={reviews}
            renderItem={({item}) => (
               <TouchableOpacity  onPress={() => navigation.navigate('ReviewDetails', item)}>
                   <Card>
                   <View style={styles.all}> 

                   <Text style={globalStyles.titleText}>{item.title}</Text>
                   <AntDesign style={styles.delete} name='delete' size={26} onPress={() => pressHandler(item.key)}  />
                </View>
                   </Card>
               </TouchableOpacity> 
            )} />
            {/* <Button title="go to review dets" onPress={pressHandler}/> */}
        </ImageBackground>
    )
}


const styles= StyleSheet.create({
    
    modalToggle
    : {
        marginBottom: 10,
        color: '#00B3B6',
        borderWidth: 2,
        borderColor: '#00B3B6',
        padding: 6,
        paddingLeft:9,
        paddingTop: 9,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClosed: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1
    },
    all: {
        flexDirection: 'row'
    },
    delete: {
        position: 'absolute',
        alignItems: 'center',
        marginLeft: 280,
        marginTop: 2.5,
        
    }
   
})





