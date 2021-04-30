import React from 'react';
// import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import About from '../screens/About';
import Header from '../shared/Header';
import {Image} from 'react-native'

const { Navigator, Screen } = createStackNavigator();

const AboutNavigator = () => (
    <Navigator screenOptions={(props) => {
        return {
            headerStyle: {
                backgroundColor: '#eee',
                height: 80
            },
            headerTintColor: '#444', //headerTextColor
            headerTitle: () => <Header navigation={ props.navigation} title='About GameZone'/>,
            headerBackground: () => (
                <Image source={require('../assets/game_bg.png')} style={{
                    height:'100%'
                }}/>
            )
        }
    }}>
        <Screen
            options={{
                title: "About GameZone", //to set title empty else it takes names
                // headerStyle:{
                //     backgroundColor:'#335'
                // }
            }}
            name="About" component={About} />
    </Navigator>
)

// const HomeStack = () => (
//     <NavigationContainer >
//         <HomeNavigator/>
//     </NavigationContainer>
// )
export default AboutNavigator;