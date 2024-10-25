import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Categories from './Categories'
import BusniessList from './BusniessList'
export default function HomeScreen() {
  return (
    <View>
      <Header />
      <View style={{ padding: 10 }}>
        <Slider />
        <Categories />
        <BusniessList />
      </View>
    </View>
  )
}