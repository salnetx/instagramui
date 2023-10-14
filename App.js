
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { View } from 'react-native';
import React, { useState, useEffect } from 'react';


import CustomHeader from './components/CustomHeader';
import Nav from './components/Nav';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import Notifications from './screens/Notifications';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
              options={{
                tabBarLabel: 'Home',
                header: (props) => <CustomHeader {...props} />,
                }}
       name="HomeScreen" component={HomeScreen} />

    </Stack.Navigator>
  );
}


function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      options={{ 
        headerShown: true,
        header: (props) => <Nav {...props} />,
        }}
        name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function NotificationsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false}} name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
}



export default function App() {

  return (
    <NavigationContainer>
    
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: '#16161d',
        tabBarStyle: {
          paddingTop: 10, 
        },
      }}
      
    >

      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home-filled" color={color} size={26} />
          ),
          headerShown:false
        }}
      />

      <Tab.Screen
        name="NotificationsStack"
        component={NotificationsStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={26} />
          ),
          headerShown:false
        }}
      />

      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="face" color={color} size={26} />
          ),
          headerShown:false
        }}
      />

    </Tab.Navigator>
  </NavigationContainer>
  );
}

