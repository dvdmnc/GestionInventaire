import * as React from 'react';
import {View, Text, SafeAreaView, ScrollView, StyleSheet, Image} from 'react-native';

const ListProduits = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Dosette</Text>
                <Text style= {styles.text}>Spray Irriclens</Text>
                <Text style= {styles.text}>Poche 50ml</Text>
                <Text style= {styles.text}>Poche 100ml</Text>
                <Text style= {styles.text}>VESIRIG Instil Vesicale 250ml</Text>
        </View>
    );
};

const ListMateriel = () => {
    return(
            <View style= {styles.container}>
                    <Text style= {styles.text}>Perfuseur</Text>
                    <Text style= {styles.text}>DOSIFLOW</Text>
                    <Text style= {styles.text}>Prolongateur</Text>
                    <Text style= {styles.text}>Rampe de 4 robinets 3 voies</Text>
                    <Text style= {styles.text}>Robinet 3 voies</Text>
                    <Text style= {styles.text}>Robinet 3 voies + prolongateur</Text>
                    <Text style= {styles.text}>Caresite valve positive</Text>
                    <Text style= {styles.text}>Bouchon Stopper</Text>
                    <Text style= {styles.text}>Tubulure Sapphire</Text>
                    <Text style= {styles.text}>Prolongateur 2 voies</Text>
                    <Text style= {styles.text}>Poche vide Sapphire 100ml</Text>
                    <Text style= {styles.text}>Poche vide Sapphire 250ml</Text>
                    <Text style= {styles.text}>Catheter ailette sécurisé 22G bleu</Text>
                    <Text style= {styles.text}>Catheter sécurisé 20G rose</Text>
                    <Text style= {styles.text}>Catheter sécurisé 22G bleu</Text>
                    <Text style= {styles.text}>Catheter sécurisé 24G jaune</Text>
                    <Text style= {styles.text}>Aiguille Trocart 18G rose</Text>
                    <Text style= {styles.text}>Aiguille IM 22G noire</Text>
                    <Text style= {styles.text}>Aiguille SC 25G orange</Text>
                    <Text style= {styles.text}>Seringue à Insuline 1ml</Text>
                    <Text style= {styles.text}>Seringue 2ml</Text>
                    <Text style= {styles.text}>Seringue 5ml</Text>
                    <Text style= {styles.text}>Seringue 10ml</Text>
                    <Text style= {styles.text}>Seringue 20ml</Text>
                    <Text style= {styles.text}>Seringue 20ml luer lock</Text>
                    <Text style= {styles.text}>Seringue 50ml luer lock</Text>
                    <Text style= {styles.text}>Set de transfert</Text>
                    <Text style= {styles.text}>Seringue à Insuline 1ml</Text>
                    <Text style= {styles.text}>Pst adhésif Tegaderm I.V. 7x8.5cm</Text>
        </View>
    );
};

const ListAccessoires = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Aiguille de Huber 19G - 15 mm</Text>
                <Text style= {styles.text}>Aiguille de Huber 19G - 20 mm</Text>
                <Text style= {styles.text}>Aiguille de Huber 19G - 25 mm</Text>
                <Text style= {styles.text}>Aiguille de Huber 22G - 15 mm</Text>
                <Text style= {styles.text}>Aiguille de Huber 22G - 20 mm</Text>
                <Text style= {styles.text}>Pst piccline Grip-Lok Universel</Text>
                <Text style= {styles.text}>Set pose perfusion Piccline + Seringue pre-remplie de Nacl 0.9% 10ml</Text>
        </View>
    );
};

const ListNonSterile = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Pot a Diurèse</Text>
                <Text style= {styles.text}>Pistolet</Text>
                <Text style= {styles.text}>Bassin</Text>
                <Text style= {styles.text}>Etui pénien Coloplast Conveen Optima Ø21</Text>
                <Text style= {styles.text}>Etui pénien Coloplast Conveen Optima Ø25</Text>
                <Text style= {styles.text}>Etui pénien Coloplast Conveen Optima Ø30</Text>
                <Text style= {styles.text}>Etui pénien Coloplast Conveen Optima Ø35</Text>
                <Text style= {styles.text}>Etui pénien Coloplast Conveen Optima Ø40</Text>
                <Text style= {styles.text}>Etui pénien Braun Urimed Vision Ø25</Text>
                <Text style= {styles.text}>Etui pénien Braun Urimed Vision Ø29</Text>
                <Text style= {styles.text}>Etui pénien Braun Urimed Vision Ø32</Text>
                <Text style= {styles.text}>Poche à urine non stérile 1.5L</Text>
                <Text style= {styles.text}>Poche à urine non stérile 2.0L</Text>
                <Text style= {styles.text}>Support de poche à urine</Text>
                <Text style= {styles.text}>Filet de poche (B2)</Text>
                <Text style= {styles.text}>Sonde auto-sondage Femme</Text>
                <Text style= {styles.text}>Sonde auto-sondage Homme</Text>
        </View>
    );
};

