import * as React from 'react';
import { useState } from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import BoxItemCategories from './BoxItemCategories';
import {ListProduits, ListMateriel, ListAccessoires, 
    ListNonSterile, ListSterile, ListsousFecale, ListDrainage, 
    ListStomie, ListJusdeFruits, ListEauGelifiee, ListPoudreHyperProtidique,
ListBoissonLactee, ListCreme, ListConcentreProteine, ListBoissonLacteeSpe,
ListRenasys, ListActiv, ListVacUlta, ListVivano, ListKitTpn, ListSnap,
ListWoundel, ListBandElastique, ListBandContention, ListBandCompression, ListHydrocellulaires,
ListHydrocolloides, ListInterfaces, ListHydrofibres, ListAlginates, ListActifs,
ListSuperAbsorbant, ListFixation} from './Sublists';
import Counter from '../Counter';


const ListHygiene = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text} >Blouse <Counter element={"Blouse"}/></Text>
                <Text style= {styles.text}>Tablier Plastique                    <Counter element={"Tablier Plastique"}/></Text>
                <Text style= {styles.text}>Gants non stérile                    <Counter element={"Gants non stérile"}/></Text>
                <Text style= {styles.text}>Masque                    <Counter element={"Masque"}/></Text>
                <Text style= {styles.text} >Charlotte                    <Counter element={"Charlotte"}/></Text>
                <Text style= {styles.text}>Gants Stériles                    <Counter element={"Gants Stériles"}/></Text>
                <Text style= {styles.text}>Savon                    <Counter element={"Savon"}/></Text>
                <Text style= {styles.text}>Aniosgel Pompe                    <Counter element={"Aniosgel Pompe"}/></Text>
                <Text style= {styles.text} >Anios Surfa'safe                    <Counter element={"Anios Surfa'Safe"}/></Text>
                <Text style= {styles.text}>Salvanios                    <Counter element={"Salvanios"}/></Text>
                <Text style= {styles.text}>Gants de Toilette                    <Counter element={"Gants de Toilette"}/></Text>
                <Text style= {styles.text}>Batonnets soins de bouche                    <Counter element={"Batonnets soins de bouche"}/></Text>
                <Text style= {styles.text}>Comprimés soins de bouche                    <Counter element={"Comprimés soins de bouche"}/></Text>
                <Text style= {styles.text}>Abaisse langue                    <Counter element={"Abaisse langue"}/></Text>
                <Text style= {styles.text}>Crachoir                    <Counter element={"Crachoir"}/></Text>
                <Text style= {styles.text}>Haricot                    <Counter element={"Haricot"}/></Text>
                <Text style= {styles.text} >Collecteur objets piquants <Counter element={"Collecteur objets piquants"}/></Text>
                <Text style= {styles.text}>Sac DASRI                    <Counter element={"Sac DASRI"}/></Text>
                <Text style= {styles.text} >Sac Poubelle                    <Counter element={"Sac Poubelle"}/></Text>
        </View>
    );
};

const ListSoins = () => {
    return(
        <View style= {styles.container}>
                <Text style= {styles.text}>Alese                    <Counter element ={"Alese"}/></Text>
                <Text style= {styles.text}>Set à Pansements                    <Counter element={"Set à Pansements"}/></Text>
                <Text style= {styles.text}>Compresse 7.5 * 7.5 B50                    <Counter element={"Compresse 7.5*7.5 B50"}/></Text>
                <Text style= {styles.text}>Compresse 10 * 10 B50                    <Counter element={"Compresse 10*10 B50"}/></Text>
                <Text style= {styles.text}>Ciseaux                    <Counter element={"Ciseaux"}/></Text>
                <Text style= {styles.text}>Coupe Fils                    <Counter element={"Coupe fils"}/></Text>
                <Text style= {styles.text}>Curette                    <Counter element={"Curette"}/></Text>
                <Text style= {styles.text}>Stylet                    <Counter element={"Stylet"}/></Text>
                <Text style= {styles.text}>Bande Nylex                    <Counter element={"Bande Nylex"}/></Text>
                <Text style= {styles.text}>Bande Crêpe (Velpeau)                    <Counter element={"Bande Crêpe (Velpeau)"}/></Text>
                <Text style= {styles.text}>Sparadrap Microporeux                    <Counter element={"Sparadrap Microporeux"}/></Text>
                <Text style= {styles.text}>Champ Stérile                    <Counter element={"Champ Stérile"}/></Text>
                <Text style= {styles.text}>Ôte Agrafes                    <Counter element={"Ôte Agrafes"}/></Text>
                <Text style= {styles.text}>Protecteur Cutané Brava Max                    <Counter element={"Protecteur Cutané Brava Max"}/></Text>
                <Text style= {styles.text}>Spray Brava                    <Counter element={"Spray Brava"}/></Text>
                <Text style= {styles.text}>Spray Adapt                    <Counter element={"Spray Adapt"}/></Text>
                <Text style= {styles.text}>Sanyrene Pomp                    <Counter element={"Sanyrene Pomp"}/></Text>
                <Text style= {styles.text}>Conveen Portact cr                    <Counter element={"Conveen Portact cr"}/></Text>
                <Text style= {styles.text}>Verre Canard                    <Counter element={"Verre Canard"}/></Text>
                <Text style= {styles.text}>Pilulier                    <Counter element={"Pilulier"}/></Text>
                <Text style= {styles.text}>Ecrase comprimés                    <Counter element={"Ecrase comprimés"}/></Text>
        </View>
    );
};

