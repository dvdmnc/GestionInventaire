import * as React from 'react';
import {View, Text, SafeAreaView, ScrollView, StyleSheet, Image} from 'react-native';
import Counter from '../Counter';

const ListProduits = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Dosette                    <Counter element={"Dosette"}/></Text>
                <Text style= {styles.text}>Spray Irriclens                    <Counter element={"Spray Irriclens"}/></Text>
                <Text style= {styles.text}>Poche 50ml                    <Counter element={"Poche 50ml"}/></Text>
                <Text style= {styles.text}>Poche 100ml                    <Counter element={"Poche 100ml"}/></Text>
                <Text style= {styles.text}>VESIRIG Instil Vesicale 250ml                    <Counter element={"VESIRIG Instil Vesicale 250ml"}/></Text>
        </View>
    );
};

const ListMateriel = () => {
    return(
            <View style= {styles.container}>
                    <Text style= {styles.text}>Perfuseur                    <Counter element={"Perfuseur"}/></Text>
                    <Text style= {styles.text}>DOSIFLOW                    <Counter element={"DOSIFLOW"}/></Text>
                    <Text style= {styles.text}>Prolongateur                    <Counter element={"Prolongateur"}/></Text>
                    <Text style= {styles.text}>Rampe de 4 robinets 3 voies                    <Counter element={"Rampe de 4 robinets 3 voies"}/></Text>
                    <Text style= {styles.text}>Robinet 3 voies                    <Counter element={"Robinet 3 voies"}/></Text>
                    <Text style= {styles.text}>Robinet 3 voies + prolongateur<Counter element={"Robinet 3 voies + prolongateur"}/></Text>
                    <Text style= {styles.text}>Caresite valve positive                    <Counter element={"Caresite valve positive"}/></Text>
                    <Text style= {styles.text}>Bouchon Stopper                    <Counter element={"Bouchon Stopper"}/></Text>
                    <Text style= {styles.text}>Tubulure Sapphire                    <Counter element={"Tubulure Sapphire"}/></Text>
                    <Text style= {styles.text}>Prolongateur 2 voies                    <Counter element={"Prolongateur 2 voies"}/></Text>
                    <Text style= {styles.text}>Poche vide Sapphire 100ml                    <Counter element={"Poche vide Sapphire 100ml"}/></Text>
                    <Text style= {styles.text}>Poche vide Sapphire 250ml                    <Counter element={"Poche vide Sapphire 250ml"}/></Text>
                    <Text style= {styles.text}>Catheter ailette sécurisé 22G bleu                    <Counter element={"Catheter ailette sécurisé 22G bleu"}/></Text>
                    <Text style= {styles.text}>Catheter sécurisé 20G rose                    <Counter element={"Catheter sécurisé 20G rose"}/></Text>
                    <Text style= {styles.text}>Catheter sécurisé 22G bleu                    <Counter element={"Catheter sécurisé 22G bleu"}/></Text>
                    <Text style= {styles.text}>Catheter sécurisé 24G jaune                    <Counter element={"Catheter sécurisé 24G bleu"}/></Text>
                    <Text style= {styles.text}>Aiguille Trocart 18G rose                    <Counter element={"Aiguille Trocart 18G rose"}/></Text>
                    <Text style= {styles.text}>Aiguille IM 22G noire                    <Counter element={"Aiguille IM 22G noire"}/></Text>
                    <Text style= {styles.text}>Aiguille SC 25G orange                    <Counter element={"Aiguille SC 25G orange"}/></Text>
                    <Text style= {styles.text}>Seringue à Insuline 1ml                    <Counter element={"Seringue à Insuline 1ml"}/></Text>
                    <Text style= {styles.text}>Seringue 2ml                    <Counter element={"Seringue 2ml"}/></Text>
                    <Text style= {styles.text}>Seringue 5ml                    <Counter element={"Seringue 5ml"}/></Text>
                    <Text style= {styles.text}>Seringue 10ml                    <Counter element={"Seringue 10ml"}/></Text>
                    <Text style= {styles.text}>Seringue 20ml                    <Counter element={"Seringue 20ml"}/></Text>
                    <Text style= {styles.text}>Seringue 20ml luer lock                    <Counter element={"Seringue 20ml luer lock"}/></Text>
                    <Text style= {styles.text}>Seringue 50ml luer lock                    <Counter element ={"Seringue 50ml luer lock"}/></Text>
                    <Text style= {styles.text}>Set de transfert                    <Counter element={"Set de transfert"}/></Text>
                    <Text style= {styles.text}>Pst adhésif Tegaderm I.V. 7x8.5cm                    <Counter element={"Pst adhésif Tegaderm I.V. 7x8.5cm"}/></Text>
        </View>
    );
};

