import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import GlobalApi from '../../Utils/GlobalApi';
import { useUser } from '@clerk/clerk-expo';
import BookingList from './BookingList';
import { SH, SF, SW } from '../../Utils/fontDimension';

export default function Bookingscreen() {
  const [bookingList, setBookingList] = useState([]);
  // console.log("bookingList",bookingList);
  const [loading, setLoading] = useState(true);
  const user = useUser();

  useEffect(() => {
    if (user) GetUserBooking();
  }, [user]);

  const GetUserBooking = async () => {
    try {
      const resp = await GlobalApi.GetUserBookingDetails(user.user?.primaryEmailAddress.emailAddress);
      setBookingList(resp.bookings || []);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      setBookingList([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={{ padding: SW(5) }}>
      <Text style={{ paddingTop: SH(4), fontFamily: 'outfit-medium', fontSize: SF(6) }}>
        My Bookings
      </Text>
      {bookingList.length === 0 ? (
        <Text style={{ textAlign: 'center', marginTop: SH(10), fontSize: SF(4), color: 'gray' }}>
          No bookings found.
        </Text>
      ) : (
        <FlatList
          data={bookingList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            const business = item.businessList;

            if (!business) {
              return (
                <Text style={{ textAlign: 'center', marginTop: SH(2), fontSize: SF(4), color: 'gray' }}>
                  No business details available.
                </Text>
              );
            }
            return <BookingList key={business.id} booking={business} />;
          }}
        />
      )}
    </View>
  );
}