const ListPerfusions = () => {
    const [list, setList] = useState('');

    const produitsclick = () => setList(<ListProduits/>);
    const materielclick = () => setList(<ListMateriel/>);
    const accessoiresclick = () => setList(<ListAccessoires/>);

    return(
        <View>
            <Text style={styles.titlesubCategories}>Sous-Catégories</Text>
            <View style= {styles.view}>
                <BoxItemCategories
                        image= {<Image source={require('../Images/saline.png')} style={styles.Icons}/>}
                        color="rgba(65,105,225,0.5)"
                        text="Produits"
                        onPress= {produitsclick}
                />
                <BoxItemCategories
                image= {<Image source={require('../Images/catheter.png')} style={styles.Icons}/>}
                color="	rgba(255,0,0,0.5)"
                text="Matériel"
                onPress={materielclick}
                />
                <BoxItemCategories
                image= {<Image source={require('../Images/needle.png')} style={styles.Icons}/>}
                color="rgba(102, 0, 204, 0.5)"
                text="Accessoires CIP/PICC"
                onPress={accessoiresclick}
                />
            </View>
            {list}
        </View>
    );};

const ListUrinaires = () => {
    const [list, setList] = useState('');

    const nonsterileclick = () => setList(<ListNonSterile/>);
    const sterileclick = () => setList(<ListSterile/>);

    return(
        <View>
            <Text style={styles.titlesubCategories}>Sous-Catégories</Text>
            <View style= {styles.view}>
                <BoxItemCategories
                        image= {<Image source={require('../Images/warning.png')} style={styles.Icons}/>}
                        color="rgba(255,192,58,0.5)"
                        text="Non Stérile"
                        onPress= {nonsterileclick}
                />
                <BoxItemCategories
                image= {<Image source={require('../Images/eliminate.png')} style={styles.Icons}/>}
                color="	rgba(225,210,184,0.5)"
                text="Stérile"
                onPress={sterileclick}
                />
            </View>
            {list}
        </View>
    );};

const ListFecales = () => {
    const [list, setList] = useState('');

    const sousfecaleclick = () => setList(<ListsousFecale/>);
    const drainageclick = () => setList(<ListDrainage/>);
    const stomieclick = () => setList(<ListStomie/>);

    return(
        <View>
            <Text style={styles.titlesubCategories}>Sous-Catégories</Text>
            <View style= {styles.view}>
                <BoxItemCategories
                        image= {<Image source={require('../Images/prostate-exam.png')} style={styles.Icons}/>}
                        color="rgb(255, 255, 255)"
                        text="Fecale"
                        onPress= {sousfecaleclick}
                />
                <BoxItemCategories
                image= {<Image source={require('../Images/digestion.png')} style={styles.Icons}/>}
                color="	rgba(0,255,0,0.5)"
                text="Drainage"
                onPress={drainageclick}
                />
                <BoxItemCategories
                image= {<Image source={require('../Images/colon-cancer.png')} style={styles.Icons}/>}
                color="rgba(255, 192, 203, 0.5)"
                text="Stomie"
                onPress={stomieclick}
                />
            </View>
            {list}
        </View>
    );};

const ListRespiratoire = () => {
    return(
        <View>
            <Text style= {styles.text}>Lunette O²                    <Counter element={"Lunette O²"}/></Text>
            <Text style= {styles.text}>Masque aérosol                    <Counter element={"Masque aérosol"}/></Text>
            <Text style= {styles.text}>Gel Lubrifiant K.Y                    <Counter element={"Gel Lubrifiant K.Y"}/></Text>
        </View>
    );};