const ListAccessoires = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Aiguille de Huber 19G - 15 mm                    <Counter element={"Aiguille de Huber 19G - 15 mm "}/></Text>
                <Text style= {styles.text}>Aiguille de Huber 19G - 20 mm                    <Counter element={"Aiguille de Huber 19G - 20 mm"}/></Text>
                <Text style= {styles.text}>Aiguille de Huber 19G - 25 mm                    <Counter element={"Aiguille de Huber 19G - 25 mm"}/></Text>
                <Text style= {styles.text}>Aiguille de Huber 22G - 15 mm                    <Counter element={"Aiguille de Huber 22G - 15 mm"}/></Text>
                <Text style= {styles.text}>Aiguille de Huber 22G - 20 mm                    <Counter element={"Aiguille de Huber 22G - 20 mm"}/></Text>
                <Text style= {styles.text}>Pst piccline Grip-Lok Universel                    <Counter element={"Pst piccline Grip-Lok Universel"}/></Text>
                <Text style= {styles.text}>Set pose perfusion Piccline + Seringue pre-remplie de Nacl 0.9% 10ml                    <Counter element={"Set pose perfusion Piccline + Seringue pre-remplie de Nacl 0.9% 10ml"}/></Text>
        </View>
    );
};

const ListNonSterile = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Pot a Diurèse                    <Counter element={"Pot a Diurèse"}/></Text>
                <Text style= {styles.text}>Pistolet                    <Counter element={"Pistolet"}/></Text>
                <Text style= {styles.text}>Bassin                    <Counter element={"Bassin"}/></Text>
                <Text style= {styles.text}>Etui pénien Coloplast Conveen Optima Ø21                    <Counter element={"Etui pénien Coloplast Conveen Optima Ø21"}/></Text>
                <Text style= {styles.text}>Etui pénien Coloplast Conveen Optima Ø25                    <Counter element={"Etui pénien Coloplast Conveen Optima Ø25"}/></Text>
                <Text style= {styles.text}>Etui pénien Coloplast Conveen Optima Ø30                    <Counter element={"Etui pénien Coloplast Conveen Optima Ø30"}/></Text>
                <Text style= {styles.text}>Etui pénien Coloplast Conveen Optima Ø35                    <Counter element={"Etui pénien Coloplast Conveen Optima Ø35"}/></Text>
                <Text style= {styles.text}>Etui pénien Coloplast Conveen Optima Ø40                    <Counter element={"Etui pénien Coloplast Conveen Optima Ø40"}/></Text>
                <Text style= {styles.text}>Etui pénien Braun Urimed Vision Ø25                    <Counter element={"Etui pénien Braun Urimed Vision Ø25"}/></Text>
                <Text style= {styles.text}>Etui pénien Braun Urimed Vision Ø29                    <Counter element={"Etui pénien Braun Urimed Vision Ø29"}/></Text>
                <Text style= {styles.text}>Etui pénien Braun Urimed Vision Ø32                    <Counter element={"Etui pénien Braun Urimed Vision Ø32"}/></Text>
                <Text style= {styles.text}>Poche à urine non stérile 1.5L                    <Counter element={"Poche à urine non stérile 1.5L"}/></Text>
                <Text style= {styles.text}>Poche à urine non stérile 2.0L                    <Counter element={"Poche à urine non stérile 2.0L"}/></Text>
                <Text style= {styles.text}>Support de poche à urine                    <Counter element={"Support de poche à urie"}/></Text>
                <Text style= {styles.text}>Filet de poche (B2)                    <Counter element={"Filet de poche B2"}/></Text>
                <Text style= {styles.text}>Sonde auto-sondage Femme                    <Counter element={"Sonde auto-sondage Femme"}/></Text>
                <Text style= {styles.text}>Sonde auto-sondage Homme                    <Counter element={"Sonde auto-sondage Homme"}/></Text>
        </View>
    );
};

const ListSterile = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Set de sondage urinaire                    <Counter element={"Set de sondage urinaire"}/></Text>
                <Text style= {styles.text}>Sonde vésicale verte CH14                    <Counter element={"Sonde vésicale verte CH14"}/></Text>
                <Text style= {styles.text}>Sonde vésicale orange CH16                    <Counter element={"Sonde vésicale orange CH16"}/></Text>
                <Text style= {styles.text}>Sonde vésicale rouge CH18                    <Counter element={"Sonde vésicale rouge CH18"}/></Text>
                <Text style= {styles.text}>Sonde vésicale jaune CH20                    <Counter element={"Sonde vésicale jaune CH20"}/></Text>
                <Text style= {styles.text}>Sonde vésicale violette CH22                    <Counter element={"Sonde vésicale violette CH22"}/></Text>
                <Text style= {styles.text}>Poche à urine stérile 2.0L                    <Counter element={"Poche à urine stérile 2.0L"}/></Text>
        </View>
    );
};

