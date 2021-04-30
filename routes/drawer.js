import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './homeStack'
import AboutStack from './aboutStack'

const { Navigator, Screen } = createDrawerNavigator();


const MainDrawer = () => (
    <Navigator>
        <Screen
            component={HomeStack}
            name='Home'
        />
        <Screen
            component={AboutStack}
            name='About'
        />
    </Navigator>
)


const RootDrawerNavigator = () => (
    <NavigationContainer>
        <MainDrawer/>
    </NavigationContainer>
)

export default RootDrawerNavigator