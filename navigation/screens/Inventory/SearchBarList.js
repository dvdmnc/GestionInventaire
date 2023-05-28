import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";
import Counter from "../Counter";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, category }) => (
  <View style={{flex : 0.5, flexDirection: 'row', justifyContent:'flex-start'}}>
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.category}>{category}</Text>
    </View>
    <View style={{height: 50, alignSelf: 'center'}}>
    <Counter/>
    </View>
  </View>
);

// the filter
const SearchBarList = ({ searchPhrase, data }) => {
  const renderItem = ({ item }) => {
    // when no input, show all
    if (searchPhrase === "") {
      return <Item name={item.name} category={item.category}/>;
    }
    // filter of the name
    if (item.name.toUpperCase().includes(searchPhrase.toUpperCase())) {
      console.log(item.name);
      return <Item name={item.name} category={item.category}/>;
    }
    if (item.category.toUpperCase().includes(searchPhrase.toUpperCase())) {
        console.log(item.category);
        return <Item name={item.name} category={item.category} />;
    }
  };

  return (
    <SafeAreaView style={styles.list__container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
    </SafeAreaView>
  );
};

export default SearchBarList;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});