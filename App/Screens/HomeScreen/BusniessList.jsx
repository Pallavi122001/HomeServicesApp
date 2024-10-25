import { View,FlatList} from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react';
import Headings from '../../Components/Headings'
import GlobalApi from '../../Utils/GlobalApi';
import BusinessListItemsSmall from './BusinessListItemsSmall';
export default function BusniessList() {
    const [businessList, SetBusinessList] = useState([]);
    useEffect(() => {
        GetBusinessList();
    })
    const GetBusinessList = () => {
        GlobalApi.GetBusinessList().then(resp => {
            SetBusinessList(resp.business_List);
        })
    }
    return (
        <View>
            <Headings text={'Latest Business'} isViewAll={true} />
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={businessList}
                renderItem={({ item, index }) => <BusinessListItemsSmall item={item} />}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}