import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBarList from './SearchBarList';
import { elements } from './Elements';

export default SubCategories = {
    ListProduits: () => (
        <SearchBarList data={elements} searchPhrase={"Perfusions - Produits"} />
    ),
    ListMateriel: () => (
        <SearchBarList data={elements} searchPhrase={"Perfusions - Matériel"} />
    ),
    ListAccessoires: () => (
        <SearchBarList data={elements} searchPhrase={"Perfusions - Accessoires"} />

    ),
    ListNonSterile: () => (
      
        <SearchBarList data={elements} searchPhrase={"Soins Urinaires - Non Stérile"} />

    ),
    ListSterile: () => (
      
        <SearchBarList data={elements} searchPhrase={"Soins Urinaires - Stérile"} />
    ),
    ListsousFecale: () => (
      
        <SearchBarList data={elements} searchPhrase={"Soins Fécales - Fécale"} />
    ),
    ListDrainage: () => (
      
        <SearchBarList data={elements} searchPhrase={"Soins Fécales - Drainage"} />
    ),
    ListStomie: () => (
      
        <SearchBarList data={elements} searchPhrase={"Soins Fécales - Stomie"} />
    ),
    ListJusdeFruits: () => (
      
        <SearchBarList data={elements} searchPhrase={"Compléments Alimentaires - Jus de Fruits"} />
    ),
    ListEauGelifiee: () => (
      
        <SearchBarList data={elements} searchPhrase={"Compléments Alimentaires - Eau Gélifiée"} />
    ),
    ListPoudreHyperProtidique: () => (
      
        <SearchBarList data={elements} searchPhrase={"Compléments Alimentaires - Poudre Hyperprotidique"} />
    ),
    ListBoissonLactee: () => (
      
        <SearchBarList data={elements} searchPhrase={"Compléments Alimentaires - Boisson Lactée"} />
    ),
    ListCreme: () => (
      
        <SearchBarList data={elements} searchPhrase={"Compléments Alimentaires - Crème"} />
    ),
    ListConcentreProteine: () => (
      
        <SearchBarList data={elements} searchPhrase={"Compléments Alimentaires - Concentré Protéines"} />
    ),
    ListBoissonLacteeSpe: () => (
      
        <SearchBarList data={elements} searchPhrase={"Compléments Alimentaires - Boisson Lactée Spécifique"} />
    ),
    ListRenasys: () => (
      
        <SearchBarList data={elements} searchPhrase={"TPN Console - Renasys"} />
    ),
    ListActiv: () => (
      
        <SearchBarList data={elements} searchPhrase={"TPN Console - ACTIV A.C KCI"} />
    ),
    ListVacUlta: () => (
      
        <SearchBarList data={elements} searchPhrase={"TPN Console - VAC ULTA KCI"} />
    ),
    ListVivano: () => (
      
        <SearchBarList data={elements} searchPhrase={"TPN Console - VIVANO"} />
    ),
    ListKitTpn: () => (
      
        <SearchBarList data={elements} searchPhrase={"TPN Console - Kit TPN"} />
    ),
    ListSnap: () => (
      
        <SearchBarList data={elements} searchPhrase={"TPN Console - SNAP"} />
    ),
    ListWoundel: () => (
  
        <SearchBarList data={elements} searchPhrase={"TPN Console - WOUNDEL"} />
    ),
    ListBandElastique: () => (
      
        <SearchBarList data={elements} searchPhrase={"TPN Console - Bandage Elastique"} />
    ),
    ListBandContention: () => (
      
        <SearchBarList data={elements} searchPhrase={"TPN Console - Bandage de contention"} />
    ),
    ListBandCompression: () => (
      
        <SearchBarList data={elements} searchPhrase={"TPN Console - Bandage de compression"} />
    ),
    ListHydrocellulaires: () => (
      
        <SearchBarList data={elements} searchPhrase={"Pansements - Hydrocellulaires"} />
    ),
    ListHydrocolloides: () => (
      
        <SearchBarList data={elements} searchPhrase={"Pansements - Hydrocolloides"} />
    ),
    ListInterfaces: () => (
      
        <SearchBarList data={elements} searchPhrase={"Pansements - Interfaces"} />
    ),
    ListHydrofibres: () => (
      
        <SearchBarList data={elements} searchPhrase={"Pansements - Hydrofibres"} />
    ),
    ListAlginates: () => (
      
        <SearchBarList data={elements} searchPhrase={"Pansements - Alginates"} />
    ),
    ListActifs: () => (
      
        <SearchBarList data={elements} searchPhrase={"Pansements - Actifs"} />
    ),
    ListSuperAbsorbant: () => (
      
        <SearchBarList data={elements} searchPhrase={"Pansements - Super Absorbant"} />
    ),
    ListFixation: () => (
      
        <SearchBarList data={elements} searchPhrase={"Pansements - Fixation"} />
    ),
  };
