import { View, Text, FlatList,Image } from 'react-native'
import React from 'react'
import Headings from '../../Components/Headings'

export default function BusinessPhotos({items}) {
  return(
    <View>
    <Headings text={'Photos'}/>
    <FlatList
    data={items.images}
    numColumns={2}
    renderItem={({item})=>(
        <Image source={{uri:item.url}}
        style={{width:'100%',height:120}}
        />
    )}
    />
    </View>
  )
}