import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import {uuid} from 'uuidv4';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Juice'},
  ]);

  const deleteItem = id => {
    // eslint-disable-next-line eqeqeq
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const addItem = text => {
    setItems(prevItems => {
      return [{id: uuid(), text}, ...prevItems];
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
