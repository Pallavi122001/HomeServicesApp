import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Headings({ text, isViewAll = false }) {
    return (
        <View style={styles.contanier}>
            <Text style={styles.heading}>{text}</Text>
            {isViewAll && <Text>View All</Text>}
        </View>
    )
}
const styles = StyleSheet.create({
    heading: {
        fontFamily: 'outfit-medium',
        fontSize: 20,
        marginBottom: 10,
    },
    contanier: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'space-between'
    }
})
