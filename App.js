import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons'; // Sử dụng Ionicons từ react-native-vector-icons
import CategoryScreen from './screens/CategoryScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MealsStack = () => (
  <Stack.Navigator initialRouteName="CategoryScreen">
    <Stack.Screen name="CategoryScreen" component={CategoryScreen} options={{ title: 'Danh Mục' }} />
    <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} options={{ title: 'Chi Tiết Món Ăn' }} />
  </Stack.Navigator>
);

const AppDrawer = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Meals" component={MealsStack} />
    <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    <Drawer.Screen name="Settings" component={SettingsScreen} />
  </Drawer.Navigator>
);

const AppTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Favorites') {
          iconName = 'heart';
        } else if (route.name === 'Settings') {
          iconName = 'settings';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen name="Home" component={AppDrawer} options={{ title: 'Trang Chủ' }} />
    <Tab.Screen name="Favorites" component={FavoritesScreen} options={{ title: 'Yêu Thích' }} />
    <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Cài Đặt' }} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <AppTabs />
    </NavigationContainer>
  );
}
