import { View, Text, TextInput, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
  // using useuser hook for fetching the login user 
  const { user, isLoading } = useUser();
  return user && (
    //Profile section
    <View style={styles.contanier}>
      <View style={styles.ProfileMainContanier}>
        <View style={styles.ProfileContanier}>
          <Image source={{ uri: user?.imageUrl }}
            style={styles.userImage} />
          <View>
            <Text style={{ color: 'white', fontFamily: 'outfit' }}>Welcome,</Text>
            <Text style={{ color: 'white', fontSize: 20, fontFamily: 'outfit-medium' }}>{user?.fullName}</Text>
          </View>
        </View>
        <FontAwesome name="bookmark-o" size={24} color="white" />
      </View>
      <View style={styles.SearchBarContanier}>
        {/*search bar */}
        <TextInput placeholder='Search'
          style={styles.textInput} />
        <FontAwesome name="search" style={styles.searchBtn} size={24} color="black" />
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  contanier: {
    padding: 20,
    paddingTop: 25,
    backgroundColor: '#501594',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  ProfileMainContanier: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'space-between',
    paddingTop: 20
  },
  ProfileContanier: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99
  },
  SearchBarContanier: {
    marginTop: 15,
    display: 'flex'
  },
  textInput: {
    backgroundColor: 'white',
    padding: 7,
    borderRadius: 8,
    width: '88%',
    paddingHorizontal: 16,
    fontFamily: 'outfit'
  },
  SearchBarContanier: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    gap: 6,
    marginBottom: 10
  },
  searchBtn: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8
  }
})