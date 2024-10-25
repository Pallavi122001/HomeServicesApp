import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import colors from '../../Utils/colors';
import BusinessAbout from './BusinessAbout';
import BookingModel from './BookingModel';
import { SF,SW,SH } from '../../Utils/fontDimension';
export default function BusinessDetailSearch() {
  const { params: { items } = {} } = useRoute();
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (!items) {
      navigation.goBack();
    }
  }, [items]);

  return items && (
    <ScrollView style={{ height: '93%' }}>
      <TouchableOpacity style={styles.backbtnContainer} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color="white" />
      </TouchableOpacity>

      <Image source={{ uri: items.images[0]?.url }} style={styles.img} />

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{items.name}</Text>
        <View style={styles.subContainer}>
          <Text style={styles.contactPerson}>{items.contactPerson} 🌟</Text>
          {items.category?.name && (
            <Text style={styles.category}>
              {items.category.name}
            </Text>
          )}
        </View>

        <Text style={styles.address}>
          <MaterialIcons name="location-pin" size={25} color="#501594" /> {items.address}
        </Text>

        {/* Divider */}
        <View style={styles.divider} />

        {/* About Section */}
        <BusinessAbout items={items} />

        {/* Divider */}
        <View style={styles.divider} />

        {/* Buttons */}
        <View style={styles.btns}>
          <TouchableOpacity>
            <Text style={styles.msgbtn}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowModal(true)}>
            <Text style={styles.bookingbtn}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal */}
      <Modal animationType='slide' visible={showModal}>
        <BookingModel businessId={items.id} hideModal={() => setShowModal(false)} />
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backbtnContainer: {
    position: 'absolute',
    top:SH(5),
    left:SW(5),
    padding: SW(3),
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 50,
  },
  img: {
    width: '100%',
    height: SH(40),
    resizeMode: 'cover',
  },
  infoContainer: {
    padding:SW(4),
    gap: 7,
  },
  title: {
    fontFamily: 'outfit-bold',
    fontSize:SF(6),
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  contactPerson: {
    fontFamily: 'outfit-medium',
    color: colors.PRIMARY,
    fontSize:SF(4),
  },
  category: {
    color: colors.PRIMARY,
    backgroundColor: colors.BG_PRIMARY,
    padding:SW(1),
    borderRadius: 5,
    fontSize:SF(3),
  },
  address: {
    fontFamily: 'outfit',
    fontSize:SF(5),
    color: 'gray',
  },
  divider: {
    borderWidth: 0.4,
    borderColor: 'gray',
    marginVertical:SH(1),
  },
  btns: {
    flexDirection: 'row',
    gap: 7,
  },
  msgbtn: {
    color: colors.PRIMARY,
    fontSize:SF(4),
    padding:SW(3),
    paddingHorizontal:SH(7),
    backgroundColor: 'white',
    fontFamily: 'outfit-medium',
    borderRadius: 90,
    borderColor: colors.PRIMARY,
    borderWidth: 1,
  },
  bookingbtn: {
    color: 'white',
    fontSize:SF(4),
    padding:SW(3),
    paddingHorizontal:SH(7),
    backgroundColor: colors.PRIMARY,
    fontFamily: 'outfit-medium',
    borderRadius: 90,
  },
});
