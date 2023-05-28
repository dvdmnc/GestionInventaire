import * as React from 'react';
import {View, Text, SafeAreaView, ScrollView, StyleSheet, Image} from 'react-native';
import Counter from '../Counter';

const ListProduits = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Dosette                    <Counter/></Text>
                <Text style= {styles.text}>Spray Irriclens                    <Counter/></Text>
                <Text style= {styles.text}>Poche 50ml                    <Counter/></Text>
                <Text style= {styles.text}>Poche 100ml                    <Counter/></Text>
                <Text style= {styles.text}>VESIRIG Instil Vesicale 250ml                    <Counter/></Text>
        </View>
    );
};

const ListMateriel = () => {
    return(
            <View style= {styles.container}>
                    <Text style= {styles.text}>Perfuseur                    <Counter/></Text>
                    <Text style= {styles.text}>DOSIFLOW                    <Counter/></Text>
                    <Text style= {styles.text}>Prolongateur                    <Counter/></Text>
                    <Text style= {styles.text}>Rampe de 4 robinets 3 voies                    <Counter/></Text>
                    <Text style= {styles.text}>Robinet 3 voies                    <Counter/></Text>
                    <Text style= {styles.text}>Robinet 3 voies + prolongateur</Text>
                    <Text style= {styles.text}>Caresite valve positive                    <Counter/></Text>
                    <Text style= {styles.text}>Bouchon Stopper                    <Counter/></Text>
                    <Text style= {styles.text}>Tubulure Sapphire                    <Counter/></Text>
                    <Text style= {styles.text}>Prolongateur 2 voies                    <Counter/></Text>
                    <Text style= {styles.text}>Poche vide Sapphire 100ml                    <Counter/></Text>
                    <Text style= {styles.text}>Poche vide Sapphire 250ml                    <Counter/></Text>
                    <Text style= {styles.text}>Catheter ailette sécurisé 22G bleu                    <Counter/></Text>
                    <Text style= {styles.text}>Catheter sécurisé 20G rose                    <Counter/></Text>
                    <Text style= {styles.text}>Catheter sécurisé 22G bleu                    <Counter/></Text>
                    <Text style= {styles.text}>Catheter sécurisé 24G jaune                    <Counter/></Text>
                    <Text style= {styles.text}>Aiguille Trocart 18G rose                    <Counter/></Text>
                    <Text style= {styles.text}>Aiguille IM 22G noire                    <Counter/></Text>
                    <Text style= {styles.text}>Aiguille SC 25G orange                    <Counter/></Text>
                    <Text style= {styles.text}>Seringue à Insuline 1ml                    <Counter/></Text>
                    <Text style= {styles.text}>Seringue 2ml                    <Counter/></Text>
                    <Text style= {styles.text}>Seringue 5ml                    <Counter/></Text>
                    <Text style= {styles.text}>Seringue 10ml                    <Counter/></Text>
                    <Text style= {styles.text}>Seringue 20ml                    <Counter/></Text>
                    <Text style= {styles.text}>Seringue 20ml luer lock                    <Counter/></Text>
                    <Text style= {styles.text}>Seringue 50ml luer lock                    <Counter/></Text>
                    <Text style= {styles.text}>Set de transfert                    <Counter/></Text>
                    <Text style= {styles.text}>Pst adhésif Tegaderm I.V. 7x8.5cm                    <Counter/></Text>
        </View>
    );
};

const ListAccessoires = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Aiguille de Huber 19G - 15 mm                    <Counter/></Text>
                <Text style= {styles.text}>Aiguille de Huber 19G - 20 mm                    <Counter/></Text>
                <Text style= {styles.text}>Aiguille de Huber 19G - 25 mm                    <Counter/></Text>
                <Text style= {styles.text}>Aiguille de Huber 22G - 15 mm                    <Counter/></Text>
                <Text style= {styles.text}>Aiguille de Huber 22G - 20 mm                    <Counter/></Text>
                <Text style= {styles.text}>Pst piccline Grip-Lok Universel                    <Counter/></Text>
                <Text style= {styles.text}>Set pose perfusion Piccline + Seringue pre-remplie de Nacl 0.9% 10ml                    <Counter/></Text>
        </View>
    );
};

