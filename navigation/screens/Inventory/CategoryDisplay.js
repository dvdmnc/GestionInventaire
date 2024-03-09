import React, { useState } from 'react';
import { View, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import BoxItemCategories from './BoxItemCategories';
import SearchBarList from './SearchBarList';
import { elements } from './Elements';
import Categories from './Categories';

const CategoryDisplay = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const [openSubcategory, setOpenSubcategory] = useState(null);

  const handleCategoryClick = (category) => {
    if (openCategory === category) {
      setOpenCategory(null);
      setOpenSubcategory(null);
    } else {
      setOpenCategory(category);
      setOpenSubcategory(null);
    }
  };

  const handleSubcategoryClick = (subcategory) => {
    setOpenSubcategory(subcategory);
  };

  return (
    <SafeAreaView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollViewCategories}>
        {Categories.map((category, index) => (
          <BoxItemCategories
            key={index}
            text={category.title}
            image={<Image source={category.img} style={styles.categoryImage} />}
            color={category.color}
            onPress={() => handleCategoryClick(category)}
          />
        ))}
      </ScrollView>
      {openCategory && !openCategory.subcategories && (
        <View style={{height:'80%'}}>
          <SearchBarList data={elements} searchPhrase={openCategory.searchPhrase} />
        </View>
      )}
      {openCategory && openCategory.subcategories && (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollViewCategories}>
          {openCategory.subcategories.map((subcategory, index) => (
            <BoxItemCategories
              key={index}
              text={subcategory.title}
              image={<Image source={subcategory.img} style={styles.subcategoryImage} />}
              color={subcategory.color}
              onPress={() => handleSubcategoryClick(subcategory)}
            />
          ))}
        </ScrollView>
      )}
      {openSubcategory && (
        <View style={{height:'70%'}}>
          {openSubcategory.component()}
        </View>
      )}
    </SafeAreaView>
  );
};

export default CategoryDisplay;

const styles = StyleSheet.create({
    scrollViewCategories: {
        paddingLeft: 20,
        borderTopWidth: 3,
        borderTopColor: 'pink',
        height: '20%'
      },
  categoryImage: {
    height: 60,
    width: 60,
  },
  subcategoryImage: {
    height: 40,
    width: 40,
  },
});






