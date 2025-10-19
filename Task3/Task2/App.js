
import React, { useContext } from 'react';
import { View, Text, Image,Button } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { UserProvider, UserContext ,useEffect} from './context/UserContext';

import Login from './screens/Login';
import Signup from './screens/Signup';
import ProfileScreen from './screens/Profile';
import EditProfileScreen from './screens/EditProfile';
import bottom from './component/bottom';
import Home from './screens/Home';

const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Authentication stack (Login + Signup)
function AuthStackScreen() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Signup" component={Signup} />
    </AuthStack.Navigator>
  );
}

// Main bottom tabs
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconPath;

          if (route.name === "Home") {
            iconPath = require("./assets/home.png");
          } else if (route.name === "Profile") {
            iconPath = require("./assets/user.png");
          } else if (route.name === "EditProfile") {
            iconPath = require("./assets/wishlist.png");
          } else if (route.name === "Signup") {
            iconPath = require("./assets/user.png");
          }

          return (
            <Image
              source={iconPath}
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          );
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Signup" component={Signup} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{ title: "Edit Profile" }}
      />
    </Tab.Navigator>
  );
}

// Root navigator switches between Auth and Tabs
function RootNavigator() {
  const { user } = useContext(UserContext);

  return (
    <NavigationContainer>
      {user ? <MainTabs /> : <AuthStackScreen />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <UserProvider>
      <RootNavigator />
    </UserProvider>
  );
}