const ListGlycemie = () => {
    return(
    <View>
        <Text style= {styles.text}>Lecteur de Glycémie                    <Counter element={"Lecteur de Glycémie"}/></Text>
        <Text style= {styles.text}>Bandelette Accu-Check guide B50                    <Counter element={"Bandelette Accu-Check guide B50"}/></Text>
        <Text style= {styles.text}>Autopiqueur Unistik S30                    <Counter element={"Autopiqueur Unistik S30"}/></Text>
        <Text style= {styles.text}>Aiguille de sécurité 4 mm S30                    <Counter element={"Aiguille de sécurité 4mm S30"}/></Text>
        <Text style= {styles.text}>Aiguille de sécurité 8 mm S30                    <Counter element={"Aiguille de sécurité 8mm S30"}/></Text>
    </View>
    );};

const ListNutrition = () => {
    return(
    <View>
            <Text style= {styles.text}>POCHES D'ALIMENTATION ENTERALES Fresub                    <Counter element={"POCHE D'ALIMENTATION ENTERALES Fresub"}/></Text>
            <Text style= {styles.text}>POCHES D'ALIMENTATION ENTERALES Fresubin 2 Kcal HP Fibre 500ml                    <Counter element={"POCHES D'ALIMENTATION ENTERALES Fresubin 2Kcal HP Fibre 500ml"}/></Text>
            <Text style= {styles.text}>Seringue ENFit 50ml                    <Counter element={"Seringue ENFit 50ml"}/></Text>
            <Text style= {styles.text}>Adaptateur Godet ENFit NCE100A                    <Counter element={"Adaptateur Godet ENFit NCE100A"}/></Text>
            <Text style= {styles.text}>Adaptateur Fosset ENFit NCE1058A                    <Counter element={"Adaptateur Fosset ENFit NCE1058A"}/></Text>
            <Text style= {styles.text}>Seringue de gavage 50ml                    <Counter element={"Seringue de gavage 50ml"}/></Text>
            <Text style= {styles.text}>Fosset 478.00                    <Counter element={"Fosset 478.00"}/></Text>
            <Text style= {styles.text}>SNG SDFT08                    <Counter element={"SNG SDFT08"}/></Text>
            <Text style= {styles.text}>SNG SDFT1                    <Counter element={"SNG SDFT1"}/></Text>
            <Text style= {styles.text}>SNG SDFT12                    <Counter element={"SNG SDFT12"}/></Text>
            <Text style= {styles.text}>SNG SDFT14                    <Counter element={"SNG SDFT14"}/></Text>
    </View>
    );};

const ListAspiration = () => {
    return(  
    <View>
        <Text style= {styles.text}>Sonde d'aspiration boite de 50 Noire CH10                    <Counter element={"Sonde d'aspiration boite de 50 Noire CH10"}/></Text>
        <Text style= {styles.text}>Sonde d'aspiration boite de 50 Blanche CH12                    <Counter element={"Sonde d'aspiration boite de 50 blanche CH12"}/></Text>
        <Text style= {styles.text}>Sonde d'aspiration boite de 50 Verte CH14                    <Counter element={"Sonde d'aspiration boite de 50 Verte CH14"}/></Text>
        <Text style= {styles.text}>Sonde d'aspiration boite de 50 Orange CH16                    <Counter element={"Sonde d'aspiration boite de 50 Orange CH16"}/></Text>
        <Text style= {styles.text}>Sonde d'aspiration boite de 50 Rouge CH18                    <Counter element={"Sonde d'aspiration boite de 50 Rouge CH18"}/></Text>
        <Text style= {styles.text}>Stop vide Uni'valve                    <Counter element={"Stop vide Uni'valve"}/></Text>
        <Text style= {styles.text}>Poly'vac (Bouchon)                    <Counter element={"Poly'vac (Bouchon)"}/></Text>
        <Text style= {styles.text}>Eau stérile versable 1000ml                    <Counter element={"Eau stérile versable"}/></Text>
        <Text style= {styles.text}>Eau PPI 20ml                    <Counter element={"Eau PPI 20ml"}/></Text>
    </View>
    );};

