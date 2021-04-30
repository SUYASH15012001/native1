import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
    <Navigator>
        <Screen
            options={{
                title:"Ram " //to set title empty else it takes names
            }}
            name="HomeComponent" component={Home} />
        <Screen name="ReviewDetails" component={ReviewDetails}/>
    </Navigator>
)

const HomeStack = () => (
    <NavigationContainer>
        <HomeNavigator/>
    </NavigationContainer>
)
export default HomeStack;