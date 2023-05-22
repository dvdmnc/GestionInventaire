import * as React from 'react';
import { useState } from 'react';
import {View, Text, SafeAreaView, ScrollView, StatusBar, StyleSheet, TextInput, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BoxItemCategories from '../BoxItemCategories';
import {ListHygiene, ListSoins, ListPerfusions, ListUrinaires, 
  ListFecales, ListRespiratoire, ListGlycemie, ListNutrition, ListAspiration, 
  ListComplements, ListTpn, ListPansements } from '../Lists';

export default function InventoryScreen({navigation}){
    const [list, setList] = useState('');

    const hygieneclick = () => setList(<ListHygiene/>);
    const soinsclick = () => setList(<ListSoins/>);
    const perfusionsclick = () => setList(<ListPerfusions/>);
    const urinairesclick = () => setList(<ListUrinaires/>);
    const fecalesclick = () => setList(<ListFecales/>);
    const respiratoireclick = () => setList(<ListRespiratoire/>);
    const glycemieclick = () => setList(<ListGlycemie/>);
    const nutritionclick = () => setList(<ListNutrition/>);
    const aspirationclick = () => setList(<ListAspiration/>);
    const complementsclick = () => setList(<ListComplements/>);
    const tpnclick = () => setList(<ListTpn/>);
    const pansementsclick = () => setList(<ListPansements/>);

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
                  onPress= {hygieneclick}
                />
              <BoxItemCategories
                image= {<Image source={require('./Images/bandage.png')} style={styles.Icons}/>}
                color="rgba(56, 93, 56, 0.5)"
                text="Matériel de soins"
                onPress={soinsclick}
              />
              <BoxItemCategories
                image= {<Image source={require('./Images/syringe.png')} style={styles.Icons}/>}
                color="rgba(249, 228, 183, 0.5)"
                text="Perfusions"
                onPress={perfusionsclick}
              />
              <BoxItemCategories
                image= {<Image source={require('./Images/urinary-tract.png')} style={styles.Icons}/>}
                color="rgba(255, 114, 111, 0.5)"
                text="Soins Urinaires"
                onPress={urinairesclick}
              />
              <BoxItemCategories
                image= {<Image source={require('./Images/stool-test.png')} style={styles.Icons}/>}
                color="rgb(255, 255, 255)"
                text="Soins Fécales"
                onPress={fecalesclick}
              />
              <BoxItemCategories
                image= {<Image source={require('./Images/oxygen.png')} style={styles.Icons}/>}
                color="rgba(224, 182, 189, 0.5)"
                text="Respiratoire"
                onPress={respiratoireclick}
                />
              <BoxItemCategories
              image= {<Image source={require('./Images/sugar-blood-level.png')} style={styles.Icons}/>}
              color="rgba(255, 213, 190, 0.5)"
              text="Glycémie"
              onPress={glycemieclick}
              />
              <BoxItemCategories
              image= {<Image source={require('./Images/feeding.png')} style={styles.Icons} />}
              color="rgba(160, 160, 160, 0.5)"
              text="Nutrition"
              onPress={nutritionclick}
              />
              <BoxItemCategories
              image= {<Image source={require('./Images/suction-tube.png')} style={styles.Icons}/>}
              color="rgb(255, 255, 255)"
              text="Aspiration"
              onPress={aspirationclick}
              />
              <BoxItemCategories
              image= {<Image source={require('./Images/vitamin.png')} style={styles.Icons} />}
              color="rgba(68, 85, 90, 0.5)"
              text="Compléments Alimentaires"
              onPress={complementsclick}
              />
              <BoxItemCategories
              image= {<Image source={require('./Images/blood-pressure.png')} style={styles.Icons}/>}
              color="rgb(255, 255, 255)"
              text="TPN Console"
              onPress={tpnclick}
              />
              <BoxItemCategories
              image= {<Image source={require('./Images/band-aid.png')} style={styles.Icons}/>}
              color="rgba(255, 255, 0, 0.5)"
              text="Pansements"
              onPress={pansementsclick}
              />
            </ScrollView>
          </View>
          {list}
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
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  scrollViewCategories: {
    paddingLeft: 20,
  },
  Icons: {
    height: 60,
    width: 60
  }
});
