import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

const AddTodo = ({ submitHandler }) => {

    const [text, setText] = useState()

    const changeHandler = (val) => {
        setText(val)
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new Todo....'
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text) } title="add Todo" color="coral"/>
        </View>
    )
}

export default AddTodo

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})
