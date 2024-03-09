import * as React from 'react';
import { useState } from 'react';
import {Text, SafeAreaView, StyleSheet, View} from 'react-native';

import SearchBar from './SearchBar';
import SearchBarList from './SearchBarList';
import { elements } from './Elements';
import CategoryDisplay from './CategoryDisplay';


export default function InventoryScreen(){
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const data = elements
    
    

    return(
      <SafeAreaView style={styles.container}>
          <Text style={styles.text}>Inventaire</Text>
          <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
          />
          {clicked &&
          <View style={styles.searchlist}>
            <SearchBarList
              searchPhrase={searchPhrase}
              data={data}
            />
            </View>
          }
          {/* categories */}
          <CategoryDisplay />
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 35,
    textAlign: 'center',
    color: '#3ad6cf',
    fontFamily: 'monospace'
  },
  searchlist:{
    height:'100%'
  }
});