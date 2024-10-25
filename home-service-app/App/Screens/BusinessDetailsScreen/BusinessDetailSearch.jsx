import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity,ScrollView, Modal } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../Utils/colors';
import { MaterialIcons } from '@expo/vector-icons';
import BusinessAbout from './BusinessAbout';
import BookingModel from './BookingModel';

export default function BusinessDetailSearch() {
  const route = useRoute().params;
  const items = route?.items;
  const [showModal,setshowModal]=useState(false);
  const navigation = useNavigation();
  useEffect(() => {

  }, []);

  return items&&(
    
        <ScrollView  style={{height:'93%'}}>
          <TouchableOpacity style={styles.backbtnContanier}>
            <Ionicons name="arrow-back" size={30} color="white" onPress={() => navigation.goBack()} />
          </TouchableOpacity>
          <Image source={{ uri: items?.images[0]?.url }} style={styles.img} />
          <View style={styles.infocontanier}>
            <Text style={{ fontFamily: 'outfit-bold', fontSize: 32 }}>{items?.name}</Text>
            <View style={styles.subContanier}>
              <Text style={{ fontFamily: 'outfit-medium', color: colors.PRIMARY, fontSize: 20 }}>{items?.contactPerson} 🌟</Text>
              <Text style={{ color: colors.PRIMARY, backgroundColor: colors.BG_PRIMARY, padding: 5, borderRadius: 5, fontSize: 17 }}>
              {items?.category.name}</Text>
            </View>
            <Text style={{ fontFamily: 'outfit', fontSize: 20, color: 'gray' }}>
              <MaterialIcons name="location-pin" size={25} color="#501594" />{items?.address}
            </Text>
            {/* Adding one horizontal line only */}
            <View style={{ borderWidth: 0.4, borderColor: "gray", marginTop: 20, marginBottom: 10 }}></View>
            {/* About me section */}
            <BusinessAbout items={items} />
           
            <View style={{ borderWidth: 0.4, borderColor: "gray", marginTop: 20, marginBottom: 10 }}></View>
            <View style={styles.btns}>
            <TouchableOpacity>
      <Text style={styles.msgbtn}>Message</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setshowModal(true)}>
      <Text style={styles.bookingbtn}>Book Now</Text>
      </TouchableOpacity>
            </View>
          </View>
          <Modal animationType='slide'
          visible={showModal}
          >
         <BookingModel 
         businessId={items.id}
         hideModal={()=>setshowModal(false)}/>
          </Modal>
        </ScrollView>
  );
}

const styles = StyleSheet.create({
backbtnContanier:{
  position:'absolute',
   zIndex:10,
   top:35,
  padding:20
    },
  img: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  infocontanier:{
    padding:17,
    gap:7,
    display:'flex'
  },
  subContanier:{
    display:'flex',
    flexDirection:'row',
    gap:7,
    alignItems:'center'
  },
  btns:{
 display:'flex',
 flexDirection:'row',
 gap:7
  },
  msgbtn:{
    color: colors.PRIMARY,
    fontSize:18,
    padding:15,
    paddingRight:55,
    paddingLeft:55,
    backgroundColor:'white',
    fontFamily:'outfit-medium',
    borderRadius:90,
    borderColor:colors.PRIMARY,
    borderWidth:1
  },
  bookingbtn:{
    color:'white',
    fontSize:18,
    padding:15,
    paddingRight:55,
    paddingLeft:55,
    backgroundColor:colors.PRIMARY,
    fontFamily:'outfit-medium',
    borderRadius:90,
    borderColor:colors.PRIMARY,
    borderWidth:1
  }
});