const ListComplements = () => {
    const [list, setList] = useState('');

    const jusdefruitsclick = () => setList(<ListJusdeFruits/>);
    const eaugelifieeclick = () => setList(<ListEauGelifiee/>);
    const poudrehyperprotidiqueclick = () => setList(<ListPoudreHyperProtidique/>);
    const boissonlacteeclick = () => setList(<ListBoissonLactee/>);
    const cremeclick = () => setList(<ListCreme/>);
    const concentreproteineclick = () => setList(<ListConcentreProteine/>);
    const boissonlacteespeclick = () => setList(<ListBoissonLacteeSpe/>);

    return(
        <View>
            <Text style={styles.titlesubCategories}>Sous-Catégories</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style= {styles.scrollViewCategories}>
                <BoxItemCategories
                        image= {<Image source={require('../Images/juice.png')} style={styles.Icons}/>}
                        color="rgba(128, 0, 32, 0.5)"
                        text="Jus de Fruits"
                        onPress= {jusdefruitsclick}
                />
                <BoxItemCategories
                image= {<Image source={require('../Images/jelly.png')} style={styles.Icons}/>}
                color="	rgb(255,255,255)"
                text="Eau Gélifiée"
                onPress={eaugelifieeclick}
                />
                <BoxItemCategories
                image= {<Image source={require('../Images/measuring-cup.png')} style={styles.Icons}/>}
                color="rgba(0, 150, 255, 0.5)"
                text="Poudre Hyper Protidique"
                onPress={poudrehyperprotidiqueclick}
                />
                <BoxItemCategories
                        image= {<Image source={require('../Images/milkdrink.png')} style={styles.Icons}/>}
                        color="rgb(128, 0, 0)"
                        text="Boisson Lactée"
                        onPress= {boissonlacteeclick}
                />
                <BoxItemCategories
                image= {<Image source={require('../Images/cream.png')} style={styles.Icons}/>}
                color="rgb(240,234,214)"
                text="Crème"
                onPress={cremeclick}
                />
                <BoxItemCategories
                image= {<Image source={require('../Images/protein.png')} style={styles.Icons}/>}
                color="rgba(0, 255, 0, 0.5)"
                text="Concentré Protéines"
                onPress={concentreproteineclick}
                />
                <BoxItemCategories
                image= {<Image source={require('../Images/warning.png')} style={styles.Icons}/>}
                color="rgba(255, 234, 0, 0.5)"
                text="Boisson Lactée Spécifique"
                onPress={boissonlacteespeclick}
                />
            </ScrollView>
            {list}
        </View>
    );};

const ListTpn = () => {
    const [list, setList] = useState('');

    const renasysclick = () => setList(<ListRenasys/>);
    const activclick = () => setList(<ListActiv/>);
    const vacultaclick = () => setList(<ListVacUlta/>);
    const vivanoclick = () => setList(<ListVivano/>);
    const kittpnclick = () => setList(<ListKitTpn/>);
    const snapclick = () => setList(<ListSnap/>);
    const woundelclick = () => setList(<ListWoundel/>);
    const bandelastiqueclick = () => setList(<ListBandElastique/>);
    const bandcontentionclick = () => setList(<ListBandContention/>);
    const bandcompressionclick = () => setList(<ListBandCompression/>);

    return(
    <View>
        <Text style={styles.titlesubCategories}>Sous-Catégories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style= {styles.scrollViewCategories}>
            <BoxItemCategories
                    image= {<Image source={require('../Images/Renasys.jpg')} style={styles.Icons}/>}
                    color="rgba(128, 0, 32, 0.5)"
                    text="Renasys"
                    onPress= {renasysclick}
            />
            <BoxItemCategories
            image= {<Image source={require('../Images/activaccanister.jpg')} style={styles.Icons}/>}
            color="rgb(255,255,255)"
            text="ACTIV A.C KCI"
            onPress={activclick}
            />
            <BoxItemCategories
            image= {<Image source={require('../Images/vaculta.jpg')} style={styles.Icons}/>}
            color="rgba(0, 150, 255, 0.5)"
            text="VAC ULTA KCI"
            onPress={vacultaclick}
            />
            <BoxItemCategories
                    image= {<Image source={require('../Images/Vivano.jpg')} style={styles.Icons}/>}
                    color="rgb(128, 0, 0)"
                    text="VIVANO"
                    onPress= {vivanoclick}
            />
            <BoxItemCategories
            image= {<Image source={require('../Images/kittpnpico.png')} style={styles.Icons}/>}
            color="rgb(240,234,214)"
            text="Kit TPN"
            onPress={kittpnclick}
            />
            <BoxItemCategories
            image= {<Image source={require('../Images/KitSNAP.png')} style={styles.Icons}/>}
            color="rgba(255, 255, 255, 0.5)"
            text="SNAP"
            onPress={snapclick}
            />
            <BoxItemCategories
            image= {<Image source={require('../Images/woundeltpn.jpg')} style={styles.Icons}/>}
            color="rgba(255, 234, 0, 0.5)"
            text="WOUNDEL"
            onPress={woundelclick}
            />
            <BoxItemCategories
            image= {<Image source={require('../Images/Tubifast.jpg')} style={styles.Icons}/>}
            color="rgba(255, 234, 0, 0.5)"
            text="Bandage Elastique"
            onPress={bandelastiqueclick}
            />
            <BoxItemCategories
            image= {<Image source={require('../Images/biflex.png')} style={styles.Icons}/>}
            color="rgba(255, 234, 0, 0.5)"
            text="Bandage de contention"
            onPress={bandcontentionclick}
            />
            <BoxItemCategories
            image= {<Image source={require('../Images/urgo.jpg')} style={styles.Icons}/>}
            color="rgba(255, 234, 0, 0.5)"
            text="Bandage de compression"
            onPress={bandcompressionclick}
            />
        </ScrollView>
        {list}
    </View>
    );};

