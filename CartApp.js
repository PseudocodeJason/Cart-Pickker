import { Text, View, StyleSheet, TextInput, Button, StatusBar, SafeAreaView, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { AddItem, RemoveItem, ModifyItem, ShowApi, HideApi } from './redux/actions/index'

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
  const Entry= ({item})=>{
    return <View style={styles.item}>
    <Text>Nation :{item.Nation}</Text>
    <Text>Year: {item.Year}</Text>
    <Text>Population: {item.Population}</Text>
    
    </View>
  }

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
      .then((res) => res.json())
      .then((json) => setData(json.data));
  }, []);

  return (
    
    <SafeAreaView>
      <View style={styles.container}>
          <Button title="Show API" onPress={() => ShowApi(data)} />
          <Button title="Hide API" onPress={() => HideApi()}/>
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
        <FlatList data={apiList} renderItem={Entry} />
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

const mapDispatch = { AddItem, RemoveItem, ModifyItem, ShowApi, HideApi };
const mapState = (state) => ({ itemList: state.cart.itemList, apiList: state.api.apiList })
export default connect(mapState, mapDispatch)(App);