const ListsousFecale = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Sonde Rectale                    <Counter element={"Sonde rectale"}/></Text>
                <Text style= {styles.text}>Tampon obturateur anal Ø37mm                    <Counter element={"Tampon obturateur anal Ø37mm"}/></Text>
        </View>
    );
};

const ListDrainage = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>kit pleurX 1L                    <Counter element={"kit pleurX 1L"}/></Text>
                <Text style= {styles.text}>kit periTX 2L                    <Counter element={"kit periTX 2L"}/></Text>
        </View>
    );
};

const ListStomie = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Support de Stomie                    <Counter element={"Support de Stomie"}/></Text>
                <Text style= {styles.text}>Poche de Stomie                    <Counter element={"Poche de Stomie"}/></Text>
                <Text style= {styles.text}>Ceinture de poche                    <Counter element={"Ceinture de poche"}/></Text>
                <Text style= {styles.text}>Poudre Adapt 7906 Hollister                    <Counter element={"Poudre Adapt 7906 Hollister"}/></Text>
                <Text style= {styles.text}>Pate Adapt 79301 Hollister                    <Counter element={"Pate Adapt 79301 Hollister"}/></Text>
                <Text style= {styles.text}>Poudre Orahesive Convatec                    <Counter element={"Poudre Orahesive Convatec"}/></Text>
                <Text style= {styles.text}>Pate Stomahesive Convatec                    <Counter element={"Pate Stomahesive Convatec"}/></Text>
        </View>
    );
};

const ListJusdeFruits = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Clinutren Fruit Ananas/Orange                    <Counter element={"Clinutren Fruit Ananas/Orange"}/></Text>
                <Text style= {styles.text}>Clinuten Fruit Framboise/Cassis                    <Counter element={"Clinutren Fruit Framboise/Cassis"}/></Text>
                <Text style= {styles.text}>Clinuten Fruit Poire/Cerise                    <Counter element={"Clinutren Fruit Poire/Cerise"}/></Text>
                <Text style= {styles.text}>Clinuten Fruit Pomme/Raisin                    <Counter element={"Clinutren Fruit Pomme/Raisin"}/></Text>
                <Text style= {styles.text}>Fortimel Jucy Fraise                    <Counter element={"Fortimel Jucy Fraise"}/></Text>
                <Text style= {styles.text}>Fortimel Jucy Pomme                    <Counter element={"Fortimel Jucy Pomme"}/></Text>
                <Text style= {styles.text}>Fortimel Jucy Tropical                    <Counter element={"Fortimel Jucy Tropical"}/></Text>
        </View>
    );
};

const ListEauGelifiee = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Fresubin Citron                    <Counter element={"Fresubin Citron"}/></Text>
                <Text style= {styles.text}>Fresubin Fruits Rouges                    <Counter element={"Fresubin Fruits Rouges"}/></Text>
                <Text style= {styles.text}>Fresubin Menthe                    <Counter element={"Fresubin Menthe"}/></Text>
        </View>
    );
};

const ListPoudreHyperProtidique = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Nutricia Protifar 500g lactose                    <Counter element={"Nutricia Protifar 500g lactose"}/></Text>
                <Text style= {styles.text}>Clinutren proteine 400g                    <Counter element={"Clinutren proteine 400g"}/></Text>
        </View>
    );
};

const ListBoissonLactee = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Clinutren HP/HC Café                    <Counter element={"Clinutren HP/HC Café"}/></Text>
                <Text style= {styles.text}>Clinutren HP/HC Caramel                    <Counter element={"Clinutren HP/HC Caramel"}/></Text>
                <Text style= {styles.text}>Clinutren HP/HC Chocolat                    <Counter element={"Clinutren HP/HC Chocolat"}/></Text>
                <Text style= {styles.text}>Clinutren HP/HC Fraise                    <Counter element={"Clinutren HP/HC Fraise"}/></Text>
                <Text style= {styles.text}>Clinutren HP/HC Vanille                    <Counter element={"Clinutren HP/HC Vanille"}/></Text>
                <Text style= {styles.text}>Fortimel Energy Fraise                    <Counter element={"Fortimel Energy Fraise"}/></Text>
                <Text style= {styles.text}>Fortimel Energy Vanille                    <Counter element={"Fortimel Energy Vanille"}/></Text>
                <Text style= {styles.text}>Fresubin 2kcal Fruits de la Forêt                    <Counter element={"Fresubin 2kcal Fruits de la Forêt"}/></Text>
                <Text style= {styles.text}>Fresubin 2kcal Pêche/Abricot                    <Counter element={"Fresubin 2kcal Pêche/Abricot"}/></Text>
        </View>
    );
};

