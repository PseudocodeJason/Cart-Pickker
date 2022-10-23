import { Text, View, StyleSheet, TextInput, Button, StatusBar, FlatList,ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { AddItem, RemoveItem, ModifyItem, ShowApi, HideApi } from './redux/actions/index'
import Constants from 'expo-constants';

function App({ itemList, AddItem, RemoveItem, ModifyItem, ShowApi, HideApi, apiList }) {
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


  // API Things
  const Entry = ({ item }) => {
    return (

      <View style={styles.item}>
        <Text>Nation :{item.Nation}</Text>
        <Text>Year: {item.Year}</Text>
        <Text>Population: {item.Population}</Text>

      </View>
    )
  }

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
      .then((res) => res.json())
      .then((json) => setData(json.data));
  }, []);

  return (

    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button title="Show API" onPress={() => ShowApi(data)} />
        <Button title="Hide API" onPress={() => HideApi()} />
      </View>
      <View style={styles.textboxes}>
        <Text >Item Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setItem}
          value={item}
        />
        <Text>Price:</Text>
        <TextInput style={styles.input} onChangeText={setPrice} value={price} />
      </View>
      <View style={styles.buttons} >
        <Button title="Add To Cart" onPress={() => AddItem(item, price)} />
        <Button title="Remove Item" onPress={() => RemoveItem(item)} />
        <Button title="Modify Item" onPress={() => ModifyItem(item, price)} />
      </View>
      <View style={styles.sep} />
      <View style={styles.lists}>
        <FlatList data={itemList} renderItem={ListRender} />
        <FlatList data={apiList} renderItem={Entry}/>
      </View>
    </View>

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
    margin: 10,
  },
  container: {
    flex:1,
    padding: StyleSheet.hairlineWidth * 10,
    paddingTop: Constants.statusBarHeight,
    maxHeight: "100%"
  },
  textboxes: {
    flex:2,
    padding: StyleSheet.hairlineWidth * 10,
    maxHeight: 150
  },
  buttons: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "deepskyblue",
    flexwrap: "wrap",
    maxHeight: 50
  },
  lists: {
    flex: 5
  }
});

const mapDispatch = { AddItem, RemoveItem, ModifyItem, ShowApi, HideApi };
const mapState = (state) => ({ itemList: state.cart.itemList, apiList: state.api.apiList })
export default connect(mapState, mapDispatch)(App);