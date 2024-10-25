import { View, Text , FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import GlobalApi from '../../Utils/GlobalApi';
import BusinessListItem from './BusinessListItem';
import PageHeading from '../../Components/PageHeading';
export default function BusinessListByCategory() {
    const param=useRoute().params;
    const [businessList,SetBusinessList]=useState([])
    useEffect(()=>{
        param&&GetBusinessByCategory();
    },[param])
    const GetBusinessByCategory=()=>{
        GlobalApi.GetBusinessListByCategory(param.categories)
        .then(resp=>{
           SetBusinessList(resp.business_List);
        })
    }
  return (
    <View style={{padding:20,paddingTop:50}}>
    <PageHeading title={param?.categories}/>
    {businessList?.length>0?
    <FlatList
    data={businessList}
    renderItem={({item,index})=>(
     <BusinessListItem item={item}/>   
    )}
    />:
    <Text style={{fontFamily:'outfit-bold',fontSize:20,textAlign:'center',margin:"20%",color:'gray'}}>
    No Business Found</Text>}
      </View>
  )
    }