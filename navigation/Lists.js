import * as React from 'react';
import {View, Text, SafeAreaView, ScrollView, StyleSheet, Image} from 'react-native';
import { color } from 'react-native-reanimated';

const ListHygiene = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Blouse</Text>
                <Text style= {styles.text}>Tablier Plastique</Text>
                <Text style= {styles.text}>Gants non stérile</Text>
                <Text style= {styles.text}>Masque</Text>
                <Text style= {styles.text} >Charlotte</Text>
                <Text style= {styles.text}>Gants Stériles</Text>
                <Text style= {styles.text}>Savon</Text>
                <Text style= {styles.text}>Aniosgel Pompe</Text>
                <Text style= {styles.text} >Anios Surfa'safe</Text>
                <Text style= {styles.text}>Salvanios</Text>
                <Text style= {styles.text}>Gants de Toilette</Text>
                <Text style= {styles.text}>Batonnets soins de bouche</Text>
                <Text style= {styles.text}>Comprimés soins de bouche</Text>
                <Text style= {styles.text}>Abaisse langue</Text>
                <Text style= {styles.text}>Crachoir</Text>
                <Text style= {styles.text}>Haricot</Text>
                <Text style= {styles.text} >Collecteur objets piquants</Text>
                <Text style= {styles.text}>Sac DASRI</Text>
                <Text style= {styles.text} >Sac Poubelle</Text>
        </View>
    );
};

const ListSoins = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Alese</Text>
                <Text style= {styles.text}>Set à Pansements</Text>
                <Text style= {styles.text}>Compresse 7.5 * 7.5 B50</Text>
                <Text style= {styles.text}>Compresse 10 * 10 B50</Text>
                <Text style= {styles.text}>Ciseaux</Text>
                <Text style= {styles.text}>Coupe Fils</Text>
                <Text style= {styles.text}>Curette</Text>
                <Text style= {styles.text}>Stylet</Text>
                <Text style= {styles.text}>Bande Nylex</Text>
                <Text style= {styles.text}>Bande Crêpe (Velpeau)</Text>
                <Text style= {styles.text}>Sparadrap Microporeux</Text>
                <Text style= {styles.text}>Champ Stérile</Text>
                <Text style= {styles.text}>Ôte Agrafes</Text>
                <Text style= {styles.text}>Protecteur Cutané Brava Max</Text>
                <Text style= {styles.text}>Spray Brava</Text>
                <Text style= {styles.text}>Spray Adapt</Text>
                <Text style= {styles.text}>Sanyrene Pomp</Text>
                <Text style= {styles.text}>Conveen Portact cr</Text>
                <Text style= {styles.text}>Verre Canard</Text>
                <Text style= {styles.text}>Pilulier</Text>
                <Text style= {styles.text}>Ecrase comprimés</Text>
        </View>
    );
};

const ListPerfusions = () => {
    return('');};

const ListUrinaires = () => {
    return('');};

const ListFecales = () => {
    return('');};

const ListRespiratoire = () => {
    return('');};

const ListGlycemie = () => {
    return('');};

const ListNutrition = () => {
    return('');};

const ListAspiration = () => {
    return('');};

const ListComplements = () => {
    return('');};

const ListTpn = () => {
    return('');};

const ListPansements = () => {
    return('');};

export {ListHygiene, ListSoins, ListPerfusions, ListUrinaires, 
    ListFecales, ListRespiratoire, ListGlycemie, ListNutrition, ListAspiration, 
    ListComplements, ListTpn, ListPansements};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopWidth: 3,
        marginTop: 5,
        borderTopColor: '#45b3e0'
    },
    text: {
        paddingVertical : 5,
        borderBottomWidth: 1,
        borderBottomColor: '#45b3e0',
        color: '#45b3e0'
    }
});