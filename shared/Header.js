import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const Header = (props) => {

    const openMenu = () => {
        props.navigation.openDrawer()
        // console.log(props)
    }
    return (
        <View style={styles.header}>
            {/* icons for the menus */}
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.menu}/>
            <Text style={styles.headerText}> { props.title} </Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center', //cross or seconday axis
        justifyContent:'center'       
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    },
    menu: {
        position: 'absolute',
        left:0
    }
})
