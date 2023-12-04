import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home({ navigation }) {
    return (
        <View style={style.flexContainer}>
            <View style={style.box}>
                <Text style={style.text}>Home <Icon name='home' size={36} /> </Text>
            </View>
            <View style={{ paddingTop: 10 }}>
                <Button title='Go to About' onPress={() => navigation.navigate("About")} />
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    flexContainer: {
        flex: 1,
        // backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center"
    },
    box: {
        backgroundColor: "#1D3557",
        borderRadius: 10,
        width: 200,
        height: 150,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "white",
        fontSize: 48
    }
})