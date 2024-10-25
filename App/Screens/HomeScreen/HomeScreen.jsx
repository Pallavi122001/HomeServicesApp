import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Categories from './Categories'
import BusniessList from './BusniessList'
import { SW } from '../../Utils/fontDimension';
export default function HomeScreen() {
  return (
    <View>
      <Header />
      <View style={{ padding: SW(3) }}>
        <Slider />
        <Categories />
        <BusniessList />
      </View>
    </View>
  )
}