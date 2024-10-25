import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { SH,SF,SW } from '../../Utils/fontDimension';
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
                    <Text style={{ fontFamily: 'outfit-medium', fontSize: SF(4.5) }}>{item?.name}</Text>
                    <Text style={{ fontFamily: 'outfit', fontSize:SF(3.5), color: 'gray' }}>{item?.contactPerson}</Text>
                    <Text
                        style={{
                            fontFamily: 'outfit', fontSize:SF(3.5), padding: SW(1),
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
        padding: SW(1),
        display: 'flex',
        flexDirection: 'row',
    },
    container: {
        padding: SW(3),
        backgroundColor: 'white',
        borderRadius: 10
    },
    img: {
        width:SW(40),
        height:SH(13),
        borderRadius: 10
    }
})
