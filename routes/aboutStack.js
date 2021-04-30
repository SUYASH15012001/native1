import React from 'react';
// import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import About from '../screens/About';

const { Navigator, Screen } = createStackNavigator();

const AboutNavigator = () => (
    <Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#eee',
            height: 80
        },
        headerTintColor: '#444', //headerTextColor
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