const ListNonSterile = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Pot a Diurèse                    <Counter/></Text>
                <Text style= {styles.text}>Pistolet                    <Counter/></Text>
                <Text style= {styles.text}>Bassin                    <Counter/></Text>
                <Text style= {styles.text}>Etui pénien Coloplast Conveen Optima Ø21                    <Counter/></Text>
                <Text style= {styles.text}>Etui pénien Coloplast Conveen Optima Ø25                    <Counter/></Text>
                <Text style= {styles.text}>Etui pénien Coloplast Conveen Optima Ø30                    <Counter/></Text>
                <Text style= {styles.text}>Etui pénien Coloplast Conveen Optima Ø35                    <Counter/></Text>
                <Text style= {styles.text}>Etui pénien Coloplast Conveen Optima Ø40                    <Counter/></Text>
                <Text style= {styles.text}>Etui pénien Braun Urimed Vision Ø25                    <Counter/></Text>
                <Text style= {styles.text}>Etui pénien Braun Urimed Vision Ø29                    <Counter/></Text>
                <Text style= {styles.text}>Etui pénien Braun Urimed Vision Ø32                    <Counter/></Text>
                <Text style= {styles.text}>Poche à urine non stérile 1.5L                    <Counter/></Text>
                <Text style= {styles.text}>Poche à urine non stérile 2.0L                    <Counter/></Text>
                <Text style= {styles.text}>Support de poche à urine                    <Counter/></Text>
                <Text style= {styles.text}>Filet de poche (B2)                    <Counter/></Text>
                <Text style= {styles.text}>Sonde auto-sondage Femme                    <Counter/></Text>
                <Text style= {styles.text}>Sonde auto-sondage Homme                    <Counter/></Text>
        </View>
    );
};

const ListSterile = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Set de sondage urinaire                    <Counter/></Text>
                <Text style= {styles.text}>Sonde vésicale verte CH14                    <Counter/></Text>
                <Text style= {styles.text}>Sonde vésicale orange CH16                    <Counter/></Text>
                <Text style= {styles.text}>Sonde vésicale rouge CH18                    <Counter/></Text>
                <Text style= {styles.text}>Sonde vésicale jaune CH20                    <Counter/></Text>
                <Text style= {styles.text}>Sonde vésicale violette CH22                    <Counter/></Text>
                <Text style= {styles.text}>Poche à urine stérile 2.0L                    <Counter/></Text>
        </View>
    );
};

const ListsousFecale = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Sonde Rectale                    <Counter/></Text>
                <Text style= {styles.text}>Tampon obturateur anal Ø37mm                    <Counter/></Text>
        </View>
    );
};

const ListDrainage = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>kit pleurX 1L                    <Counter/></Text>
                <Text style= {styles.text}>kit periTX 2L                    <Counter/></Text>
        </View>
    );
};

const ListStomie = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Support de Stomie                    <Counter/></Text>
                <Text style= {styles.text}>Poche de Stomie                    <Counter/></Text>
                <Text style= {styles.text}>Ceinture de poche                    <Counter/></Text>
                <Text style= {styles.text}>Poudre Adapt 7906 Hollister                    <Counter/></Text>
                <Text style= {styles.text}>Pate Adapt 79301 Hollister                    <Counter/></Text>
                <Text style= {styles.text}>Poudre Orahesive Convatec                    <Counter/></Text>
                <Text style= {styles.text}>Pate Stomahesive Convatec                    <Counter/></Text>
        </View>
    );
};

const ListJusdeFruits = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Clinutren Fruit Ananas/Orange                    <Counter/></Text>
                <Text style= {styles.text}>Clinuten Fruit Framboise/Cassis                    <Counter/></Text>
                <Text style= {styles.text}>Clinuten Fruit Poire/Cerise                    <Counter/></Text>
                <Text style= {styles.text}>Clinuten Fruit Pomme/Raisin                    <Counter/></Text>
                <Text style= {styles.text}>Fortimel Jucy Fraise                    <Counter/></Text>
                <Text style= {styles.text}>Fortimel Jucy Pomme                    <Counter/></Text>
                <Text style= {styles.text}>Fortimel Jucy Tropical                    <Counter/></Text>
        </View>
    );
};

