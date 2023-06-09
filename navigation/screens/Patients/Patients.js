import * as React from 'react';
import {View, Text, SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import PatientsCategoryScreen from './PatientsCategory';
import OrderCategoryScreen from './OrderCategory';

const patientscategoryName = 'Liste des Patients';
const ordercategoryName = 'Commande de la semaine';

const Tab = createMaterialTopTabNavigator()

export default function PatientsScreen(){
    return(
      <SafeAreaView style={styles.container}>
          <Text
            style={styles.text}>PATIENTS</Text>
          <Tab.Navigator
            initialRouteName={patientscategoryName}
            tabBarPosition='top' 
            swipeEnabled={true} 
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let rn = route.name;

                if (rn === patientscategoryName) {
                  iconName = focused ? 'people' : 'people-circle-outline';
                } else if (rn === ordercategoryName) {
                  iconName = focused ? 'warning' : 'warning-outline';
                }

                return <Ionicons name={iconName} size={18} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: '#FF0000',
              inactiveTintColor: '#45b3e0',
              labelStyle: { paddingBottom: 10, fontSize: 10 },
              style: { height: 70 },
              showIcon: true, // Show icons
            }}

          >

            <Tab.Screen name={patientscategoryName} component={PatientsCategoryScreen}/>
            <Tab.Screen name={ordercategoryName} component={OrderCategoryScreen} />

          </Tab.Navigator>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 35,
    textAlign: 'center',
    color: '#45b3e0',
    textDecorationLine: 'underline'
  }
});
