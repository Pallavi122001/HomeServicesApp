import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import GlobalApi from '../../Utils/GlobalApi';
import Headings from '../../Components/Headings';
import { useNavigation } from '@react-navigation/native';
import { SH,SW,SF } from '../../Utils/fontDimension';
export default function Categories() {
    const [categories, setCategories] = useState([]);
 const navigation=useNavigation()
    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = () => {
        GlobalApi.GetCategories().then((resp) => {
            setCategories(resp?.categories);
        });
    };

    return (
        <View>
            <Headings text={'Categories'} isViewAll={true} />
            <FlatList
                data={categories}
                numColumns={4}
                renderItem={({ item, index }) => index <= 3 && (
                    <TouchableOpacity onPress={()=>navigation.push('BusinessList',{
                        categories:item.name
                    })} style={{alignItems:"center",flex:1}}>
                        <View style={styles.iconContainer}>
                            <Image
                                source={{ uri: item?.icon?.url }}
                                style={styles.image}
                            />
                        </View>
                        <Text style={{ fontFamily: 'outfit-medium', marginTop:SH(1)}}>
                        {item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        backgroundColor: '#e8e6e1',
        padding:SW(4),
        borderRadius: 99,
        alignItems:"center",
    },
    image: {
        display: 'flex',
        flexDirection: 'row',
        width:SW(11),
        height:SH(5),
        borderRadius: 10,
        resizeMode: 'cover',
    },
});
