import * as React from 'react';
import { useState } from 'react';
import {View, Text, SafeAreaView, ScrollView, StyleSheet, Image} from 'react-native';
import BoxItemCategories from './BoxItemCategories';
import {ListProduits, ListMateriel, ListAccessoires, 
    ListNonSterile, ListSterile, ListsousFecale, ListDrainage, 
    ListStomie, ListJusdeFruits, ListEauGelifiee, ListPoudreHyperProtidique,
ListBoissonLactee, ListCreme, ListConcentreProteine, ListBoissonLacteeSpe} from './Sublists';

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
    const [list, setList] = useState('');

    const produitsclick = () => setList(<ListProduits/>);
    const materielclick = () => setList(<ListMateriel/>);
    const accessoiresclick = () => setList(<ListAccessoires/>);

    return(
        <View>
            <Text style={styles.titlesubCategories}>Sous-Catégories</Text>
            <View style= {styles.view}>
                <BoxItemCategories
                        image= {<Image source={require('./screens/Images/saline.png')} style={styles.Icons}/>}
                        color="rgba(65,105,225,0.5)"
                        text="Produits"
                        onPress= {produitsclick}
                />
                <BoxItemCategories
                image= {<Image source={require('./screens/Images/catheter.png')} style={styles.Icons}/>}
                color="	rgba(255,0,0,0.5)"
                text="Matériel"
                onPress={materielclick}
                />
                <BoxItemCategories
                image= {<Image source={require('./screens/Images/needle.png')} style={styles.Icons}/>}
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
                        image= {<Image source={require('./screens/Images/warning.png')} style={styles.Icons}/>}
                        color="rgba(255,192,58,0.5)"
                        text="Non Stérile"
                        onPress= {nonsterileclick}
                />
                <BoxItemCategories
                image= {<Image source={require('./screens/Images/eliminate.png')} style={styles.Icons}/>}
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
                        image= {<Image source={require('./screens/Images/prostate-exam.png')} style={styles.Icons}/>}
                        color="rgb(255, 255, 255)"
                        text="Fecale"
                        onPress= {sousfecaleclick}
                />
                <BoxItemCategories
                image= {<Image source={require('./screens/Images/digestion.png')} style={styles.Icons}/>}
                color="	rgba(0,255,0,0.5)"
                text="Drainage"
                onPress={drainageclick}
                />
                <BoxItemCategories
                image= {<Image source={require('./screens/Images/colon-cancer.png')} style={styles.Icons}/>}
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
            <Text style= {styles.text}>Lunette O²</Text>
            <Text style= {styles.text}>Masque aérosol</Text>
            <Text style= {styles.text}>Gel Lubrifiant K.Y</Text>
        </View>
    );};

const ListGlycemie = () => {
    return(
    <View>
        <Text style= {styles.text}>Lecteur de Glycémie</Text>
        <Text style= {styles.text}>Bandelette Accu-Check guide B50</Text>
        <Text style= {styles.text}>Autopiqueur Unistik S30</Text>
        <Text style= {styles.text}>Aiguille de sécurité 4 mm S30</Text>
        <Text style= {styles.text}>Aiguille de sécurité 8 mm S30</Text>
    </View>
    );};

const ListNutrition = () => {
    return(
    <View>
            <Text style= {styles.text}>POCHES D'ALIMENTATION ENTERALES Fresub</Text>
            <Text style= {styles.text}>POCHES D'ALIMENTATION ENTERALES Fresubin 2 Kcal HP Fibre 500ml</Text>
            <Text style= {styles.text}>Seringue ENFit 50ml</Text>
            <Text style= {styles.text}>Adaptateur Godet ENFit NCE100A</Text>
            <Text style= {styles.text}>Adaptateur Fosset ENFit NCE1058A</Text>
            <Text style= {styles.text}>Seringue de gavage 50ml</Text>
            <Text style= {styles.text}>Fosset 478.00</Text>
            <Text style= {styles.text}>SNG SDFT08</Text>
            <Text style= {styles.text}>SNG SDFT10</Text>
            <Text style= {styles.text}>SNG SDFT12</Text>
            <Text style= {styles.text}>SNG SDFT14</Text>
    </View>
    );};

const ListAspiration = () => {
    return(  
    <View>
        <Text style= {styles.text}>Sonde d'aspiration boite de 50 Noire CH10</Text>
        <Text style= {styles.text}>Sonde d'aspiration boite de 50 Blanche CH12</Text>
        <Text style= {styles.text}>Sonde d'aspiration boite de 50 Verte CH14</Text>
        <Text style= {styles.text}>Sonde d'aspiration boite de 50 Orange CH16</Text>
        <Text style= {styles.text}>Sonde d'aspiration boite de 50 Rouge CH18</Text>
        <Text style= {styles.text}>Stop vide Uni'valve</Text>
        <Text style= {styles.text}>Poly'vac (Bouchon)</Text>
        <Text style= {styles.text}>Eau stérile versable 1000ml</Text>
        <Text style= {styles.text}>Eau PPI 20ml</Text>
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
    const boissonlacteespelick = () => setList(<ListBoissonLacteeSpe/>);

    return(
        <View>
            <Text style={styles.titlesubCategories}>Sous-Catégories</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style= {styles.scrollViewCategories}>
                <BoxItemCategories
                        image= {<Image source={require('./screens/Images/juice.png')} style={styles.Icons}/>}
                        color="rgba(128, 0, 32, 0.5)"
                        text="Jus de Fruits"
                        onPress= {jusdefruitsclick}
                />
                <BoxItemCategories
                image= {<Image source={require('./screens/Images/jelly.png')} style={styles.Icons}/>}
                color="	rgb(255,255,255)"
                text="Eau Gélifiée"
                onPress={eaugelifieeclick}
                />
                <BoxItemCategories
                image= {<Image source={require('./screens/Images/measuring-cup.png')} style={styles.Icons}/>}
                color="rgba(0, 150, 255, 0.5)"
                text="Poudre Hyper Protidique"
                onPress={poudrehyperprotidiqueclick}
                />
                <BoxItemCategories
                        image= {<Image source={require('./screens/Images/milkdrink.png')} style={styles.Icons}/>}
                        color="rgb(128, 0, 0)"
                        text="Boisson Lactée"
                        onPress= {boissonlacteeclick}
                />
                <BoxItemCategories
                image= {<Image source={require('./screens/Images/cream.png')} style={styles.Icons}/>}
                color="rgb(240,234,214)"
                text="Crème"
                onPress={cremeclick}
                />
                <BoxItemCategories
                image= {<Image source={require('./screens/Images/protein.png')} style={styles.Icons}/>}
                color="rgba(0, 255, 0, 0.5)"
                text="Concentré Protéines"
                onPress={concentreproteineclick}
                />
                <BoxItemCategories
                image= {<Image source={require('./screens/Images/warning.png')} style={styles.Icons}/>}
                color="rgba(255, 234, 0, 0.5)"
                text="Boisson Lactée Spécifique"
                onPress={boissonlacteespelick}
                />
            </ScrollView>
            {list}
        </View>
    );};

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
        marginTop: 5,
    },
    text: {
        paddingVertical : 5,
        borderBottomWidth: 1,
        borderBottomColor: '#45b3e0',
        color: '#45b3e0'
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
