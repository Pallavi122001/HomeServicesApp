import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function BusinessListItemsSmall({ item }) {
    if (!item) {
        return null;
    }

    return (
        <View style={styles.infoContainer}>
            <View style={styles.container}>
                <Image
                    source={{ uri: item?.images[0]?.url }}
                    style={styles.img}
                />
                <View>
                    <Text style={{ fontFamily: 'outfit-medium', fontSize: 20 }}>{item?.name}</Text>
                    <Text style={{ fontFamily: 'outfit', fontSize: 13, color: 'gray' }}>{item?.contactPerson}</Text>
                    <Text
                        style={{
                            fontFamily: 'outfit', fontSize: 15, padding: 5,
                            color: '#501594', backgroundColor: '#d6c2ed',
                            borderRadius: 3, alignSelf: 'flex-start', paddingHorizontal: 7
                        }}>
                        {item?.category?.name}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    infoContainer: {
        padding: 7,
        display: 'flex',
        flexDirection: 'row',
    },
    container: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10
    },
    img: {
        width: 170,
        height: 100,
        borderRadius: 10
    }
})
