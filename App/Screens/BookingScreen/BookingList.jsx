import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { SF, SW, SH } from '../../Utils/fontDimension';
import { MaterialIcons } from '@expo/vector-icons';
export default function BookingList({ booking }) {  
    return (
        <TouchableOpacity
      style={styles.container}
    >
      <Image source={{ uri: booking?.images[0]?.url }} style={styles.img} />
      <View style={styles.subContainer}>
        <Text style={styles.contactPerson}>{booking?.contactPerson}</Text>
        <Text style={styles.name}>{booking?.name}</Text>
        <Text style={styles.address}>
          <MaterialIcons name="location-pin" size={20} color="#501594" />
          {booking?.address?.length > 25 ? `${booking.address.substring(0, 25)}...` : booking.address}
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
