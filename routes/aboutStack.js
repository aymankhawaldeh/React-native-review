import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import Header from '../shared/header'
 const screens = {
     About: {
         screen: About,
         navigationOptions: ({navigation, title}) => {
            //  title: 'Game Zone',
            return {
                headerTitle: () => <Header navigation={navigation} title='About' />,

            }
          
         }
     },
    
 }
const AboutStack = createStackNavigator(screens, {
 defaultNavigationOptions:{ 
    headerStyle : {backgroundColor: '#00B3B6'},
  }
});
export default AboutStack;