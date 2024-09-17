import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import CATEGORIES from '../data/categories'; // Import dữ liệu danh mục

const CategoryScreen = ({ navigation }) => {
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => {
        navigation.navigate('MealDetailScreen', { categoryId: item.id });
      }}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.categoryImage} />
      <Text style={styles.categoryTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  categoryItem: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
  },
  categoryImage: {
    width: '100%',
    height: 150,
  },
  categoryTitle: {
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
  },
});

export default CategoryScreen;
