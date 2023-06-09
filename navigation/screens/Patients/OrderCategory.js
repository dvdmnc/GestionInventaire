import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

export default function OrderCategoryScreen({ route }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const { element, Quantity } = route.params || {};

    if (element && Quantity) {
      const newItem = { id: Date.now(), content: `${element} - Quantité: ${Quantity}` };
      setItems(prevItems => [...prevItems, newItem]);
    }
  }, [route.params]);

  const removeItem = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.content}</Text>
      <TouchableOpacity style={styles.removeButton} onPress={() => removeItem(item.id)}>
        <Text style={styles.removeButtonText}>Supprimer</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      {items.length > 0 ? (
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.scrollViewContent}
        />
      ) : (
        <Text style={styles.emptyText}>Pas d'inventaire en attente de commande</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollViewContent: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemText: {
    flex: 1,
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: '#FF0000',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  removeButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  emptyText: {
    fontSize: 16,
    alignSelf: 'center',
    marginTop: 50,
  },
});
