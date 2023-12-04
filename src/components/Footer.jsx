import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Footer() {
    return (
        <View style={style.footer}>
            <Text style={style.footerText}>Footer</Text>
        </View>
    )
}

const style = StyleSheet.create({
    footer: {
        backgroundColor: "#1D3557",
        padding: 20,
    },
    footerText: {
        color: "#F1FAEE",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center"
    }
})