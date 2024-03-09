import * as React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, Alert, StatusBar} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { auth } from '../../firebaseConfig';
import { useFonts, Audiowide_400Regular } from '@expo-google-fonts/audiowide'

export default function WelcomeScreen({navigation}){
    const signOut = () => {
      Alert.alert('Déconnexion', 'Voulez-vous quittez l application ?', [{
        text : 'Abandonner'
      },
      {
        text : 'Me déconnecter',
        onPress : () => auth.signOut()
      }
    ])
    }

    let [fontsLoaded, fontError] = useFonts({
      Audiowide_400Regular,
    });
  
    if (!fontsLoaded && !fontError) {
      return null;
    }

    return(
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['pink', 'white']}
         style={styles.View}>
          <View style={styles.top}>
            <TouchableOpacity onPress={signOut}>
              <Ionicons name='arrow-back-circle' size={35} color='white'/>
            </TouchableOpacity>
            <Text style={styles.title}>IDEL Stock</Text>
          </View>
          <Image source={require('./Images/infirmière.png')} style={styles.img}/>
        </LinearGradient>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },
  View:{
    flex: 1,
  },
  top:{
    flexDirection: 'row',
    alignItems: 'center',
    margin:10,
    backgroundColor: '#3ad6cf',
    padding: 10,
    borderRadius: 20,
    borderColor:'white',
    borderWidth:2,
    shadowColor:'white',
    elevation: 20
  },
  title:{
    marginLeft: 60,
    fontSize: 30,
    color: 'white',
    fontFamily: 'Audiowide_400Regular'
  },
  img:{
    width: 300,
    height: 300,
    top:'20%',
    left:'10%',
  }
});