const ListEauGelifiee = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Fresubin Citron                    <Counter/></Text>
                <Text style= {styles.text}>Fresubin Fruits Rouges                    <Counter/></Text>
                <Text style= {styles.text}>Fresubin Menthe                    <Counter/></Text>
        </View>
    );
};

const ListPoudreHyperProtidique = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Nutricia Protifar 500g lactose                    <Counter/></Text>
                <Text style= {styles.text}>Clinutren proteine 400g                    <Counter/></Text>
        </View>
    );
};

const ListBoissonLactee = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Clinutren HP/HC Café                    <Counter/></Text>
                <Text style= {styles.text}>Clinutren HP/HC Caramel                    <Counter/></Text>
                <Text style= {styles.text}>Clinutren HP/HC Chocolat                    <Counter/></Text>
                <Text style= {styles.text}>Clinutren HP/HC Fraise                    <Counter/></Text>
                <Text style= {styles.text}>Clinutren HP/HC Vanille                    <Counter/></Text>
                <Text style= {styles.text}>Fortimel Energy Fraise                    <Counter/></Text>
                <Text style= {styles.text}>Fortimel Energy Vanille                    <Counter/></Text>
                <Text style= {styles.text}>Fresubin 2kcal Fruits de la Forêt                    <Counter/></Text>
                <Text style= {styles.text}>Fresubin 2kcal Pêche/Abricot                    <Counter/></Text>
        </View>
    );
};

const ListCreme = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Clinutren Crème Caramel                    <Counter/></Text>
                <Text style= {styles.text}>Clinutren Crème Chocolat                    <Counter/></Text>
                <Text style= {styles.text}>Clinutren Crème Vanille                    <Counter/></Text>
                <Text style= {styles.text}>Fresubin Crème Cappuccino                    <Counter/></Text>
                <Text style= {styles.text}>Fresubin Crème Chocolat                    <Counter/></Text>
                <Text style= {styles.text}>Fresubin Crème Fraise des bois                    <Counter/></Text>
                <Text style= {styles.text}>Fresubin Crème Vanille                    <Counter/></Text>
        </View>
    );
};

const ListConcentreProteine = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Renutryl Concentré Café                    <Counter/></Text>
                <Text style= {styles.text}>Renutryl Concentré Caramel                    <Counter/></Text>
                <Text style= {styles.text}>Renutryl Concentré Fraise                    <Counter/></Text>
                <Text style= {styles.text}>Renutryl Concentré Vanille                    <Counter/></Text>
                <Text style= {styles.text}>Renutryl Concentré Fruit Orange                    <Counter/></Text>
                <Text style= {styles.text}>Renutryl Concentré Fruit Fruits Rouges                    <Counter/></Text>
                <Text style= {styles.text}>Renutryl Concentré Fruit Ananas                    <Counter/></Text>
                <Text style= {styles.text}>Renutryl Concentré Fruit Pomme                    <Counter/></Text>
        </View>
    );
};

const ListBoissonLacteeSpe = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Renutryl Booster Fraise                    <Counter/></Text>
                <Text style= {styles.text}>Renutryl Booster Vanille                    <Counter/></Text>
                <Text style= {styles.text}>Renutryl Booster Chocolat                    <Counter/></Text>
                <Text style= {styles.text}>Renutryl Booster Café                    <Counter/></Text>
                <Text style= {styles.text}>Cubitan Chocolat                    <Counter/></Text>
                <Text style= {styles.text}>Cubitan Fraise                    <Counter/></Text>
                <Text style= {styles.text}>Cubitan Vanille                    <Counter/></Text>
        </View>
    );
};

const ListRenasys = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Kit Renasys F MOUSSE M                    <Counter/></Text>
                <Text style= {styles.text}>Kit Renasys G GAZE                    <Counter/></Text>
                <Text style= {styles.text}>Reservoir Canister 300ml                    <Counter/></Text>
                <Text style= {styles.text}>Reservoir Canister 800ml                    <Counter/></Text>
                <Text style= {styles.text}>Gaze de remplissage 15x17                    <Counter/></Text>
                <Text style= {styles.text}>Mousse de remplissage 10x13                    <Counter/></Text>
                <Text style= {styles.text}>Patch gel 10x7                    <Counter/></Text>
        </View>
    );
};

