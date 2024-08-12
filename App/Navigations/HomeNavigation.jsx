import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BusinessListByCategory from '../Screens/BusinessListByCategory/BusinessListByCategory';
import BusinessDetailSearch from '../Screens/BusinessDetailsScreen/BusinessDetailSearch';

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="BusinessList" component={BusinessListByCategory} />
      <Stack.Screen name="BusinessDetail" component={BusinessDetailSearch} />
    </Stack.Navigator>
  );
}

