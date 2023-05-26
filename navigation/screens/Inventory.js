import * as React from 'react';
import { useState, useEffect } from 'react';
import {View, Text, SafeAreaView, ScrollView, StatusBar, StyleSheet, TextInput, ActivityIndicator, Image} from 'react-native';
import BoxItemCategories from '../BoxItemCategories';
import {ListHygiene, ListSoins, ListPerfusions, ListUrinaires, 
  ListFecales, ListRespiratoire, ListGlycemie, ListNutrition, ListAspiration, 
  ListComplements, ListTpn, ListPansements } from '../Lists';
import SearchBar from '../SearchBar';
import SearchBarList from '../SearchBarList';
import { elements } from '../Elements';


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

    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const data = elements

    return(
      <SafeAreaView style={styles.container}>
          <Text style={styles.text}>INVENTAIRE</Text>
          <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
          />
          {clicked &&

          <SearchBarList
            searchPhrase={searchPhrase}
            data={data}
            setClicked={setClicked}
          />

          }
          {/* categories */}
          <ScrollView style={styles.scrollView}>
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
    backgroundColor: 'white'
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
  titleCategories: {
    fontSize: 18,
    color: '#45b3e0',
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  scrollViewCategories: {
    paddingLeft: 20,
    borderTopWidth: 3,
    borderTopColor: '#45b3e0',
    paddingTop: 5,
  },
  Icons: {
    height: 60,
    width: 60
  }
});
