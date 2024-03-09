import React, { useMemo, useCallback } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Counter from "../Counter";

export default function SearchBarList({ searchPhrase, data }) {


  const filteredData = useMemo(() => {
    return data.filter(
      (item) =>
        item.name && 
        item.category && 
        (item.name.toLowerCase().includes(searchPhrase.toLowerCase()) ||
          item.category.toLowerCase().includes(searchPhrase.toLowerCase()))
    );
  }, [searchPhrase]);

  const renderItem = useCallback(({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemInfo}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCategory}>{item.category}</Text>
        </View>
        <View style={styles.itemCounter}>
          <Counter element={item.name} />
        </View>
      </View>
    );
  }, []);

  const keyExtractor = useCallback((item) => item.id.toString(), []);

  return (
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        initialNumToRender={8}
        maxToRenderPerBatch={8}
        windowSize={8}
        virtualized
      />
  ); // To manage the display of the flatlist of a category, modify the style of the view above
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "pink",
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 16,
    color: '#3ad6cf'
  },
  itemCategory: {
    fontSize: 14,
    color: '#3ad6cf',
  },
  itemCounter: {
    flex:1,
  },
});

