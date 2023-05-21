import * as React from 'react';
import {View, Text, SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';

export default function PatientsScreen({navigation}){
    return(
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text
          style={styles.text}>PATIENTS</Text>
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
  }
});