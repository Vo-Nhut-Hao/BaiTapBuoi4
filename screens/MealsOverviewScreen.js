import React from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MEALS } from '../data/meals';

const MealsOverviewScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;  // Lấy categoryId từ route.params

  // Lọc các món ăn theo danh mục
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

  const renderMealItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.mealItem}
        onPress={() => navigation.navigate('MealDetail', { mealId: itemData.item.id })}
      >
        <View style={styles.container}>
          <Image source={{ uri: itemData.item.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={displayedMeals}
      renderItem={renderMealItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  mealItem: {
    flex: 1,
    margin: 15,
    height: 180, // Điều chỉnh chiều cao cho món ăn
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5, // Thêm đổ bóng
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover', // Điều chỉnh kích thước hình ảnh
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 8,
    fontWeight: 'bold',
  },
});

export default MealsOverviewScreen;
