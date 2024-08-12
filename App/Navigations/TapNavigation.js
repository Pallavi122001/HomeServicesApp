import { Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Bookingscreen from '../Screens/BookingScreen/Bookingscreen';
import { FontAwesome } from '@expo/vector-icons';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import HomeNavigation from './HomeNavigation';
const Tab = createBottomTabNavigator();
export default function TapNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#501594',

    }}>
      <Tab.Screen name='home_nav' component={HomeNavigation}

        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>Home</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={36} color={color} />
          )
        }}
      />
      <Tab.Screen name='booking' component={Bookingscreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>Booking</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bookmark" size={36} color={color} />
          ),

        }} />
      <Tab.Screen name='profile' component={ProfileScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>Profile</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle" size={36} color={color} />
          )
        }} />
    </Tab.Navigator>
  )
}