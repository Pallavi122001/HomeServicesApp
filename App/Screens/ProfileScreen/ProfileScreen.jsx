import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons';
import { useUser } from '@clerk/clerk-expo';
import LottieView from 'lottie-react-native';
import { SH,SW,SF } from '../../Utils/fontDimension';
import colors from '../../Utils/colors';
import { TouchableOpacity } from 'react-native';
export default function ProfileScreen() {
  const { user, isLoading } = useUser();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>
      <View style={styles.profileContainer}>
      <LottieView source={require('../../../assets/images/profile.json')} autoPlay loop 
      style={{width:SW(100),height:SH(50)}}/>
        <View style={styles.userInfo}>
          <FontAwesome name={'user-circle-o'} size={30} color={colors.PRIMARY} />
          <Text style={styles.detail}>{user.fullName || 'NA'}</Text>
        </View>
        <View style={styles.userInfo}>
        <MaterialCommunityIcons name={'email'} size={30} color={colors.PRIMARY} />
       <Text style={styles.detail}>{user.emailAddresses[0]?.emailAddress || 'NA'}</Text>
      </View>
      </View>
      <View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.Button}>
       <Text style={styles.ButtonText}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button}>
       <Text style={styles.ButtonText}>Edit</Text>
      </TouchableOpacity>
    </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:SF(3),
    backgroundColor: '#f8f8f8',
    paddingTop:SH(5)
  },
  heading: {
    fontSize:SF(5),
    fontWeight: 'bold',
    marginBottom: SH(3),
  },
  profileContainer: {
    padding:SH(5),
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detail: {
    fontSize: SF(4),
    marginLeft: SW(2),
  },
  Button:{
    backgroundColor:colors.PRIMARY,
    padding:SW(3),
    borderRadius:5,
    paddingHorizontal:SW(17)
  },
  ButtonText:{
    color:"#fff"
  },
  buttonContainer:{
    display:"flex",flexDirection:"row",
    justifyContent:"space-between",
    marginTop:SH(2)
  }
});