const ListCreme = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Clinutren Crème Caramel                    <Counter element={"Clinutren Crème Caramel"}/></Text>
                <Text style= {styles.text}>Clinutren Crème Chocolat                    <Counter element={"Clinutren Crème Chocolat"}/></Text>
                <Text style= {styles.text}>Clinutren Crème Vanille                    <Counter element={"Clinutren Crème Vanille"} /></Text>
                <Text style= {styles.text}>Fresubin Crème Cappuccino                    <Counter element={"Fresubin Crème Cappuccino"}/></Text>
                <Text style= {styles.text}>Fresubin Crème Chocolat                    <Counter element={"Fresubin Crème Chocolat"}/></Text>
                <Text style= {styles.text}>Fresubin Crème Fraise des bois                    <Counter element={"Fresubin Crème Fraise des bois"}/></Text>
                <Text style= {styles.text}>Fresubin Crème Vanille                    <Counter element={"Fresubin Crème Vanille"}/></Text>
        </View>
    );
};

const ListConcentreProteine = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Renutryl Concentré Café                    <Counter element={"Renutryl Concentré Café"}/></Text>
                <Text style= {styles.text}>Renutryl Concentré Caramel                    <Counter element={"Renutryl Concentré Caramel"}/></Text>
                <Text style= {styles.text}>Renutryl Concentré Fraise                    <Counter element={"Renutryl Concentré Café"} /></Text>
                <Text style= {styles.text}>Renutryl Concentré Vanille                    <Counter element={"Renutryl Concentré Vanille"}/></Text>
                <Text style= {styles.text}>Renutryl Concentré Fruit Orange                    <Counter element={"Renutryl Concentré Fruit Orange"}/></Text>
                <Text style= {styles.text}>Renutryl Concentré Fruit Fruits Rouges                    <Counter element={"Renutryl Concentré Fruit Fruits Rouges"} /></Text>
                <Text style= {styles.text}>Renutryl Concentré Fruit Ananas                    <Counter element={"Renutryl Concentré Fruit Ananas"}/></Text>
                <Text style= {styles.text}>Renutryl Concentré Fruit Pomme                    <Counter element={"Renutryl Concentré Fruit Pomme"}/></Text>
        </View>
    );
};

const ListBoissonLacteeSpe = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Renutryl Booster Fraise                    <Counter element={"Renutryl Booster Fraise"}/></Text>
                <Text style= {styles.text}>Renutryl Booster Vanille                    <Counter element={"Renutryl Booster Vanille"} /></Text>
                <Text style= {styles.text}>Renutryl Booster Chocolat                    <Counter element={"Renutryl Booster Chocolat"}/></Text>
                <Text style= {styles.text}>Renutryl Booster Café                    <Counter element={"Renutryl Booster Café"}/></Text>
                <Text style= {styles.text}>Cubitan Chocolat                    <Counter element={"Cubitan Chocolat"}/></Text>
                <Text style= {styles.text}>Cubitan Fraise                    <Counter element={"Cubitan Fraise"}/></Text>
                <Text style= {styles.text}>Cubitan Vanille                    <Counter element={"Cubitan Vanille"} /></Text>
        </View>
    );
};

const ListRenasys = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Kit Renasys F MOUSSE M                    <Counter element={"Kit Renasys F MOUSSE M"}/></Text>
                <Text style= {styles.text}>Kit Renasys G GAZE                    <Counter element={"Kit Renasys G GAZE"} /></Text>
                <Text style= {styles.text}>Reservoir Canister 300ml                    <Counter element={"Reservoir Canister 300ml"}/></Text>
                <Text style= {styles.text}>Reservoir Canister 800ml                    <Counter element={"Reservoir Canister 800ml"}/></Text>
                <Text style= {styles.text}>Gaze de remplissage 15x17                    <Counter element={"Gaze de remplissage 15x17"}/></Text>
                <Text style= {styles.text}>Mousse de remplissage 10x13                    <Counter element={"Mousse de remplissage 10x13"}/></Text>
                <Text style= {styles.text}>Patch gel 10x7                    <Counter element={"Patch Gel 10x7"}/></Text>
        </View>
    );
};

