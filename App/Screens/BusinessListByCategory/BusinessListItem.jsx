import { View, Text ,Image,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
export default function BusinessListItem({items}) {
  const navigation=useNavigation();
    return (
    <TouchableOpacity style={styles.contanier} 
    onPress={()=>navigation.push('BusinessDetail',{
        items:items
    })}>
    <Image
                    source={{ uri: items?.images[0]?.url }}
                    style={styles.img}
                />
                <View style={styles.subContanier}>
                <Text style={{ fontFamily: 'outfit', fontSize: 20,color:'gray'}}>{items?.contactPerson}</Text>
                <Text style={{ fontFamily: 'outfit-bold', fontSize: 20 }}>{items?.name}</Text>
                <Text style={{alignItems:'center',fontFamily: 'outfit', fontSize: 16, color: 'gray'}}>
                <MaterialIcons name="location-pin" size={20} color="#501594"/>{items?.address}</Text> 
                </View>
    </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
    img:{
        height:100,
        width:150,
        borderRadius:20,
        resizeMode:'contain'
    },
contanier:{
marginTop:20,
padding:10,
backgroundColor:'white',
borderRadius:15,
marginBottom:15,
display:'flex',
flexDirection:'row',
gap:10
    },
    subContanier:{
        dispaly:'flex',
        gap:7,
    },
})