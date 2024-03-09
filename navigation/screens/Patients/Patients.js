import * as React from 'react';
import { Text, SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
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
            style={styles.text}>Patients</Text>
          <Tab.Navigator
            initialRouteName={patientscategoryName}
            tabBarPosition='top' 
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
              tabBarActiveTintColor: '#3ad6cf',
              tabBarInactiveTintColor: 'pink',
              tabBarIndicatorStyle: {
                opacity: 0,
              },
              tabBarLabelStyle: { paddingBottom : 10, fontSize : 12},
              tabBarStyle: { height: 80, backgroundColor:'white', position:'absolute', width:'100%'},
              tabBarShowIcon: true, // Show icons
              swipeEnabled:true,
            })}
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
    backgroundColor: 'white',
    paddingTop: 20,
  },
  text: {
    fontSize: 35,
    textAlign: 'center',
    color: '#3ad6cf',
    fontFamily: 'monospace'
  }
});