const ListActiv = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Kit Mousse Simplace PETIT                    <Counter element={"Kit Mousse Simplace PETIT"}/></Text>
                <Text style= {styles.text}>Kit Mousse Simplace MOYEN                    <Counter element={"Kit Mousse Simplace MOYEN"}/></Text>
                <Text style= {styles.text}>Reservoir VAC Canister 300ml                    <Counter element={"Reservoir VAC Canister 300ml"}/></Text>
                <Text style= {styles.text}>Reservoir VAC Gel Patch                    <Counter element={"Reservoir VAC Gel Patch"}/></Text>
        </View>
    );
};
const ListVacUlta = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>Kit Mousse Veraflo Small                    <Counter element={"Kit Mousse Veraflo Small"} /></Text>
            <Text style= {styles.text}>Cassette VeraLink                    <Counter element={"Cassette VeraLink"}/></Text>
            <Text style= {styles.text}>Reservoir INFOVAC 500ml                    <Counter element={"Reservoir INFOVAC 500ml"}/></Text>
            <Text style= {styles.text}>Reservoir INFOVAC 1000ml                    <Counter element={"Reservoir INFOVAC 1000ml"}/></Text>
        </View>
    );
};

const ListVivano = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Kit mousse 18*12,5cm Moyen                    <Counter element={"Kit Mousse 18*12,5 cm Moyen"}/></Text>
                <Text style= {styles.text}>Kit mousse 15*25cm Large                    <Counter element={"Kit mousse 15*25cm Large"}/></Text>
                <Text style= {styles.text}>Reservoir VIVANO 300ml                    <Counter element={"Reservoir VIVANO 300ml"}/></Text>
        </View>
    );
};

const ListKitTpn = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>AVELL 16x16                    <Counter element={"AVELL 16x16"}/></Text>
                <Text style= {styles.text}>AVELL 16x21                    <Counter element={"AVELL 16x21"} /></Text>
                <Text style= {styles.text}>AVELL 12x21                    <Counter element={"AVELL 12x21"}/></Text>
                <Text style= {styles.text}>AVELL 12x31                    <Counter element={"AVELL 12x31"}/></Text>
                <Text style= {styles.text}>AVELL 12x41                    <Counter element={"AVELL 12x41"}/></Text>
                <Text style= {styles.text}>AVELL 21x26                    <Counter element={"AVELL 21x26"}/></Text>
                <Text style= {styles.text}>AVELL 26x26                    <Counter element={"AVELL 26x26"}/></Text>
                <Text style= {styles.text}>PICO 10x20                    <Counter element={"PICO 10x20"}/></Text>
                <Text style= {styles.text}>PICO 10x30                    <Counter element={"PICO 10x30"}/></Text>
                <Text style= {styles.text}>PICO 15x15                    <Counter element={"PICO 15x15"}/></Text>
                <Text style= {styles.text}>PICO 15x20                    <Counter element={"PICO 15x20"}/></Text>
                <Text style= {styles.text}>PICO 15x30                    <Counter element={"PICO 15x30"}/></Text>
                <Text style= {styles.text}>PICO 20x20                    <Counter element={"PICO 20x20"}/></Text>
                <Text style= {styles.text}>PICO 15x20 Multi                    <Counter element={"PICO 15x20 Multi"} /></Text>
        </View>
    );
};

const ListSnap = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Kit SNaP 10x10cm                    <Counter element={"Kit SNaP 10x10cm"} /></Text>
                <Text style= {styles.text}>Cartouche SNaP 125mmHg (60 ml)                    <Counter element={"Cartouche SNaP 125mmHg (60ml)"}/></Text>
                <Text style= {styles.text}>Protecteur Cutané Adpat 8815                    <Counter element={"Protecteur Cutané Adapt 8815"}/></Text>
        </View>
    );
};

const ListWoundel = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Electrodes Pansement                    <Counter element={"Electrodes Pansement"}/></Text>
                <Text style= {styles.text}>Electrode de Dispersion                    <Counter element={"Electrode de Dispersion"}/></Text>
        </View>
    );
};

const ListBandElastique = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>Bandage Elastique TUBIFAST Bleu Ø 24-40cm                    <Counter element={"Bandage Elastique TUBIFAST Bleu Ø 24-40cm"}/></Text>
            <Text style= {styles.text}>Bandage Elastique TUBIFAST Jaune Ø 35-64cm                    <Counter element={"Bandage Elastique TUBIFAST Jaune Ø 35-64cm"}/></Text>
        </View>
    );
};

const ListBandContention = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>Bandage de contention Bande Biflex 10cm 16+légère                    <Counter element={"Bandage de contention Bande Biflex 10cm 16+légère"}/></Text>
            <Text style= {styles.text}>Bandage de contention Bande Biflex 10cm 17+FORTE                    <Counter element={"Bandage de contention Bande Biflex 10cm 17+FORTE"}/></Text>
        </View>
    );
};

