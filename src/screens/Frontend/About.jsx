import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default function About() {
  return (
    <View style={style.flexContainer}>
      <Text style={style.text}>About</Text>
    </View>
    )
}


const style = StyleSheet.create({
    flexContainer:{
        flex:1,
        backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center"
    },
    text :{
      color:"white",
      fontSize:48
    }
})