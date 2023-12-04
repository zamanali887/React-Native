import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Frontend/Home';
import About from '../screens/Frontend/About';
import Contact from '../screens/Frontend/Contact';
import Footer from '../components/Footer';
import { Button, Image } from 'react-native';

const Stack = createNativeStackNavigator();

const Logo = () => (
  <Image source={require('../assets/images/Navy.png')} style={{ width: 50, height: 30 }} />
);

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerTitleAlign:"center"
      }}
      >
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerTitle: () => <Logo />,
            // headerRight: () => (
            //   <Button
            //     title='info'
            //     onPress={() => alert('I am a Button')}
            //   />
            // ),
          }}
        />
        <Stack.Screen
          name='About'
          component={About}
          options={{
            headerTitle:()=> <Logo />,
          }}
        />
        <Stack.Screen name='Contact' component={Contact} />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}