const ListBandCompression = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>Bandage de compression URGO K2                    <Counter element={"Bandage de compression URGO K2"}/></Text>
            <Text style= {styles.text}>Bandage de compression Peha Haft 10cmx20m                    <Counter element={"Bandage de compression Peha Haft 10cmx20m"}/></Text>
            <Text style= {styles.text}>Bandage de compression Peha Haft 4cmx4m                    <Counter element={"Bandage de compression Peha Haft 4cmx4m"}/></Text>
            <Text style= {styles.text}>Bandage de compression Varolast (oxyde de zinc) 10x7                    <Counter element={"Bandage de compression Varolast (oxyde de zinc) 10x7"}/></Text>
        </View>
    );
};

const ListHydrocellulaires = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>Allevyn Heel                    <Counter element={"Allevyn Heel"}/></Text>
            <Text style= {styles.text}>Aquacel Foam Talon                    <Counter element={"Aquacel Foam Talon"}/></Text>
            <Text style= {styles.text}>Mepilex Talon                    <Counter element={"Mepilex Talon"}/></Text>
            <Text style= {styles.text}>Allevyn Border Sacrum 16.8 x 17.1cm                    <Counter element={"Allevyn Border Sacrum 16.8 x 17.1cm"}/></Text>
            <Text style= {styles.text}>Aquacel Foam Sacrum 20 x 16.9cm                    <Counter element={"Aquacel Foam Sacrum 20 x 16.9cm "}/></Text>
            <Text style= {styles.text}>Mepilex Border Sacrum 22 x 25cm                    <Counter element={"Mepilex Border Sacrum 22 x 25cm"}/></Text>
            <Text style= {styles.text}>Aqua. Foam non adh 12 x 12.5cm                    <Counter element={"Aqua. Foam non adh 12 x 12.5cm"}/></Text>
            <Text style= {styles.text}>Aqua. Foam non adh 15x20cm                    <Counter element={"Aqua. Foam non adh 15x20cm"}/></Text>
            <Text style= {styles.text}>Aqua. Foam non adh 20x20cm                    <Counter element={"Aqua. Foam non adh 20x20cm"}/></Text>
            <Text style= {styles.text}>Mepilex 12.5 x 12.5cm                    <Counter element={"Mepilex 12.5 x 12.5cm"}/></Text>
            <Text style= {styles.text}>Aqua Foam Lite 10 x 10cm                    <Counter element={"Aqua Foam Lite 10 x 10cm"}/></Text>
            <Text style= {styles.text}>Mepilex border flexEM 10 x 25cm                    <Counter element={"Mepilex border flexEM 10 x 25cm"}/></Text>
            <Text style= {styles.text}>Allevyn Border 7.5x7.5cm                    <Counter element={"Allevyn Border 7.5x7.5cm"}/></Text>
            <Text style= {styles.text}>Allevyn Border 10x20cm                    <Counter element={"Allevyn Border 10x20cm"}/></Text>
            <Text style= {styles.text}>Allevyn Border 12.5x12.5cm                    <Counter element={"Allevyn Border 12.5x12.5cm"}/></Text>
            <Text style= {styles.text}>Allevyn Border 17.5x17.5cm                    <Counter element={"Allevyn Border 17.5x17.5cm"}/></Text>
            <Text style= {styles.text}>Aqua Foam adh 8x8cm                    <Counter element={"Aqua Foam adh 8x8cm"}/></Text>
            <Text style= {styles.text}>Aqua Foam adh 12.5x 12.5cm                    <Counter element={"Aqua Foam adh 12.5x12.5cm"}/></Text>
            <Text style= {styles.text}>Aqua Foam adh 10 x 20cm                    <Counter element={"Aqua Foam adh 10x20cm"}/></Text>
            <Text style= {styles.text}>Aqua Foam adh 17.5x17.5cm                    <Counter element={"Aqua Foam adh 17.5x17.5cm"}/></Text>
            <Text style= {styles.text}>Mepilex Border Flex 7.5x8.5cm                    <Counter element={"Mepilex Border Flex 7.5x8.5cm"}/></Text>
            <Text style= {styles.text}>Mepilex Border Flex 12.5x12.5cm                    <Counter element={"Mepilex Border Flex 12.5x12.5cm"}/></Text>
            <Text style= {styles.text}>Mepilex Border Flex 17.5x17.5cm                    <Counter element={"Mepilex Border Flex 17.5x17.5cm"}/></Text>
        </View>
    );
};

