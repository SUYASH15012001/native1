import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import globalStyles from '../styles/global';

const ReviewDetails = (props) => {
    const { navigation, route } = props;
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>
                { route.params.title }
            </Text>
            <Text style={globalStyles.titleText}>
                { route.params.body }
            </Text>
            <Text style={globalStyles.titleText}>
                { route.params.rating }
            </Text>
        </View>
    )
}

export default ReviewDetails
