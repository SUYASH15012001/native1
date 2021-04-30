import React from 'react'
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import globalStyles from '../styles/global';

const ReviewDetails = (props) => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>ReviewDetails Screen</Text>
            <Button
                title="bakc 2 home manuallly"
                onPress={() => props.navigation.goBack()} //same as .pop()
            />
        </View>
    )
}

export default ReviewDetails
