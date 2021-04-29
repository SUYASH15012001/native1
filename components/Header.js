import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                My Todos
            </Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        backgroundColor: 'coral',
        paddingTop: 38,
        height:80
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize:20
    }
})
