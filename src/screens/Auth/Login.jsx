import React ,{useState} from 'react'
import { View, Text,TextInput,Button, StyleSheet } from 'react-native'
import { useAuthcontexts } from '../../contexts/AuthContext';


  const initialState = {email : "" , password : ""} 

export default function Login() {

  const [state , setSatate] = useState(initialState);
  const {isAuthenticated,setIsAuthenticated} = useAuthcontexts()

    const handleChange = (name , val )=> {
      setSatate(s=> ({...s ,[name]:val }) )
    }

    const handleLogin = () =>{
      const {email ,password } = state
    
      console.log('email', email)
      console.log('password', password)
      setIsAuthenticated(true)
    }


  return (
    <View style={styles.flexContainer}>
      <Text style={styles.h1}>Login</Text>
      <TextInput style={styles.formControl} placeholder='Enter your email' 
      placeholderTextColor="white" keyboardType="email-address"
      onChangeText={val => handleChange("email" , val)}
      />
      <TextInput style={styles.formControl} placeholder='Enter your password' 
      placeholderTextColor="white" secureTextEntry 
      onChangeText={val => handleChange("password" , val)}
      />
      <View style={styles.loginButton}>
        <Button title='Login' color="#E63946" onPress={handleLogin} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    flexContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#1D3557",
        paddingHorizontal:18
    },
    h1:{
      fontSize:40,
      fontWeight:"bold",
      color:"white",
      marginBottom:28
    },
    formControl:{
      color:"white",
      borderColor:"white",
      borderWidth:1,
      borderRadius:4,
      width:'100%',
      marginBottom:18,
      paddingHorizontal:10

    },
    loginButton:{
      width:"100%",
    }

})