import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {globalStyles, images} from '../styles/global';
import Card from '../shared/Card';

const ReviewDetails = (props) => {
    const { navigation, route } = props;
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>
                    { route.params.title }
                </Text>
                <Text style={globalStyles.titleText}>
                    { route.params.body }
                </Text>
                <View style={styles.rating}>
                    <Text>GameZone rating: </Text>
                    <Image source={images.ratings[props.route.params.rating]} />
                </View>
            </Card>
        </View>
    )
}

export default ReviewDetails

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:"center",
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }
})