const ListHydrocolloides = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>Duoderm Signal Talon                    <Counter element={"Duoderm Signal Talon"}/></Text>
            <Text style= {styles.text}>Duoderm Signal Sacrum                    <Counter element={"Duoderm Signal Sacrum"}/></Text>
            <Text style= {styles.text}>Comfeel+ transparent 9x14cm                    <Counter element={"Comfeel+ transparent 9x14cm"}/></Text>
            <Text style= {styles.text}>Comfeel+ transparent 10x10cm                    <Counter element={"Comfeel+ transparent 10x10cm"}/></Text>
            <Text style= {styles.text}>Comfeel+ transparent 13x13cm                    <Counter element={"Comfeel+ transparent 13x13cm"}/></Text>
            <Text style= {styles.text}>Comfeel+ transparent 18x18cm                    <Counter element={"Comfeel+ transparent 18x18cm"}/></Text>
            <Text style= {styles.text}>Comfeel opaque 10x10cm                    <Counter element={"Comfeel opaque 10x10cm"}/></Text>
            <Text style= {styles.text}>Comfeel opaque 13x13cm                    <Counter element={"Comfeel opaque 13x13cm"}/></Text>
            <Text style= {styles.text}>Comfeel opaque 15x15cm                    <Counter  element={"Comfeel opaque 15x15cm"}/></Text>
            <Text style= {styles.text}>Comfeel opaque 18x18cm                    <Counter  element={"Comfeel opaque 18x18cm"}/></Text>
        </View>
    );
};

const ListInterfaces = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>UrgoTul 10x10cm                    <Counter element={"UrgoTul 10x10cm"}/></Text>
            <Text style= {styles.text}>Adaptic 10x10cm (interface)                    <Counter element={"Adaptic 10x10cm (interface)"}/></Text>
            <Text style= {styles.text}>Urgostart Interface 15x20cm                    <Counter element={"Urgostart Interface 15x20cm"}/></Text>
        </View>
    );
};

const ListHydrofibres = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>Aquacel mèche 2.5x40cm                    <Counter element={"Aquacel mèche 2.5x40cm "}/></Text>
            <Text style= {styles.text}>Aquacel Extra 12.5x12.5cm                    <Counter element={"Aquacel Extra 12.5x12.5cm"}/></Text>
            <Text style= {styles.text}>Aquacel Extra 13.5x15cm                    <Counter element={"Aquacel Extra 13.5x15cm"}/></Text>
            <Text style= {styles.text}>Aquacel Argent mèche 2.5x40cm                    <Counter element={"Aquacel Argent mèche 2.5x40cm"}/></Text>
            <Text style= {styles.text}>Aquacel Argent 10x12cm                    <Counter element={"Aquacel Argent 10x12cm"}/></Text>
            <Text style= {styles.text}>biatain alginate Ag 15x15cm                    <Counter element={"biatain alginate Ag 15x15cm"}/></Text>
            <Text style= {styles.text}>biatain fiber 12.5x12.5cm                    <Counter element={"biatain fiber 12.5x12.5cm"}/></Text>
        </View>
    );
};

const ListAlginates = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>Biatain Alginate 10x10cm                    <Counter element={"Biatain Alginate 10x10cm"}/></Text>
            <Text style= {styles.text}>Algosteril 10x10cm                    <Counter element={"Algosteril 10x10cm"}/></Text>
            <Text style= {styles.text}>Biatain Alginate 15x15cm                    <Counter element={"Biatain Alginate 15x15cm"}/></Text>
            <Text style= {styles.text}>Algosteril 10x20cm                    <Counter element={"Algosteril 10x20cm"}/></Text>
            <Text style= {styles.text}>Biatain Alginate mèche 5x40cm                    <Counter element={"Biatain Alginate mèche 5x40cm"}/></Text>
            <Text style= {styles.text}>Algosteril mèche plate 5x40cm                    <Counter element={"Algosteril mèche plate 5x40cm"}/></Text>
        </View>
    );
};