const ListSterile = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Set de sondage urinaire</Text>
                <Text style= {styles.text}>Sonde vésicale verte CH14</Text>
                <Text style= {styles.text}>Sonde vésicale orange CH16</Text>
                <Text style= {styles.text}>Sonde vésicale rouge CH18</Text>
                <Text style= {styles.text}>Sonde vésicale jaune CH20</Text>
                <Text style= {styles.text}>Sonde vésicale violette CH22</Text>
                <Text style= {styles.text}>Poche à urine stérile 2.0L</Text>
        </View>
    );
};

const ListsousFecale = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Sonde Rectale</Text>
                <Text style= {styles.text}>Tampon obturateur anal Ø37mm</Text>
        </View>
    );
};

const ListDrainage = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>kit pleurX 1L</Text>
                <Text style= {styles.text}>kit periTX 2L</Text>
        </View>
    );
};

const ListStomie = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Support de Stomie</Text>
                <Text style= {styles.text}>Poche de Stomie</Text>
                <Text style= {styles.text}>Ceinture de poche</Text>
                <Text style= {styles.text}>Poudre Adapt 7906 Hollister</Text>
                <Text style= {styles.text}>Pate Adapt 79301 Hollister</Text>
                <Text style= {styles.text}>Poudre Orahesive Convatec</Text>
                <Text style= {styles.text}>Pate Stomahesive Convatec</Text>
        </View>
    );
};

const ListJusdeFruits = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Clinutren Fruit Ananas/Orange</Text>
                <Text style= {styles.text}>Clinuten Fruit Framboise/Cassis</Text>
                <Text style= {styles.text}>Clinuten Fruit Poire/Cerise</Text>
                <Text style= {styles.text}>Clinuten Fruit Pomme/Raisin</Text>
                <Text style= {styles.text}>Fortimel Jucy Fraise</Text>
                <Text style= {styles.text}>Fortimel Jucy Pomme</Text>
                <Text style= {styles.text}>Fortimel Jucy Tropical</Text>
        </View>
    );
};

const ListEauGelifiee = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Fresubin Citron</Text>
                <Text style= {styles.text}>Fresubin Fruits Rouges</Text>
                <Text style= {styles.text}>Fresubin Menthe</Text>
        </View>
    );
};

const ListPoudreHyperProtidique = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Nutricia Protifar 500g lactose</Text>
                <Text style= {styles.text}>Clinutren proteine 400g</Text>
        </View>
    );
};

const ListBoissonLactee = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Clinutren HP/HC Café</Text>
                <Text style= {styles.text}>Clinutren HP/HC Caramel</Text>
                <Text style= {styles.text}>Clinutren HP/HC Chocolat</Text>
                <Text style= {styles.text}>Clinutren HP/HC Fraise</Text>
                <Text style= {styles.text}>Clinutren HP/HC Vanille</Text>
                <Text style= {styles.text}>Fortimel Energy Fraise</Text>
                <Text style= {styles.text}>Fortimel Energy Vanille</Text>
                <Text style= {styles.text}>Fresubin 2kcal Fruits de la Forêt</Text>
                <Text style= {styles.text}>Fresubin 2kcal Pêche/Abricot</Text>
        </View>
    );
};

const ListCreme = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Clinutren Crème Caramel</Text>
                <Text style= {styles.text}>Clinutren Crème Chocolat</Text>
                <Text style= {styles.text}>Clinutren Crème Vanille</Text>
                <Text style= {styles.text}>Fresubin Crème Cappuccino</Text>
                <Text style= {styles.text}>Fresubin Crème Chocolat</Text>
                <Text style= {styles.text}>Fresubin Crème Fraise des bois</Text>
                <Text style= {styles.text}>Fresubin Crème Vanille</Text>
        </View>
    );
};

const ListConcentreProteine = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Renutryl Concentré Café</Text>
                <Text style= {styles.text}>Renutryl Concentré Caramel</Text>
                <Text style= {styles.text}>Renutryl Concentré Fraise</Text>
                <Text style= {styles.text}>Renutryl Concentré Vanille</Text>
                <Text style= {styles.text}>Renutryl Concentré Fruit Orange</Text>
                <Text style= {styles.text}>Renutryl Concentré Fruit Fruits Rouges</Text>
                <Text style= {styles.text}>Renutryl Concentré Fruit Ananas</Text>
                <Text style= {styles.text}>Renutryl Concentré Fruit Pomme</Text>
        </View>
    );
};

const ListBoissonLacteeSpe = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Renutryl Booster Fraise</Text>
                <Text style= {styles.text}>Renutryl Booster Vanille</Text>
                <Text style= {styles.text}>Renutryl Booster Chocolat</Text>
                <Text style= {styles.text}>Renutryl Booster Café</Text>
                <Text style= {styles.text}>Cubitan Chocolat</Text>
                <Text style= {styles.text}>Cubitan Fraise</Text>
                <Text style= {styles.text}>Cubitan Vanille</Text>
        </View>
    );
};

export {ListAccessoires, ListMateriel, ListProduits, ListNonSterile, 
    ListSterile, ListsousFecale, ListDrainage, ListStomie, ListJusdeFruits, ListEauGelifiee, 
    ListPoudreHyperProtidique, ListBoissonLactee, ListCreme, ListConcentreProteine, ListBoissonLacteeSpe};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
    },
    text: {
        paddingVertical : 5,
        borderBottomWidth: 1,
        borderBottomColor: '#45b3e0',
        color: '#45b3e0'
    }
});