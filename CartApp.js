import { Text, View, StyleSheet, TextInput, Button, StatusBar, SafeAreaView, FlatList } from "react-native";
import { useState } from "react";
import { connect } from "react-redux";
import { AddItem, RemoveItem, ModifyItem } from './redux/actions/index'

function App({ itemList, AddItem, RemoveItem, ModifyItem }) {
  const [item, setItem] = useState('')
  const [price, setPrice] = useState('')

  const ListRender = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text>Item Name: {item.item}</Text>
        <Text>Price: ${item.price}</Text>
      </View>
    );
  };

  return (
    
    <SafeAreaView>
      <View style={styles.container}>
        <View >
          <Text >Item Name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setItem}
            value={item}
          />
        </View>
        <View>
          <Text>Price:</Text>
          <TextInput style={styles.input} onChangeText={setPrice} value={price} />
        </View>
        <View>
            <Button title="Add To Cart" onPress={() => AddItem(item, price)} />
            <Button title="Remove Item" onPress={() => RemoveItem(item)}/>
            <Button title="Modify Item " onPress={() => ModifyItem(item, price)}/>
        </View>
        <View style={styles.sep} />
        <FlatList data={itemList} renderItem={ListRender}/>
      </View>
    </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  input: {
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderColor: 'green',
    borderStyle: 'solid',
    textAlign: 'center',
    color: 'grey',
    borderRadius: StyleSheet.hairlineWidth * 10,
    marginTop: StyleSheet.hairlineWidth * 20,
    marginBottom: StyleSheet.hairlineWidth * 20,
  },
  item: {
    borderWidth: 1,
    margin: 5,
    borderColor: 'black',
    padding: 10,
    borderRadius: 4,
  },
  sep: {
    height: StyleSheet.hairlineWidth * 2,
    backgroundColor: 'silver',
    marginTop: 20,
  },
  container: {
    padding: StyleSheet.hairlineWidth * 10,
    paddingTop: StatusBar.currentHeight,
  },
});

const mapDispatch = { AddItem, RemoveItem, ModifyItem };
const mapState = (state) => ({ itemList: state.cart.itemList })
export default connect(mapState, mapDispatch)(App);