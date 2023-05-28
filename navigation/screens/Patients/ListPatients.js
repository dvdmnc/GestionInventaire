import {View, Text, SafeAreaView, ScrollView, StyleSheet, Image} from 'react-native';
import * as React from 'react';
import { ListItem } from '@rneui/themed';

const ListPatient1 = () => {
    return(
        <View style={styles.view}>
            <Text style={styles.title}>En stock :</Text>
    <ListItem>
        <ListItem.Content style={styles.listitemcontent}>
        <ListItem.Title style={styles.listitemtitle}>Blouse</ListItem.Title>
        <ListItem.Subtitle>Hygiène</ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>
    <ListItem>
        <ListItem.Content style={styles.listitemcontent}>
        <ListItem.Title style={styles.listitemtitle} >Tablier Plastique</ListItem.Title>
        <ListItem.Subtitle>Hygiène</ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>
    <Text style={styles.title}>A commander :</Text>
    <ListItem>
    <ListItem.Content style={styles.listitemcontent}>
    <ListItem.Title style={styles.listitemtitle}>Dosette</ListItem.Title>
    <ListItem.Subtitle>Perfusions - Produits</ListItem.Subtitle>
    </ListItem.Content>
</ListItem>
<ListItem>
    <ListItem.Content style={styles.listitemcontent}>
    <ListItem.Title style={styles.listitemtitle}>Sonde rectale</ListItem.Title>
    <ListItem.Subtitle>Soins Fécales - Fecale</ListItem.Subtitle>
    </ListItem.Content>
</ListItem>
    </View>);
};

const ListPatient2 = () => {
    return(
    <View style={styles.view}>
        <Text style={styles.title}>En stock :</Text>
<ListItem>
    <ListItem.Content style={styles.listitemcontent}>
    <ListItem.Title style={styles.listitemtitle}>Blouse</ListItem.Title>
    <ListItem.Subtitle>Hygiène</ListItem.Subtitle>
    </ListItem.Content>
</ListItem>
<ListItem>
    <ListItem.Content style={styles.listitemcontent}>
    <ListItem.Title style={styles.listitemtitle}>Tablier Plastique</ListItem.Title>
    <ListItem.Subtitle>Hygiène</ListItem.Subtitle>
    </ListItem.Content>
</ListItem>
<Text style={styles.title}>A commander :</Text>
<ListItem>
    <ListItem.Content style={styles.listitemcontent}>
    <ListItem.Title style={styles.listitemtitle}>Dosette</ListItem.Title>
    <ListItem.Subtitle>Perfusions - Produits</ListItem.Subtitle>
    </ListItem.Content>
</ListItem>
<ListItem>
    <ListItem.Content style={styles.listitemcontent}>
    <ListItem.Title style={styles.listitemtitle}>Sonde rectale</ListItem.Title>
    <ListItem.Subtitle>Soins Fécales - Fecale</ListItem.Subtitle>
    </ListItem.Content>
</ListItem>
</View>);
};

export {ListPatient1, ListPatient2};

const styles = StyleSheet.create({ 
    view:{
        backgroundColor: 'black'
    } ,
    title: {
        fontSize : 25,
        padding: 3,
        textDecorationLine: 'underline',
        marginLeft: 5,
        color: 'white'
    },
    listitemcontent: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingBottom: 3,
    },
    listitemtitle: {
        fontWeight:'bold'
    }
});