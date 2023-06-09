import * as React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import WelcomeScreen from './screens/Welcome'
import InventoryScreen from './screens/Inventory/Inventory';
import PatientsScreen from './screens/Patients/Patients'

// Screen names
const welcomeName = 'Bienvenue'
const inventoryName = 'Inventaire'
const patientsName = 'Patients'

const Tab = createMaterialTopTabNavigator();

export default function MainContainer(){
    return(
      <NavigationContainer>
        <Tab.Navigator 
        initialRouteName={welcomeName}
        tabBarPosition='bottom' // Position your tab bar to the bottom
        swipeEnabled={true} // Enable swipe functionality
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                let rn = route.name;

                if(rn === welcomeName){
                    iconName = focused ? 'home' : 'home-outline'
                } else if (rn === inventoryName){
                    iconName = focused ? 'list' : 'list-outline'
                } else if (rn === patientsName){
                    iconName = focused ? 'people-circle' : 'people-circle-outline'
                }

                return <Ionicons name={iconName} size={23} color={color}/>
            },
        })}
        tabBarOptions={{
            activeTintColor: '#FF0000',
            inactiveTintColor: '#45b3e0',
            labelStyle: { paddingBottom : 10, fontSize : 10},
            style: {height: 70},
            showIcon: true, // Show icons
        }}
        
        >

        <Tab.Screen name={welcomeName} component={WelcomeScreen}/>
        <Tab.Screen name={patientsName} component={PatientsScreen}/>
        <Tab.Screen name={inventoryName} component={InventoryScreen}/>

        </Tab.Navigator>
      </NavigationContainer>
    )
}
