import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
// import {createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header'
 const screens = {
     Home: {
         screen: Home,
         navigationOptions: ({navigation, title}) => {
            //  title: 'Game Zone',
            return {
                headerTitle: () => <Header navigation={navigation} title='Home' />,

            }
          
         }
     },
     ReviewDetails: {
         screen: ReviewDetails,
         navigationOptions: {
            title: 'Review Details',
         
        }
     }
 }
const HomeStack = createStackNavigator(screens, {
 defaultNavigationOptions:{ 
    headerStyle : {backgroundColor: '#00B3B6'},
    // headerTitleAlign:"center",
    
 
}
});
// export default createAppContainer(HomeStack);
export default HomeStack;