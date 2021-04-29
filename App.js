import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    { name: 'shawn', id: '1' },
    { name: 'Luigi', id: '2' },
    { name: 'Mario', id: '3' },
    { name: 'yoshi', id: '4' },
    { name: 'Peach', id: '5' },
    { name: "buom", id: '6' },
    { name: 'Shank', id: '7' },
    { name: 'Ritz', id: '8' },
    { name: "Boom", id: '9' },
    
  ]);

  const presshandler = (id) => {
    // console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id !== id)  
    })
    // pretty much same as
    // let nlist = people.filter(person => person.id !== id);
    // setPeople(nlist);
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={ (item) => item.id.toString() }
        numColumns={2}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => presshandler(item.id)}>
            <Text style={styles.item}> { item.name }</Text>
          </TouchableOpacity>
        )}
      />
      {/* <ScrollView>
        {people.map(item => (
          <View key={item.key}>
            <Text style={styles.item}> Hello { item.name }</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingLeft: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    padding: 30,
    fontSize: 24,
    backgroundColor: 'pink',
    marginTop: 24,
    marginHorizontal:10
  }
});
