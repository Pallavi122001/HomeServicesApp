import { View, Text, FlatList ,StyleSheet} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import GlobalApi from '../../Utils/GlobalApi';
import BusinessListItem from './BusinessListItem';
import PageHeading from '../../Components/PageHeading';
import { SF,SW,SH } from '../../Utils/fontDimension';
export default function BusinessListByCategory() {
    const param = useRoute().params;
    const [businessList, setBusinessList] = useState([]);

    useEffect(() => {
        param && GetBusinessByCategory();
    }, [param]);

    const GetBusinessByCategory = () => {
        GlobalApi.GetBusinessListByCategory(param.categories)
            .then(resp => {
                setBusinessList(resp.business_List);
            });
    };

    return (
        <View style={{ padding:SW(5), paddingTop:SH(5) }}>
            <PageHeading title={param?.categories} />
            {businessList?.length > 0 ? (
                <FlatList
                    data={businessList}
                    renderItem={({ item }) => (
                        <BusinessListItem items={item} />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            ) : (
                <Text style={styles.noBusinessText}>
                    No Business Found
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    noBusinessText: {
        fontFamily: 'outfit-bold',
        fontSize: SF(5),
        textAlign: 'center',
        margin: "20%",
        color: 'gray'
    }
});