const ListPansements = () => {
    const [list, setList] = useState('');

    const hydrocellulairesclick = () => setList(<ListHydrocellulaires/>);
    const hydrocolloidesclick = () => setList(<ListHydrocolloides/>);
    const interfacesclick = () => setList(<ListInterfaces/>);
    const hydrofibresclick = () => setList(<ListHydrofibres/>);
    const alginatesclick = () => setList(<ListAlginates/>);
    const actifsclick = () => setList(<ListActifs/>);
    const superabsorbantclick = () => setList(<ListSuperAbsorbant/>);
    const fixationclick = () => setList(<ListFixation/>);

    return(
        <View>
        <Text style={styles.titlesubCategories}>Sous-Catégories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style= {styles.scrollViewCategories}>
            <BoxItemCategories
                    image= {<Image source={require('../Images/hydrocellulaires.png')} style={styles.Icons}/>}
                    color="rgba(128, 0, 32, 0.5)"
                    text="Hydrocellulaires"
                    onPress= {hydrocellulairesclick}
            />
            <BoxItemCategories
            image= {<Image source={require('../Images/hydrocolloides.jpg')} style={styles.Icons}/>}
            color="rgb(255,255,255)"
            text="Hydrocolloides"
            onPress={hydrocolloidesclick}
            />
            <BoxItemCategories
            image= {<Image source={require('../Images/interfaces.png')} style={styles.Icons}/>}
            color="rgba(0, 150, 255, 0.5)"
            text="Interfaces"
            onPress={interfacesclick}
            />
            <BoxItemCategories
                    image= {<Image source={require('../Images/hydrofibres.jpg')} style={styles.Icons}/>}
                    color="rgb(128, 0, 0)"
                    text="Hydrofibres"
                    onPress= {hydrofibresclick}
            />
            <BoxItemCategories
            image= {<Image source={require('../Images/alginates.jpg')} style={styles.Icons}/>}
            color="rgb(240,234,214)"
            text="Alginates"
            onPress={alginatesclick}
            />
            <BoxItemCategories
            image= {<Image source={require('../Images/actifs.jpg')} style={styles.Icons}/>}
            color="rgba(255, 255, 255, 0.5)"
            text="Actifs"
            onPress={actifsclick}
            />
            <BoxItemCategories
            image= {<Image source={require('../Images/superabsorbant.jpg')} style={styles.Icons}/>}
            color="rgba(255, 234, 0, 0.5)"
            text="Super Absorbant"
            onPress={superabsorbantclick}
            />
            <BoxItemCategories
            image= {<Image source={require('../Images/fixation.png')} style={styles.Icons}/>}
            color="rgba(255, 234, 0, 0.5)"
            text="Fixation"
            onPress={fixationclick}
            />
        </ScrollView>
        {list}
    </View>
    );};

export {ListHygiene, ListSoins, ListPerfusions, ListUrinaires, 
    ListFecales, ListRespiratoire, ListGlycemie, ListNutrition, ListAspiration, 
    ListComplements, ListTpn, ListPansements};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
    },
    text: {
        paddingVertical : 5,
        borderBottomWidth: 1,
        borderBottomColor: '#45b3e0',
        color: '#45b3e0',
    },
    scrollViewCategories: {
      paddingLeft: 20,
    },
    Icons: {
      height: 60,
      width: 60,
    },
    view:
    {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 5,
        borderTopWidth: 3,
        borderTopColor: '#45b3e0',
        paddingHorizontal: 10,
        justifyContent: 'space-evenly'
    },
  titlesubCategories: {
    fontSize: 18,
    color: '#45b3e0',
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  scrollViewCategories: {
    paddingLeft: 20,
    borderTopWidth: 3,
    borderTopColor: '#45b3e0',
    paddingTop: 5,
  }
});