const ListActiv = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Kit Mousse Simplace PETIT                    <Counter/></Text>
                <Text style= {styles.text}>Kit Mousse Simplace MOYEN                    <Counter/></Text>
                <Text style= {styles.text}>Reservoir VAC Canister 300ml                    <Counter/></Text>
                <Text style= {styles.text}>Reservoir VAC Gel Patch                    <Counter/></Text>
        </View>
    );
};
const ListVacUlta = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>Kit Mousse Veraflo Small                    <Counter/></Text>
            <Text style= {styles.text}>Cassette VeraLink                    <Counter/></Text>
            <Text style= {styles.text}>Reservoir INFOVAC 500ml                    <Counter/></Text>
            <Text style= {styles.text}>Reservoir INFOVAC 1000ml                    <Counter/></Text>
        </View>
    );
};

const ListVivano = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Kit mousse 18*12,5cm Moyen                    <Counter/></Text>
                <Text style= {styles.text}>Kit mousse 15*25cm Large                    <Counter/></Text>
                <Text style= {styles.text}>Reservoir VIVANO 300ml                    <Counter/></Text>
        </View>
    );
};

const ListKitTpn = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>AVELL 16x16                    <Counter/></Text>
                <Text style= {styles.text}>AVELL 16x21                    <Counter/></Text>
                <Text style= {styles.text}>AVELL 12x21                    <Counter/></Text>
                <Text style= {styles.text}>AVELL 12x31                    <Counter/></Text>
                <Text style= {styles.text}>AVELL 12x41                    <Counter/></Text>
                <Text style= {styles.text}>AVELL 21x26                    <Counter/></Text>
                <Text style= {styles.text}>AVELL 26x26                    <Counter/></Text>
                <Text style= {styles.text}>PICO 10x20                    <Counter/></Text>
                <Text style= {styles.text}>PICO 10x30                    <Counter/></Text>
                <Text style= {styles.text}>PICO 15x15                    <Counter/></Text>
                <Text style= {styles.text}>PICO 15x20                    <Counter/></Text>
                <Text style= {styles.text}>PICO 15x30                    <Counter/></Text>
                <Text style= {styles.text}>PICO 20x20                    <Counter/></Text>
                <Text style= {styles.text}>PICO 15x20 Multi                    <Counter/></Text>
        </View>
    );
};

const ListSnap = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Kit SNaP 10x10cm                    <Counter/></Text>
                <Text style= {styles.text}>Cartouche SNaP 125mmHg (60 ml)                    <Counter/></Text>
                <Text style= {styles.text}>Protecteur Cutané Adpat 8815                    <Counter/></Text>
        </View>
    );
};

const ListWoundel = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Electrodes Pansement                    <Counter/></Text>
                <Text style= {styles.text}>Electrode de Dispersion                    <Counter/></Text>
        </View>
    );
};

const ListBandElastique = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>Bandage Elastique TUBIFAST Bleu Ø 24-40cm                    <Counter/></Text>
            <Text style= {styles.text}>Bandage Elastique TUBIFAST Jaune Ø 35-64cm                    <Counter/></Text>
        </View>
    );
};

const ListBandContention = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>Bandage de contention Bande Biflex 10cm 16+légère                    <Counter/></Text>
            <Text style= {styles.text}>Bandage de contention Bande Biflex 10cm 17+FORTE                    <Counter/></Text>
        </View>
    );
};

const ListBandCompression = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>Bandage de compression URGO K2                    <Counter/></Text>
            <Text style= {styles.text}>Bandage de compression Peha Haft 10cmx20m                    <Counter/></Text>
            <Text style= {styles.text}>Bandage de compression Peha Haft 4cmx4m                    <Counter/></Text>
            <Text style= {styles.text}>Bandage de compression Varolast (oxyde de zinc) 10x7                    <Counter/></Text>
        </View>
    );
};

