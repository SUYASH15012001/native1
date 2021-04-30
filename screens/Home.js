import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import globalStyles from '../styles/global';


const Home = (props) => {
    const { navigation } = props;

    const pressHandler = () => {
        navigation.navigate('ReviewDetails'); //push()
    }
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button
                title='Goto review dets'
                onPress={pressHandler}
            />
        </View>
    )
}

export default Home

