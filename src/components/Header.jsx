import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Header() {
    return (
        <View style={style.header}>
            <Text style={style.headerText}>Header</Text>
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        backgroundColor: "#1D3557",
        padding: 20,
    },
    headerText: {
        color: "#F1FAEE",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center"
    }
})