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

const ListRenasys = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Kit Renasys F MOUSSE M</Text>
                <Text style= {styles.text}>Kit Renasys G GAZE</Text>
                <Text style= {styles.text}>Reservoir Canister 300ml</Text>
                <Text style= {styles.text}>Reservoir Canister 800ml</Text>
                <Text style= {styles.text}>Gaze de remplissage 15x17</Text>
                <Text style= {styles.text}>Mousse de remplissage 10x13</Text>
                <Text style= {styles.text}>Patch gel 10x7</Text>
        </View>
    );
};

const ListActiv = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Kit Mousse Simplace PETIT</Text>
                <Text style= {styles.text}>Kit Mousse Simplace MOYEN</Text>
                <Text style= {styles.text}>Reservoir VAC Canister 300ml</Text>
                <Text style= {styles.text}>Reservoir VAC Gel Patch</Text>
        </View>
    );
};
const ListVacUlta = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>Kit Mousse Veraflo Small</Text>
            <Text style= {styles.text}>Cassette VeraLink</Text>
            <Text style= {styles.text}>Reservoir INFOVAC 500ml</Text>
            <Text style= {styles.text}>Reservoir INFOVAC 1000ml</Text>
        </View>
    );
};

const ListVivano = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Kit mousse 18*12,5cm Moyen</Text>
                <Text style= {styles.text}>Kit mousse 15*25cm Large</Text>
                <Text style= {styles.text}>Reservoir VIVANO 300ml</Text>
        </View>
    );
};

const ListKitTpn = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>AVELL 16x16</Text>
                <Text style= {styles.text}>AVELL 16x21</Text>
                <Text style= {styles.text}>AVELL 12x21</Text>
                <Text style= {styles.text}>AVELL 12x31</Text>
                <Text style= {styles.text}>AVELL 12x41</Text>
                <Text style= {styles.text}>AVELL 21x26</Text>
                <Text style= {styles.text}>AVELL 26x26</Text>
                <Text style= {styles.text}>PICO 10x20</Text>
                <Text style= {styles.text}>PICO 10x20</Text>
                <Text style= {styles.text}>PICO 10x30</Text>
                <Text style= {styles.text}>PICO 15x15</Text>
                <Text style= {styles.text}>PICO 15x20</Text>
                <Text style= {styles.text}>PICO 15x30</Text>
                <Text style= {styles.text}>PICO 20x20</Text>
                <Text style= {styles.text}>PICO 15x20 Multi</Text>
        </View>
    );
};

const ListSnap = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Kit SNaP 10x10cm</Text>
                <Text style= {styles.text}>Cartouche SNaP 125mmHg (60 ml)</Text>
                <Text style= {styles.text}>Protecteur Cutané Adpat 8815</Text>
        </View>
    );
};

const ListWoundel = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Electrodes Pansement</Text>
                <Text style= {styles.text}>Electrode de Dispersion</Text>
        </View>
    );
};

const ListBandElastique = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>Bandage Elastique TUBIFAST Bleu Ø 24-40cm</Text>
            <Text style= {styles.text}>Bandage Elastique TUBIFAST Jaune Ø 35-64cm</Text>
        </View>
    );
};

const ListBandContention = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>Bandage de contention Bande Biflex 10cm 16+légère</Text>
            <Text style= {styles.text}>Bandage de contention Bande Biflex 10cm 17+FORTE</Text>
        </View>
    );
};

const ListBandCompression = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>Bandage de compression URGO K2</Text>
            <Text style= {styles.text}>Bandage de compression Peha Haft 10cmx20m</Text>
            <Text style= {styles.text}>Bandage de compression Peha Haft 4cmx4m</Text>
            <Text style= {styles.text}>Bandage de compression Varolast (oxyde de zinc) 10x7</Text>
        </View>
    );
};

