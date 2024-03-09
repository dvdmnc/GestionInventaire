import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { setDoc, doc, getDocs, collection, deleteDoc } from "firebase/firestore";
import { db } from '../../../firebaseConfig'; 

export default function OrderCategoryScreen({ route }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const { element, Quantity } = route.params || {};

    if (element && Quantity) {
      const newItem = { name: `${element}`, quantity: `${Quantity}` };
      setDoc(doc(db, "Orders", `${items.length != 0 ? items[items.length - 1].key + 1 : 1}`), newItem)
      setItems(prevItems => [...prevItems, {...newItem, "key": items.length != 0 ? items[items.length - 1].key + 1 : 1}]);
    }
  }, [route.params]);

  useEffect(() => {
    getDocs(collection(db, 'Orders'))
      .then((snapshot) => {
        let Collection = []
        snapshot.docs.forEach((doc) => {
            Collection.push({...doc.data(), key: doc.id })
         })
         Collection.forEach((item) => {
          setItems((prevItems) => [...prevItems, {"name" : item["name"], "key": item["key"], "quantity" : item["quantity"]}])
         })
      })
  }, [])

  const removeItem = (id) => {
    deleteDoc(doc(db, "Orders", `${id}`))
    setItems(prevItems => prevItems.filter(item => item.key !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}  - Quantité : {item.quantity}</Text>
      <TouchableOpacity style={styles.removeButton} onPress={() => removeItem(item.key)}>
        <Text style={styles.removeButtonText}>Supprimer</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
          colors={['pink', 'white']}
         style={{flex:1}}>
      {items.length > 0 ? (
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.key.toString()}
          contentContainerStyle={styles.scrollViewContent}
        />
      ) : (
        <Text style={styles.emptyText}>Pas d'inventaire en attente de commande</Text>
      )}
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:'20%'
  },
  scrollViewContent: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#3ad6cf',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemText: {
    flex: 1,
    fontSize: 16,
    color:'#3ad6cf',
  },
  removeButton: {
    backgroundColor: 'pink',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  removeButtonText: {
    color: '#3ad6cf',
    fontSize: 12,
  },
  emptyText: {
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 50,
    color:'white',
    fontWeight: 'bold'
  },
});

