import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
// import SandBox from './components/SandBox';

export default function App() {
  
  
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  const pressHandler = key => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo=> todo.key !== key)
    })
  }

  const submitHandler = text => {
    if(text.length>3){
      setTodos((prevTodos) => {
        return[
          {text, key: Math.random().toString()},
          ...prevTodos
        ];
      })
    }
    else {
      Alert.alert('OOOPS!!!', 'todos must be 3 chars long atleast', [
        {text:'Try again', onPress: () => console.log('alert closed')}
      ])
    }
  }

  return (
    // <SandBox/>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <View style={styles.list}>
            <AddTodo submitHandler={submitHandler} />
              <FlatList
                data={todos}
                renderItem={({item}) => (
                  <TodoItem item={item} pressHandler={pressHandler}/>
                )}
              />
          </View>
        </View>
        </View>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    flex:1,
    padding: 30
  },
  list: {
    flex:1,
    marginTop:20
  }
});
