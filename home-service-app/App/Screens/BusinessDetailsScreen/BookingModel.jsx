import { View, Text,TouchableOpacity,StyleSheet, FlatList, KeyboardAvoidingView, ToastAndroid} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CalendarPicker from "react-native-calendar-picker";
import colors from '../../Utils/colors';
import Headings from '../../Components/Headings';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import GlobalApi from '../../Utils/GlobalApi';
import { useUser } from '@clerk/clerk-expo';
import moment from 'moment';
export default function BookingModel({businessId,hideModal}) {
    const [timeList,setTimeList]=useState();
    const[selectedTime,setSelectedTime]=useState();
    const [selectedDate,setSelectedDate]=useState();
    const [note,SetNote]=useState();
    const navigation=useNavigation();
    const {user}=useUser();

    useEffect(()=>{
        getTime();
    },[])
    const getTime=()=>{
         const timeList=[];
         for(let i=8;i<=12;i++){
            timeList.push({
                time:i+':00  AM'
            })
            timeList.push({
                time:i+':30  AM'
            })
         }
         for(let i=1;i<=7;i++){
            timeList.push({
                time:i+':00  PM'
            })
            timeList.push({
                time:i+':30  PM'
            })
         }
         setTimeList(timeList);
    }
    const createNewBooking=()=>{
        if(!selectedTime||!selectedDate){
            ToastAndroid.show('Please select Date and Time',ToastAndroid.LONG)      
        return;
        }
        const data={
            userName:user?.fullName,
            userEmail:user?.primaryEmailAddress.emailAddress,
            time:selectedTime,
            date:moment(selectedDate).format('DD-MMM-YYYY'),
            businessId:businessId
        }

        GlobalApi.CreateBooking(data).then(resp=>{
            console.log("Resp",resp);
            ToastAndroid.show('Booking Created Sucessfully ! ',ToastAndroid.LONG)
            hideModal();
        })
    }
    return (
        <ScrollView>
    <KeyboardAvoidingView style={{padding:20}}>
    <TouchableOpacity style={{display:'flex',flexDirection:'row',gap:10,alignItems:'center',
    marginBottom:10}}
    onPress={()=>hideModal()}>
    <Ionicons name="arrow-back" size={24} color="black" />
    <Text style={{fontSize:25,fontFamily:'outfit-medium'}}>Booking</Text>
    </TouchableOpacity>
    <Headings text='Select Date'/>
    <View style={styles.calendar}>
    {/* Calender section */}
    <CalendarPicker 
    onDateChange={setSelectedDate} 
    width={340}
    minDate={Date.now()}
    todayBackgroundColor='black'
    todayTextStyle={{color:'white'}}
    selectedDayColor={colors.PRIMARY}
    selectedDayTextColor='white'
    />
    </View>
    {/* Time Select section */}
    <View style={{marginTop:15}}>
    <Headings text={'Select Time Slot'}/>
    <FlatList
    data={timeList}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    renderItem={({item,index})=>(
        <TouchableOpacity style={{marginRight:10}} 
        onPress={()=>setSelectedTime(item.time)}>
        <Text style={[selectedTime==item.time?
            styles.selectedTime:styles.unselectedTime]}>
            {item.time}</Text>
        </TouchableOpacity>
    )}
    />
    </View>
    {/*note section*/}
    <View>
    <Headings text={'Any Suggestion Note'}/>
    <TextInput placeholder='Note' style={styles.note}
    numberOfLines={4} multiline={true} onChange={(text)=>SetNote(text)}
    />
    </View>
    {/* confirmation button*/}
    <TouchableOpacity onPress={()=>createNewBooking()}>
    <Text style={styles.confirmbtn}>Confirm & Book</Text>
    </TouchableOpacity>
    </KeyboardAvoidingView>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  calendar:{
    backgroundColor:colors.Light_Primary,
    padding:20,
    borderRadius:15
  },
  selectedTime:{
    padding:10,
    borderWidth:1,
    borderColor:colors.PRIMARY,
    borderRadius:99,
    paddingHorizontal:18,
    color:'white',
    backgroundColor:colors.PRIMARY
  },
  unselectedTime:{
     padding:10,
     borderWidth:1,
     borderColor:colors.PRIMARY,
     borderRadius:99,
     paddingHorizontal:18,
     color:colors.PRIMARY
  },
  note:{
    borderWidth:1,
    borderRadius:15,
    textAlignVertical:'top',
    padding:20,
    fontSize:16,
    fontFamily:'outfit',
    borderColor:colors.PRIMARY
  },
  confirmbtn:{
    textAlign:'center',
    fontFamily:'outfit-medium',
    fontSize:17,
    backgroundColor:colors.PRIMARY,
    color:'white',
    borderRadius:99,
    padding:17,
    elevation:2,
    marginTop:20
  }
})
