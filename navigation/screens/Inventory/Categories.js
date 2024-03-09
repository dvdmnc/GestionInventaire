import SubCategories from './SubCategories';

export default categoriesData = [
    {
      title: "Hygiène",
      subcategories: null,
      searchPhrase: "Hygiène",
      img: require('../Images/glove.png'),
      color: "rgba(255, 165, 0, 0.5)"
    },
    {
      title: "Matériel de Soins",
      subcategories: null,
      searchPhrase: "Matériel de Soins",
      img: require('../Images/bandage.png'),
      color: "rgba(56, 93, 56, 0.5)"
    },
    {
      title: "Perfusions",
      subcategories: [
        { title: "Produits", component: SubCategories.ListProduits, img: require('../Images/saline.png'), color: "rgba(65,105,225,0.5)" },
        { title: "Matériel", component: SubCategories.ListMateriel, img: require('../Images/catheter.png'), color: "rgba(255,0,0,0.5)" },
        { title: "Accessoires CIP/PICC", component: SubCategories.ListAccessoires, img: require('../Images/needle.png'), color: "rgba(102, 0, 204, 0.5)" }
      ],
      searchPhrase: "Perfusions",
      img: require('../Images/syringe.png'),
      color: "rgba(249, 228, 183, 0.5)"
    },
    {
      title: "Soins Urinaires",
      subcategories: [
        { title: "Non Stérile", component: SubCategories.ListSterile, img: require('../Images/warning.png'), color: "rgba(255,192,58,0.5)" },
        { title: "Stérile", component: SubCategories.ListNonSterile, img: require('../Images/eliminate.png'), color: "rgba(225,210,184,0.5)" }
      ],
      searchPhrase: "Soins Urinaires", 
      img: require('../Images/urinary-tract.png'), 
      color: "rgba(255, 114, 111, 0.5)" 
    },
    {
      title: "Soins Fécales",
      subcategories: [
        { title: "Fécale", component: SubCategories.ListsousFecale, img: require('../Images/prostate-exam.png'), color: "rgb(255, 255, 255)" },
        { title: "Drainage", component: SubCategories.ListDrainage, img: require('../Images/digestion.png'), color: "rgba(0,255,0,0.5)" },
        { title: "Stomie", component: SubCategories.ListStomie, img: require('../Images/colon-cancer.png'), color: "rgba(255, 192, 203, 0.5)" }
      ],
      searchPhrase: "Soins Fécales", 
      img: require('../Images/stool-test.png'), 
      color: "rgb(255, 255, 255)" 
    },
    {
        title: "Respiratoire",
        subcategories: null,
        searchPhrase: "Respiratoire",
        img: require('../Images/oxygen.png'),
        color: "rgba(224, 182, 189, 0.5)"
      },
      {
        title: "Glycémie",
        subcategories: null,
        searchPhrase: "Glycémie",
        img: require('../Images/sugar-blood-level.png'),
        color: "rgba(255, 213, 190, 0.5)"
      },
      {
        title: "Nutrition",
        subcategories: null,
        searchPhrase: "Nutrition",
        img: require('../Images/feeding.png'),
        color: "rgba(160, 160, 160, 0.5)"
      },
      {
        title: "Aspiration",
        subcategories: null,
        searchPhrase: "Aspiration",
        img: require('../Images/suction-tube.png'),
        color: "rgb(255, 255, 255)"
      },
      {
        title: "Compléments Alimentaires",
        subcategories: [
          { title: "Jus de Fruits", component: SubCategories.ListJusdeFruits, img: require('../Images/juice.png'), color: "rgba(128, 0, 32, 0.5)" },
          { title: "Eau Gélifiée", component: SubCategories.ListEauGelifiee, img: require('../Images/jelly.png'), color: "rgb(255,255,255)" },
          { title: "Poudre Hyper Protidique", component: SubCategories.ListPoudreHyperProtidique, img: require('../Images/measuring-cup.png'), color: "rgba(0, 150, 255, 0.5)" },
          { title: "Boisson Lactée", component: SubCategories.ListBoissonLactee, img: require('../Images/milkdrink.png'), color: "rgb(128, 0, 0)" },
          { title: "Crème", component: SubCategories.ListCreme, img: require('../Images/cream.png'), color: "rgb(240,234,214)" },
          { title: "Concentré Protéines", component: SubCategories.ListConcentreProteine, img: require('../Images/protein.png'), color: "rgba(0, 255, 0, 0.5)" },
          { title: "Boisson Lactée Spécifique", component: SubCategories.ListBoissonLacteeSpe, img: require('../Images/warning.png'), color: "rgba(255, 234, 0, 0.5)" }
        ],
        searchPhrase: "Compléments Alimentaires", 
        img: require('../Images/vitamin.png'), 
        color: "rgba(68, 85, 90, 0.5)" 
      },
      {
        title: "TPN Console",
        subcategories: [
            { title: "Renasys", component: SubCategories.ListRenasys, img: require('../Images/Renasys.jpg'), color: "rgba(128, 0, 32, 0.5)"},
            { title: "ACTIV A.C KCI", component: SubCategories.ListActiv, img: require('../Images/activaccanister.jpg'), color: "rgb(255,255,255)" },
            { title: "VAC ULTA KCI", component: SubCategories.ListVacUlta, img: require('../Images/vaculta.jpg'), color: "rgba(0, 150, 255, 0.5)"},
            { title: "VIVANO", component: SubCategories.ListVivano, img: require('../Images/Vivano.jpg'), color: "rgb(128, 0, 0)" },
            { title: "Kit TPN", component: SubCategories.ListKitTpn, img: require('../Images/kittpnpico.png'), color: "rgb(240,234,214)" },
            { title: "SNAP", component: SubCategories.ListSnap, img: require('../Images/KitSNAP.png'), color: "rgba(255, 255, 255, 0.5)" },
            { title: "WOUNDEL", component: SubCategories.ListWoundel, img: require('../Images/woundeltpn.jpg'), color: "rgba(255, 234, 0, 0.5)"},
            { title: "Bandage Elastique", component: SubCategories.ListBandElastique, img: require('../Images/Tubifast.jpg'), color: "rgba(255, 234, 0, 0.5)"},
            { title: "Bandage de contention", component: SubCategories.ListBandContention, img: require('../Images/biflex.png'), color: "rgba(255, 234, 0, 0.5)"},
            { title: "Bandage de compression", component: SubCategories.ListBandCompression, img: require('../Images/urgo.jpg'), color: "rgba(255, 234, 0, 0.5)"}
        ],
        searchPhrase: "TPN Console", 
        img: require('../Images/blood-pressure.png'), 
        color: "rgb(255, 255, 255)" 
      },
      {
        title: "Pansements",
        subcategories: [
            { title: "Hydrocellulaires", component: SubCategories.ListHydrocellulaires, img: require('../Images/hydrocellulaires.png'), color: "rgba(128, 0, 32, 0.5)"},
            { title: "Hydrocolloides", component: SubCategories.ListHydrocolloides, img: require('../Images/hydrocolloides.jpg'), color: "rgb(255,255,255)" },
            { title: "Interfaces", component: SubCategories.ListInterfaces, img: require('../Images/interfaces.png'), color: "rgba(0, 150, 255, 0.5)"},
            { title: "Hydrofibres", component: SubCategories.ListHydrofibres, img: require('../Images/hydrofibres.jpg'), color: "rgb(128, 0, 0)", },
            { title: "Alginates", component: SubCategories.ListAlginates, img: require('../Images/alginates.jpg'), color: "rgb(240,234,214)",  },
            { title: "Actifs", component: SubCategories.ListActifs, img: require('../Images/actifs.jpg'), color: "rgba(255, 255, 255, 0.5)", },
            { title: "Super Absorbant", component: SubCategories.ListSuperAbsorbant, img: require('../Images/superabsorbant.jpg'), color: "rgba(255, 234, 0, 0.5)" },
            { title: "Fixation", component: SubCategories.ListFixation, img: require('../Images/fixation.png'), color: "rgba(255, 234, 0, 0.5)" }
        ],
        searchPhrase: "Pansements", 
        img: require('../Images/band-aid.png'), 
        color: "rgba(255, 255, 0, 0.5)" 
      },
  ];
  