const ListHydrocellulaires = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>Allevyn Heel</Text>
            <Text style= {styles.text}>Aquacel Foam Talon</Text>
            <Text style= {styles.text}>Mepilex Talon</Text>
            <Text style= {styles.text}>Allevyn Border Sacrum 16.8 x 17.1cm</Text>
            <Text style= {styles.text}>Aquacel Foam Sacrum 20 x 16.9cm</Text>
            <Text style= {styles.text}>Mepilex Border Sacrum 22 x 25cm</Text>
            <Text style= {styles.text}>Aqua. Foam non adh 12 x 12.5cm</Text>
            <Text style= {styles.text}>Aqua. Foam non adh 15x20cm</Text>
            <Text style= {styles.text}>Aqua. Foam non adh 20x20cm</Text>
            <Text style= {styles.text}>Mepilex 12.5 x 12.5cm</Text>
            <Text style= {styles.text}>Aqua Foam Lite 10 x 10cm</Text>
            <Text style= {styles.text}>Mepilex border flexEM 10 x 25cm</Text>
            <Text style= {styles.text}>Allevyn Border 7.5x7.5cm</Text>
            <Text style= {styles.text}>Allevyn Border 10x20cm</Text>
            <Text style= {styles.text}>Allevyn Border 12.5x12.5cm</Text>
            <Text style= {styles.text}>Allevyn Border 17.5x17.5cm</Text>
            <Text style= {styles.text}>Aqua Foam adh 8x8cm</Text>
            <Text style= {styles.text}>Aqua Foam adh 12.5x 12.5cm</Text>
            <Text style= {styles.text}>Aqua Foam adh 10 x 20cm</Text>
            <Text style= {styles.text}>Aqua Foam adh 17.5x17.5cm</Text>
            <Text style= {styles.text}>Mepilex Border Flex 7.5x8.5cm</Text>
            <Text style= {styles.text}>Mepilex Border Flex 12.5x12.5cm</Text>
            <Text style= {styles.text}>Mepilex Border Flex 17.5x17.5cm</Text>
        </View>
    );
};

const ListHydrocolloides = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>Duoderm Signal Talon</Text>
            <Text style= {styles.text}>Duoderm SignalSacrum</Text>
            <Text style= {styles.text}>Comfeel+ transparent 9x14cm</Text>
            <Text style= {styles.text}>Comfeel+ transparent 10x10cm</Text>
            <Text style= {styles.text}>Comfeel+ transparent 13x13cm</Text>
            <Text style= {styles.text}>Comfeel+ transparent 18x18cm</Text>
            <Text style= {styles.text}>Comfeel opaque 10x10cm</Text>
            <Text style= {styles.text}>Comfeel opaque 13x13cm</Text>
            <Text style= {styles.text}>Comfeel opaque 15x15cm</Text>
            <Text style= {styles.text}>Comfeel opaque 18x18cm</Text>
        </View>
    );
};

const ListInterfaces = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>UrgoTul 10x10cm</Text>
            <Text style= {styles.text}>Adaptic 10x10cm (interface)</Text>
            <Text style= {styles.text}>Urgostart Interface 15x20cm</Text>
        </View>
    );
};

const ListHydrofibres = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>Aquacel mèche 2.5x40cm</Text>
            <Text style= {styles.text}>Aquacel Extra 12.5x12.5cm</Text>
            <Text style= {styles.text}>Aquacel Extra 13.5x15cm</Text>
            <Text style= {styles.text}>Aquacel Argent mèche 2.5x40cm</Text>
            <Text style= {styles.text}>Aquacel Argent 10x12cm</Text>
            <Text style= {styles.text}>biatain alginate Ag 15x15cm</Text>
            <Text style= {styles.text}>biatain fiber 12.5x12.5cm</Text>
        </View>
    );
};

const ListAlginates = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>Biatain Alginate 10x10cm</Text>
            <Text style= {styles.text}>Algosteril 10x10cm</Text>
            <Text style= {styles.text}>Biatain Alginate 15x15cm</Text>
            <Text style= {styles.text}>Algosteril 10x20cm</Text>
            <Text style= {styles.text}>Biatain Alginate mèche 5x40cm</Text>
            <Text style= {styles.text}>Algosteril mèche plate 5x40cm</Text>
        </View>
    );
};

