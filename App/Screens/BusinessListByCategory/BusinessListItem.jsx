import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SF,SW,SH } from '../../Utils/fontDimension';
export default function BusinessListItem({ items }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('BusinessDetail', { items })}
    >
      <Image source={{ uri: items?.images[0]?.url }} style={styles.img} />
      <View style={styles.subContainer}>
        <Text style={styles.contactPerson}>{items?.contactPerson}</Text>
        <Text style={styles.name}>{items?.name}</Text>
        <Text style={styles.address}>
          <MaterialIcons name="location-pin" size={20} color="#501594" />
          {items?.address?.length > 25 ? `${items.address.substring(0, 25)}...` : items.address}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  img: {
    height:SH(10),
    width: SW(30),
    borderRadius: 10,
    resizeMode: 'cover',
  },
  container: {
    marginTop:SH(2),
    padding: SW(3),
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    gap: 10,
  },
  subContainer: {
    display: 'flex',
    gap: 7,
  },
  contactPerson: {
    fontFamily: 'outfit',
    fontSize: SF(4),
    color: 'gray',
  },
  name: {
    fontFamily: 'outfit-bold',
    fontSize:SF(4.5),
  },
  address: {
    fontFamily: 'outfit',
    fontSize:SF(3.5),
    color: 'gray',
    alignItems: 'center',
  },
});
