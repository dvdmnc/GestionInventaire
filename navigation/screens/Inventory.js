import * as React from 'react';
import {View, Text, SafeAreaView, ScrollView, StatusBar, StyleSheet, TextInput, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BoxItemCategories from '../BoxItemCategories';

export default function InventoryScreen({navigation}){
    return(
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>INVENTAIRE</Text>
          {/* search */}
          <View style={styles.searchBar}>
            <View style={styles.wrapperSearch}>
              <TextInput placeholder="Que cherchez-vous ?" style={styles.textInputSearch}/>
              <Ionicons name="search" size={30} color="#787878" />
            </View>
          </View>
          {/* categories */}
          <View>
            <Text style={styles.titleCategories}>Catégories</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollViewCategories}>
            <BoxItemCategories
                image= {<Image source={require('./Images/glove.png')} style={styles.Icons}/>}
                color="rgba(255, 165, 0, 0.5)"
                text="Hygiène"
                // onPress={() => navigation.navigate('Categories', 'Hygiènes & Matériel de soins')}
              />
              <BoxItemCategories
                image= {<Image source={require('./Images/bandage.png')} style={styles.Icons}/>}
                color="rgba(56, 93, 56, 0.5)"
                text="Matériel de soins"
                // onPress={() => navigation.navigate('Categories', 'Hygiènes & Matériel de soins')}
              />
              <BoxItemCategories
                image= {<Image source={require('./Images/syringe.png')} style={styles.Icons}/>}
                color="rgba(249, 228, 183, 0.5)"
                text="Perfusions"
                // onPress={() => navigation.navigate('Categories', 'Injectables')}
              />
               <BoxItemCategories
                image= {<Image source={require('./Images/urinary-tract.png')} style={styles.Icons}/>}
                color="rgba(255, 114, 111, 0.5)"
                text="Soins Urinaires"
                // onPress={() => navigation.navigate('Categories', '')}
              />
              <BoxItemCategories
                image= {<Image source={require('./Images/stool-test.png')} style={styles.Icons}/>}
                color="rgb(255, 255, 255)"
                text="Soins Fécales"
                // onPress={() => navigation.navigate('Categories', '')}
              />
               <BoxItemCategories
                image= {<Image source={require('./Images/oxygen.png')} style={styles.Icons}/>}
                color="rgba(224, 182, 189, 0.5)"
                text="Respiratoire"
                // onPress={() => navigation.navigate('Categories', '')}
                />
                <BoxItemCategories
                image= {<Image source={require('./Images/sugar-blood-level.png')} style={styles.Icons}/>}
                color="rgba(255, 213, 190, 0.5)"
                text="Glycémie"
                // onPress={() => navigation.navigate('Categories', '')}
                />
                <BoxItemCategories
                image= {<Image source={require('./Images/feeding.png')} style={styles.Icons} />}
                color="rgba(160, 160, 160, 0.5)"
                text="Nutrition"
                // onPress={() => navigation.navigate('Categories', '')}
                />
                <BoxItemCategories
                image= {<Image source={require('./Images/suction-tube.png')} style={styles.Icons}/>}
                color="rgb(255, 255, 255)"
                text="Aspiration"
                // onPress={() => navigation.navigate('Categories', '')}
                />
                <BoxItemCategories
                image= {<Image source={require('./Images/vitamin.png')} style={styles.Icons} />}
                color="rgba(68, 85, 90, 0.5)"
                text="Compléments Alimentaires"
                // onPress={() => navigation.navigate('Categories', '')}
                />
                <BoxItemCategories
                image= {<Image source={require('./Images/blood-pressure.png')} style={styles.Icons}/>}
                color="rgb(255, 255, 255)"
                text="TPN Console"
                // onPress={() => navigation.navigate('Categories', '')}
                />
                <BoxItemCategories
                image= {<Image source={require('./Images/band-aid.png')} style={styles.Icons}/>}
                color="rgba(255, 255, 0, 0.5)"
                text="Pansements"
                // onPress={() => navigation.navigate('Categories', '')}
                />
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'white',
    paddingHorizontal: 3
  },
  text: {
    fontSize: 35,
    textAlign: 'center',
    color: '#45b3e0',
    textDecorationLine: 'underline'
  },
  searchBar: {
    paddingHorizontal: 20,
    paddingTop: 20
  },
  wrapperSearch: {
    height: 40,
    backgroundColor: '#ededed',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  titleCategories: {
    fontSize: 18,
    color: '#45b3e0',
    padding: 20,
    fontWeight: 'bold'
  },
  scrollViewCategories: {
    paddingLeft: 20,
  },
  Icons: {
    height: 60,
    width: 60
  }
});