const ListActifs = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>laluset crème tube 100g                    <Counter element={"laluset crème tube 100g"} /></Text>
            <Text style= {styles.text}>laluset flacon pressurisée 100g                    <Counter element={"laluset flacon pressurisée 100g"}/></Text>
            <Text style= {styles.text}>Intrasite gel - (Hydrogel)                    <Counter element={"Intrasite gel - (Hydrogel)"}/></Text>
            <Text style= {styles.text}>Purilon gel - (Hydrogel)                    <Counter element={"Purilon gel - (Hydrogel)"}/></Text>
            <Text style= {styles.text}>Mepore 6x7cm                    <Counter element={"Mepore 6x7cm"}/></Text>
            <Text style= {styles.text}>Mepore 9x15cm                    <Counter element={"Mepore 9x15cm"}/></Text>
            <Text style= {styles.text}>Mepore 9x20cm                    <Counter element={"Mepore 9x20cm"}/></Text>
            <Text style= {styles.text}>Zetuvit (Pst Americain) 10 x 10cm                    <Counter element={"Zetuvit (Pst Americain) 10 x 10cm"}/></Text>
            <Text style= {styles.text}>Zetuvit (Pst Americain) 15x 20cm                    <Counter element={"Zetuvit (Pst Americain) 15 x 10cm"}/></Text>
            <Text style= {styles.text}>Zetuvit (Pst Americain) 20x25cm                    <Counter element={"Zetuvit (Pst Americain) 20 x 25cm"}/></Text>
            <Text style= {styles.text}>Jelonet 10x10cm (pst gras)                    <Counter element={"Jelonet 10x10cm (pst gras)"}/></Text>
            <Text style= {styles.text}>Jelonet 10x40cm (pst gras)                    <Counter element={"Jelonet 10x40cm (pst gras)"}/></Text>
            <Text style= {styles.text}>HydroClean Cavity 7.5 x 7.5cm                    <Counter element={"HydroClean Cavity 7.5 x 7.5cm"}/></Text>
            <Text style= {styles.text}>HydroClean Cavity Ø4cm                     <Counter element={"HydroClean Cavity Ø4cm"}/></Text>
            <Text style= {styles.text}>HydroClean Cavity 10x10cm                    <Counter element={"HydroClean Cavity 10x10cm"} /></Text>
            <Text style= {styles.text}>UrgoStart B plus 6x6cm                    <Counter element={"UrgoStart B plus 6x6cm"}/></Text>
            <Text style= {styles.text}>UrgoStart B plus border 13x13cm                    <Counter element={"UrgoStart B plus border 13x13cm"}/></Text>
            <Text style= {styles.text}>UrgoStart B plus border 15x20cm                    <Counter element={"UrgoStart B plus border 15x20cm"}/></Text>
            <Text style= {styles.text}>Sorbact Gel Dressing 7.5x7.5 cm                    <Counter element={"Sorbact Gel Dressing 7.5x7.5 cm"} /></Text>
            <Text style= {styles.text}>Sorbact Gel Dressing 7.5x15cm                    <Counter element={"Sorbact Gel Dressing 7.5x15 cm "}/></Text>
            <Text style= {styles.text}>Actisorb (pansement charbon)                    <Counter element={"Actisorb (pansement charbon)"}/></Text>
        </View>
    );
};

const ListSuperAbsorbant = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>Convamax superabs 10x10cm                    <Counter element={"Convamax superabs 10x10cm"}/></Text>
            <Text style= {styles.text}>Convamax superabs 10x20cm                    <Counter element={"Convamax superabs 10x20cm"}/></Text>
            <Text style= {styles.text}>Convamax superabs 12.5x12.5cm                    <Counter element={"Convamax superabs 12.5x12.5cm"}/></Text>
            <Text style= {styles.text}>Convamax superabs 20x30cm                    <Counter element={"Convamax superabs 20x30cm"}/></Text>
            <Text style= {styles.text}>Sorbact superabs 10x10cm                    <Counter element={"Sorbact superabs 10x10cm"}/></Text>
            <Text style= {styles.text}>Cutimed Sorbion 10x10cm                    <Counter element={"Cutimex Sorbion 10x10cm"}/></Text>
            <Text style= {styles.text}>Cutimed Sorbion 30x20cm                    <Counter element={"Cutimex Sorbion 30x20cm"}/></Text>
            <Text style= {styles.text}>Cutimed Sorbionsing XL 45x20cm                    <Counter element={"Cutimex Sorbionsing XL 45x20cm"}/></Text>
            <Text style= {styles.text}>Resposorb 12.5x12.5cm                    <Counter element={"Resposorb 12.5x12.5cm"}/></Text>
            <Text style= {styles.text}>Resposorb border 17.5x17.5                    <Counter element={"Resposorb 17.5x17.5cm"}/></Text>
        </View>
    );
};

const ListFixation = () => {
    return(
        <View style= {styles.container}>
            <Text style= {styles.text}>Bande Omnifix 5cm                    <Counter element={"Bande omnifix 5cm"} /></Text>
            <Text style= {styles.text}>Bande Omnifix 10cm                    <Counter element={"Bande omnifix 10cm"}/></Text>
            <Text style= {styles.text}>Opsite 14x10cm                    <Counter element={"Opsite 14x10cm"} /></Text>
            <Text style= {styles.text}>Opsite 14x25cm                    <Counter element={"Opsite 14x25cm"}/></Text>
            <Text style= {styles.text}>Leukostrip - Stéristrip                    <Counter element={"Leukostrip - Stéristrip"}/></Text>
            <Text style= {styles.text}>Compresse trachéo "Métalline"                    <Counter element={"Compresse trachéo 'Métalline'"}/></Text>
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
