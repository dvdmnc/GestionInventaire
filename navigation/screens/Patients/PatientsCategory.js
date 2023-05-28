import * as React from 'react';
import { useState } from 'react';
import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {ListPatient1, ListPatient2} from './ListPatients';
import { ListItem } from '@rneui/themed';

export default function PatientsCategoryScreen(){

    const [expanded, setExpanded] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);

    return(
        <SafeAreaView>
            <ScrollView>
            <ListItem.Accordion style={styles.listitemaccordion}
            content={
                <ListItem.Content>
                <ListItem.Title>Patient 1</ListItem.Title>
                </ListItem.Content>
            }
            isExpanded={expanded}
            onPress={() => {
                setExpanded(!expanded);
            }}
            >
            <ListPatient1 />
            </ListItem.Accordion>
            <ListItem.Accordion style={styles.listitemaccordion}
            content={
                <ListItem.Content>
                <ListItem.Title>Patient 2</ListItem.Title>
                </ListItem.Content>
            }
            isExpanded={expanded2}
            onPress={() => {
                setExpanded2(!expanded2);
            }}
            >
            <ListPatient2 />
            </ListItem.Accordion>
            </ScrollView>
        </SafeAreaView>
    )} 


const styles = StyleSheet.create({  
    listitemaccordion: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        borderTopColor: 'black',
        borderTopWidth: 1
    }
});
