import * as React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

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
        tabBarPosition='bottom' 
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                let rn = route.name;

                if(rn === welcomeName){
                    iconName = focused ? 'hospital-box' : 'hospital-box-outline'
                    return <MaterialCommunityIcons name={iconName} size={23} color={color}/>
                } else if (rn === inventoryName){
                    iconName = focused ? 'list' : 'list-outline'
                } else if (rn === patientsName){
                    iconName = focused ? 'people-circle' : 'people-circle-outline'
                }

                return <Ionicons name={iconName} size={23} color={color}/>
            },
            tabBarActiveTintColor: '#3ad6cf',
            tabBarInactiveTintColor: 'pink',
            tabBarIndicatorStyle: {
                opacity: 0,
              },
            tabBarLabelStyle: { paddingBottom : 10, fontSize : 12},
            tabBarItemStyle: {marginHorizontal: 10, width: '100%'},
            tabBarStyle: {height: '8%', elevation: 0,   // for Android
            shadowOffset: {width: 0, height: 0 /* for iOS*/}, backgroundColor : 'transparent', position: 'absolute', left: '5%', bottom: '2%', width: '100%'},
            swipeEnabled:true
        })}
        >

        <Tab.Screen name={welcomeName} component={WelcomeScreen}/>
        <Tab.Screen name={patientsName} component={PatientsScreen}/>
        <Tab.Screen name={inventoryName} component={InventoryScreen}/>

        </Tab.Navigator>
        </NavigationContainer>
    )
}