import React, { useContext } from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { UserProvider, UserContext } from "./context/UserContext";
import { FavouritesProvider } from "./context/FavouritesContext";

import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import ProfileScreen from "./screens/Profile";
import EditProfileScreen from "./screens/EditProfile";
import Events from "./screens/Events";
import Favourites from "./screens/Favourites";

const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function AuthStackScreen() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Home" component={Home} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Signup" component={Signup} />
    </AuthStack.Navigator>
  );
}


function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconPath;
          if (route.name === "Home") iconPath = require("./assets/home.png");
          else if (route.name === "Profile") iconPath = require("./assets/user.png");
          else if (route.name === "Events") iconPath = require("./assets/wishlist.png");
          else if (route.name === "Favourites") iconPath = require("./assets/wishlist.png");

          return <Image source={iconPath} style={{ width: size, height: size, tintColor: color }} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="Favourites" component={Favourites} />
      <Tab.Screen name="EditProfile" component={EditProfileScreen} />
    </Tab.Navigator>
  );
}

function RootNavigator() {
  const { user } = useContext(UserContext);
  return (
    <NavigationContainer>
      {user && user.name ? <MainTabs /> : <AuthStackScreen />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <UserProvider>
      <FavouritesProvider>
        <RootNavigator />
      </FavouritesProvider>
    </UserProvider>
  );
}
