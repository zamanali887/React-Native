import React from 'react';
import { Button, Image } from 'react-native';
import Home from '../screens/Frontend/Home';
import About from '../screens/Frontend/About';
import Contact from '../screens/Frontend/Contact';
// import Footer from '../components/Footer';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';


import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Login from '../screens/Auth/Login';


import { useAuthcontexts } from '../contexts/AuthContext';

const Logo = () => (
  <Image source={'../assets/images/Navy.png'} style={{ width: 50, height: 30 }} />
);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();


// const MyDrawer = () => {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Feed" component={Feed} />
//       <Drawer.Screen name="Article" component={Article} />
//     </Drawer.Navigator>
//   );
// }



const TabNavigation = () => {
  return (
    <Tab.Navigator
    screenOptions={{headerShown:false}}
    >
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="About" component={About}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icons name="bell" color={color} size={size} />
          ),
          tabBarBadge: 3
        }}
      />
      <Tab.Screen name="Contact" component={Contact}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="contacts" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default function AppNavigator() {

  const {isAuthenticated , setIsAuthenticated} = useAuthcontexts()
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center"
        }}
      >
        {
          isAuthenticated ?
            <Stack.Group>
              <Stack.Screen name='Hero' component={TabNavigation}
                options={{
                  headerTitle: () => <Logo />,
                  headerRight: () => (
                    <Button
                      title='LogOut'
                      color="#E63946"
                      onPress={() => setIsAuthenticated(false)}
                    />
                  ),
                }}
              />
              <Stack.Screen name='About' component={About}
                options={{
                  headerTitle: () => <Logo />,
                }}
              />
              <Stack.Screen name='Contact' component={Contact} />
            </Stack.Group>
            :
            <Stack.Group 
            screenOptions={{headerShown:false}}
            >
              <Stack.Screen name='Login' component={Login} />
            </Stack.Group>
        }
      </Stack.Navigator>
      {/* <TabNavigation/> */}
      {/* <Footer /> */}
    </NavigationContainer>
  );
}
