import { View, Text,FlatList,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import { useUser } from '@clerk/clerk-expo'
import BusinessListItem from '../BusinessListByCategory/BusinessListItem'
export default function Bookingscreen(items) {
  const [bookingList,setBookingList]=useState([]);
  const user=useUser();
  useEffect(()=>{
    user&&GetUserBooking();
  },[user])
  const GetUserBooking=()=>{
    GlobalApi.GetUserBookingDetails(user.user?.primaryEmailAddress.emailAddress).then(resp=>{
      setBookingList(resp.bookings)
    })
  }
  return (
    <ScrollView style={{padding:20}}>
     <Text style={{paddingTop:40,fontFamily:'outfit-medium',fontSize:26}}>My Bookings</Text>
     <View>
     <FlatList
  data={bookingList}
  renderItem={({ item, index }) => (
  <BusinessListItem items={item?.business_List} 
   status={item.bookingStatus}
  />
  )}
/>
     </View>
    </ScrollView>
  )
}