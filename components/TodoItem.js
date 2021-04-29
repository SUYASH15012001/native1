import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';

const TodoItem = (props) => {

    const { item, pressHandler } = props;
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)} style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.itemText}>
                    {item.text}
                </Text>
                <MaterialIcons name="delete" size={18} color='#333' />
            </View>
        </TouchableOpacity>
    )
}

export default TodoItem

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flex: 1,
        flexDirection:'row'
    },
    itemText: {
        marginRight:'auto'
        
    }
})
