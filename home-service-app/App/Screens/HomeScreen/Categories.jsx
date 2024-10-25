import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import GlobalApi from '../../Utils/GlobalApi';
import Headings from '../../Components/Headings';
import { useNavigation } from '@react-navigation/native';

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
        <View style={styles.container}>
            <Headings text={'Categories'} isViewAll={true} />
            <FlatList
                data={categories}
                numColumns={4}
                renderItem={({ item, index }) => index <= 3 && (
                    <TouchableOpacity onPress={()=>navigation.push('BusinessList',{
                        categories:item.name
                    })}>
                        <View style={styles.iconContainer}>
                            <Image
                                source={{ uri: item?.icon?.url }}
                                style={styles.image}
                            />
                        </View>
                        <Text style={{ fontFamily: 'outfit-medium', marginTop: 5, marginLeft: 20 }}>
                        {item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    iconContainer: {
        backgroundColor: '#e8e6e1',
        padding: 17,
        borderRadius: 99,
        marginRight: 12
    },
    image: {
        display: 'flex',
        flexDirection: 'row',
        width: 45,
        height: 45,
        borderRadius: 10,
        resizeMode: 'cover',
    },
});
