import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

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
    setTodos((prevTodos) => {
      return[
        ...prevTodos,
        {text, key: Math.random().toString()}
      ];
    })
  }

  return (
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
    padding: 30
  },
  list: {
    marginTop:20
  }
});
