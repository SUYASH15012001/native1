import React from 'react';
// import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/Header';
import { Image } from 'react-native';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
    <Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#eee',
            height: 80
        },
        headerTintColor: '#444' //headerTextColor
    }}>
        <Screen
            options={({ navigation }) => {
                return {
                    title: "GameZone",
                    headerTitle: () => {
                        return (
                            <Header navigation={navigation} title='GameZone'/>
                        )
                    },
                    headerBackground: () => (
                        <Image source={require('../assets/game_bg.png')} style={{
                            height:'100%'
                        }}/>
                    )
                }
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