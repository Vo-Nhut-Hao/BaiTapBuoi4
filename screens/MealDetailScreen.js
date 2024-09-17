import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import MEALS from '../data/meals'; // Import dữ liệu món ăn

const MealDetailScreen = () => {
  const route = useRoute();
  const { categoryId } = route.params;
  const meals = MEALS[categoryId] || []; // Lấy danh sách món ăn theo categoryId

  const renderMealItem = ({ item }) => (
    <View style={styles.mealItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.mealImage} />
      <Text style={styles.mealTitle}>{item.title}</Text>
      <Text style={styles.mealDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  mealItem: {
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  mealImage: {
    width: '100%',
    height: 150,
  },
  mealTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  mealDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default MealDetailScreen;
