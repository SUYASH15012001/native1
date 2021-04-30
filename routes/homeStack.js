import React from 'react';
// import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
    <Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#eee',
            height: 80
        },
        headerTintColor: '#444', //headerTextColor
    }}>
        <Screen
            options={{
                title: "GameZone", //to set title empty else it takes names
                // headerStyle:{
                //     backgroundColor:'#335'
                // }
            }}
            name="Home" component={Home} />
        <Screen
            options={{
                title: "",
                headerStyle:{
                    backgroundColor:'#eee'
                }
            }}
            name="ReviewDetails"
            component={ReviewDetails}
        />
    </Navigator>
)

// const HomeStack = () => (
//     <NavigationContainer >
//         <HomeNavigator/>
//     </NavigationContainer>
// )
export default HomeNavigator;