const ListActifs = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>laluset crème tube 100g</Text>
            <Text style= {styles.text}>laluset flacon pressurisée 100g</Text>
            <Text style= {styles.text}>Intrasite gel - (Hydrogel)</Text>
            <Text style= {styles.text}>Purilon gel - (Hydrogel)</Text>
            <Text style= {styles.text}>Mepore 6x7cm</Text>
            <Text style= {styles.text}>Mepore 9x15cm</Text>
            <Text style= {styles.text}>Mepore 9x20cm</Text>
            <Text style= {styles.text}>Zetuvit (Pst Americain) 10 x 10cm</Text>
            <Text style= {styles.text}>Zetuvit (Pst Americain) 15x 20cm</Text>
            <Text style= {styles.text}>Zetuvit (Pst Americain) 20x25cm</Text>
            <Text style= {styles.text}>Jelonet 10x10cm (pst gras)</Text>
            <Text style= {styles.text}>Jelonet 10x40cm (pst gras)</Text>
            <Text style= {styles.text}>HydroClean Cavity 7.5 x 7.5cm</Text>
            <Text style= {styles.text}>HydroClean Cavity Ø4cm </Text>
            <Text style= {styles.text}>HydroClean Cavity 10x10cm</Text>
            <Text style= {styles.text}>UrgoStart B plus 6x6cm</Text>
            <Text style= {styles.text}>UrgoStart B plus border 13x13cm</Text>
            <Text style= {styles.text}>UrgoStart B plus border 15x20cm</Text>
            <Text style= {styles.text}>Sorbact Gel Dressing 7.5x7.5 cm</Text>
            <Text style= {styles.text}>Sorbact Gel Dressing 7.5x15cm</Text>
            <Text style= {styles.text}>Actisorb (pansement charbon)</Text>
        </View>
    );
};

const ListSuperAbsorbant = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>Convamax superabs 10x10cm</Text>
            <Text style= {styles.text}>Convamax superabs 10x20cm</Text>
            <Text style= {styles.text}>Convamax superabs 12.5x12.5cm</Text>
            <Text style= {styles.text}>Convamax superabs 20x30cm</Text>
            <Text style= {styles.text}>Sorbact superabs 10x10cm</Text>
            <Text style= {styles.text}>Cutimed Sorbion 10x10cm</Text>
            <Text style= {styles.text}>Cutimed Sorbion 30x20cm</Text>
            <Text style= {styles.text}>Cutimed Sorbionsing XL 45x20cm</Text>
            <Text style= {styles.text}>Resposorb 12.5x12.5cm</Text>
            <Text style= {styles.text}>Resposorb border 17.5x17.5</Text>
        </View>
    );
};

const ListFixation = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>Bande Omnifix 5cm</Text>
            <Text style= {styles.text}>Bande Omnifix 10cm</Text>
            <Text style= {styles.text}>Opsite 14x10cm</Text>
            <Text style= {styles.text}>Opsite 14x25cm</Text>
            <Text style= {styles.text}>Leukostrip - Stéristrip</Text>
            <Text style= {styles.text}>Compresse trachéo "Métalline"</Text>
        </View>
    );
};


export {ListAccessoires, ListMateriel, ListProduits, ListNonSterile, 
    ListSterile, ListsousFecale, ListDrainage, ListStomie, ListJusdeFruits, ListEauGelifiee, 
    ListPoudreHyperProtidique, ListBoissonLactee, ListCreme, ListConcentreProteine, ListBoissonLacteeSpe,
    ListRenasys, ListActiv, ListVacUlta, ListVivano, ListKitTpn, ListSnap, ListWoundel, ListBandElastique,
ListBandContention, ListBandCompression, ListHydrocellulaires, ListHydrocolloides, ListInterfaces, 
ListHydrofibres, ListAlginates, ListActifs, ListSuperAbsorbant, ListFixation};

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