const ListHydrocellulaires = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>Allevyn Heel                    <Counter/></Text>
            <Text style= {styles.text}>Aquacel Foam Talon                    <Counter/></Text>
            <Text style= {styles.text}>Mepilex Talon                    <Counter/></Text>
            <Text style= {styles.text}>Allevyn Border Sacrum 16.8 x 17.1cm                    <Counter/></Text>
            <Text style= {styles.text}>Aquacel Foam Sacrum 20 x 16.9cm                    <Counter/></Text>
            <Text style= {styles.text}>Mepilex Border Sacrum 22 x 25cm                    <Counter/></Text>
            <Text style= {styles.text}>Aqua. Foam non adh 12 x 12.5cm                    <Counter/></Text>
            <Text style= {styles.text}>Aqua. Foam non adh 15x20cm                    <Counter/></Text>
            <Text style= {styles.text}>Aqua. Foam non adh 20x20cm                    <Counter/></Text>
            <Text style= {styles.text}>Mepilex 12.5 x 12.5cm                    <Counter/></Text>
            <Text style= {styles.text}>Aqua Foam Lite 10 x 10cm                    <Counter/></Text>
            <Text style= {styles.text}>Mepilex border flexEM 10 x 25cm                    <Counter/></Text>
            <Text style= {styles.text}>Allevyn Border 7.5x7.5cm                    <Counter/></Text>
            <Text style= {styles.text}>Allevyn Border 10x20cm                    <Counter/></Text>
            <Text style= {styles.text}>Allevyn Border 12.5x12.5cm                    <Counter/></Text>
            <Text style= {styles.text}>Allevyn Border 17.5x17.5cm                    <Counter/></Text>
            <Text style= {styles.text}>Aqua Foam adh 8x8cm                    <Counter/></Text>
            <Text style= {styles.text}>Aqua Foam adh 12.5x 12.5cm                    <Counter/></Text>
            <Text style= {styles.text}>Aqua Foam adh 10 x 20cm                    <Counter/></Text>
            <Text style= {styles.text}>Aqua Foam adh 17.5x17.5cm                    <Counter/></Text>
            <Text style= {styles.text}>Mepilex Border Flex 7.5x8.5cm                    <Counter/></Text>
            <Text style= {styles.text}>Mepilex Border Flex 12.5x12.5cm                    <Counter/></Text>
            <Text style= {styles.text}>Mepilex Border Flex 17.5x17.5cm                    <Counter/></Text>
        </View>
    );
};

const ListHydrocolloides = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>Duoderm Signal Talon                    <Counter/></Text>
            <Text style= {styles.text}>Duoderm SignalSacrum                    <Counter/></Text>
            <Text style= {styles.text}>Comfeel+ transparent 9x14cm                    <Counter/></Text>
            <Text style= {styles.text}>Comfeel+ transparent 10x10cm                    <Counter/></Text>
            <Text style= {styles.text}>Comfeel+ transparent 13x13cm                    <Counter/></Text>
            <Text style= {styles.text}>Comfeel+ transparent 18x18cm                    <Counter/></Text>
            <Text style= {styles.text}>Comfeel opaque 10x10cm                    <Counter/></Text>
            <Text style= {styles.text}>Comfeel opaque 13x13cm                    <Counter/></Text>
            <Text style= {styles.text}>Comfeel opaque 15x15cm                    <Counter/></Text>
            <Text style= {styles.text}>Comfeel opaque 18x18cm                    <Counter/></Text>
        </View>
    );
};

const ListInterfaces = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>UrgoTul 10x10cm                    <Counter/></Text>
            <Text style= {styles.text}>Adaptic 10x10cm (interface)                    <Counter/></Text>
            <Text style= {styles.text}>Urgostart Interface 15x20cm                    <Counter/></Text>
        </View>
    );
};

const ListHydrofibres = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>Aquacel mèche 2.5x40cm                    <Counter/></Text>
            <Text style= {styles.text}>Aquacel Extra 12.5x12.5cm                    <Counter/></Text>
            <Text style= {styles.text}>Aquacel Extra 13.5x15cm                    <Counter/></Text>
            <Text style= {styles.text}>Aquacel Argent mèche 2.5x40cm                    <Counter/></Text>
            <Text style= {styles.text}>Aquacel Argent 10x12cm                    <Counter/></Text>
            <Text style= {styles.text}>biatain alginate Ag 15x15cm                    <Counter/></Text>
            <Text style= {styles.text}>biatain fiber 12.5x12.5cm                    <Counter/></Text>
        </View>
    );
};

