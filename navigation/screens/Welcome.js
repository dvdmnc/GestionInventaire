import * as React from 'react';
import {View, Text, SafeAreaView, ScrollView, StatusBar, StyleSheet, Image} from 'react-native';

export default function WelcomeScreen(){
    return(
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>BIENVENUE SUR IDEL STOCK</Text>
          <Text style={styles.text2}>L'application de gestion d'inventaire conçue pour les infirmières libérales</Text>
          <Image style={styles.caducee} source={require('./Images/Caducee.png')}/> 
        </ScrollView>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  text2: {
    fontSize: 25,
    textAlign: 'center',
    color: '#45b3e0',
    marginTop: 220
  },
  caducee: {
    flex: 1,
    width : 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20
  }
});
