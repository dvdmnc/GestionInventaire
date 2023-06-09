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
  }, [data, searchPhrase]);

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
    <View>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={10}
        virtualized
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  itemCategory: {
    fontSize: 14,
    color: "#888888",
  },
  itemCounter: {
    marginLeft: 10,
  },
});