const ListAlginates = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>Biatain Alginate 10x10cm                    <Counter/></Text>
            <Text style= {styles.text}>Algosteril 10x10cm                    <Counter/></Text>
            <Text style= {styles.text}>Biatain Alginate 15x15cm                    <Counter/></Text>
            <Text style= {styles.text}>Algosteril 10x20cm                    <Counter/></Text>
            <Text style= {styles.text}>Biatain Alginate mèche 5x40cm                    <Counter/></Text>
            <Text style= {styles.text}>Algosteril mèche plate 5x40cm                    <Counter/></Text>
        </View>
    );
};

const ListActifs = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>laluset crème tube 100g                    <Counter/></Text>
            <Text style= {styles.text}>laluset flacon pressurisée 100g                    <Counter/></Text>
            <Text style= {styles.text}>Intrasite gel - (Hydrogel)                    <Counter/></Text>
            <Text style= {styles.text}>Purilon gel - (Hydrogel)                    <Counter/></Text>
            <Text style= {styles.text}>Mepore 6x7cm                    <Counter/></Text>
            <Text style= {styles.text}>Mepore 9x15cm                    <Counter/></Text>
            <Text style= {styles.text}>Mepore 9x20cm                    <Counter/></Text>
            <Text style= {styles.text}>Zetuvit (Pst Americain) 10 x 10cm                    <Counter/></Text>
            <Text style= {styles.text}>Zetuvit (Pst Americain) 15x 20cm                    <Counter/></Text>
            <Text style= {styles.text}>Zetuvit (Pst Americain) 20x25cm                    <Counter/></Text>
            <Text style= {styles.text}>Jelonet 10x10cm (pst gras)                    <Counter/></Text>
            <Text style= {styles.text}>Jelonet 10x40cm (pst gras)                    <Counter/></Text>
            <Text style= {styles.text}>HydroClean Cavity 7.5 x 7.5cm                    <Counter/></Text>
            <Text style= {styles.text}>HydroClean Cavity Ø4cm                     <Counter/></Text>
            <Text style= {styles.text}>HydroClean Cavity 10x10cm                    <Counter/></Text>
            <Text style= {styles.text}>UrgoStart B plus 6x6cm                    <Counter/></Text>
            <Text style= {styles.text}>UrgoStart B plus border 13x13cm                    <Counter/></Text>
            <Text style= {styles.text}>UrgoStart B plus border 15x20cm                    <Counter/></Text>
            <Text style= {styles.text}>Sorbact Gel Dressing 7.5x7.5 cm                    <Counter/></Text>
            <Text style= {styles.text}>Sorbact Gel Dressing 7.5x15cm                    <Counter/></Text>
            <Text style= {styles.text}>Actisorb (pansement charbon)                    <Counter/></Text>
        </View>
    );
};

const ListSuperAbsorbant = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>Convamax superabs 10x10cm                    <Counter/></Text>
            <Text style= {styles.text}>Convamax superabs 10x20cm                    <Counter/></Text>
            <Text style= {styles.text}>Convamax superabs 12.5x12.5cm                    <Counter/></Text>
            <Text style= {styles.text}>Convamax superabs 20x30cm                    <Counter/></Text>
            <Text style= {styles.text}>Sorbact superabs 10x10cm                    <Counter/></Text>
            <Text style= {styles.text}>Cutimed Sorbion 10x10cm                    <Counter/></Text>
            <Text style= {styles.text}>Cutimed Sorbion 30x20cm                    <Counter/></Text>
            <Text style= {styles.text}>Cutimed Sorbionsing XL 45x20cm                    <Counter/></Text>
            <Text style= {styles.text}>Resposorb 12.5x12.5cm                    <Counter/></Text>
            <Text style= {styles.text}>Resposorb border 17.5x17.5                    <Counter/></Text>
        </View>
    );
};

const ListFixation = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>Bande Omnifix 5cm                    <Counter/></Text>
            <Text style= {styles.text}>Bande Omnifix 10cm                    <Counter/></Text>
            <Text style= {styles.text}>Opsite 14x10cm                    <Counter/></Text>
            <Text style= {styles.text}>Opsite 14x25cm                    <Counter/></Text>
            <Text style= {styles.text}>Leukostrip - Stéristrip                    <Counter/></Text>
            <Text style= {styles.text}>Compresse trachéo "Métalline"                    <Counter/></Text>
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