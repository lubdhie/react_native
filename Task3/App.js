import React, { useContext } from "react";
import { Text, Image, ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { UserContext, UserProvider } from "./context/UserContext";
import { FavouritesProvider } from "./context/FavouritesContext";

//import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Events from "./screens/Events";
import EditProfile from "./screens/EditProfile";
import Favourites from "./screens/Favourites";
//import ChatBot from "./screens/ChatBot";
import ChatBot from "./screens/ChatBot";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// ---------- Bottom Tabs ----------
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ color, size }) => {
          let iconPath;
          if (route.name === "Events") iconPath = require("./assets/home.png");
          else if (route.name === "EditProfile") iconPath = require("./assets/user.png");
          else if (route.name === "Favourites") iconPath = require("./assets/wishlist.png");
         else if (route.name === "ChatBot") iconPath = require("./assets/user.png");
         if (!iconPath) return null;


          return (
            <Image
              source={iconPath}
              style={{ width: size, height: size, tintColor: color }}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="Favourites" component={Favourites} />
      <Tab.Screen name="EditProfile" component={EditProfile} />
      <Tab.Screen name="ChatBot" component={ChatBot}/>
    </Tab.Navigator>
  );
}

// ---------- Root Navigator ----------
function RootNavigator() {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user ? (
          <>
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Login" component={Login} />
          </>
        ) : (
          <Stack.Screen name="MainTabs" component={MainTabs} />
        )}
      </Stack.Navigator> */}
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
  <Stack.Screen name="Login" component={Login} />
  <Stack.Screen name="Signup" component={Signup} />
  <Stack.Screen name="MainTabs" component={MainTabs} />
</Stack.Navigator>

    </NavigationContainer>
  );
}

// ---------- App Root ----------
export default function App() {
  return (
   <SafeAreaProvider>
    <UserProvider>
      <FavouritesProvider>
                <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
          <RootNavigator />
        </SafeAreaView>
      </FavouritesProvider>
    </UserProvider>
    </SafeAreaProvider>
  );
}


// import React, { useContext } from "react";
// import { Text, Image, ActivityIndicator, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { SafeAreaProvider } from "react-native-safe-area-context";

// import { UserContext, UserProvider } from "./context/UserContext";
// import { FavouritesProvider } from "./context/FavouritesContext";

// //import Home from "./screens/Home";
// import Login from "./screens/Login";
// import Signup from "./screens/Signup";
// import Events from "./screens/Events";
// import EditProfile from "./screens/EditProfile";
// import Favourites from "./screens/Favourites";
// import ChatBot from "./screens/ChatBot";

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// // ---------- Bottom Tabs ----------
// function MainTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarActiveTintColor: "#007AFF",
//         tabBarInactiveTintColor: "gray",
//         tabBarIcon: ({ color, size }) => {
//           let iconPath;
//           if (route.name === "Events") iconPath = require("./assets/home.png");
//           else if (route.name === "EditProfile") iconPath = require("./assets/user.png");
//           else if (route.name === "Favourites") iconPath = require("./assets/wishlist.png");
//          else if (route.name === "ChatBot") iconPath = require("./assets/user.png");
//          if (!iconPath) return null;


//           return (
//             <Image
//               source={iconPath}
//               style={{ width: size, height: size, tintColor: color }}
//             />
//           );
//         },
//       })}
//     >
//       <Tab.Screen name="Events" component={Events} />
//       <Tab.Screen name="Favourites" component={Favourites} />
//       <Tab.Screen name="EditProfile" component={EditProfile} />
//       <Tab.Screen name="ChatBot" component={ChatBot}/>
//     </Tab.Navigator>
//   );
// }

// // ---------- Root Navigator ----------
// function RootNavigator() {
//   const { user, loading } = useContext(UserContext);

//   if (loading) {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size="large" color="#007AFF" />
//       </View>
//     );
//   }

//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         {!user ? (
//           <>
//             <Stack.Screen name="Signup" component={Signup} />
//             <Stack.Screen name="Login" component={Login} />
//           </>
//         ) : (
//           <Stack.Screen name="MainTabs" component={MainTabs} />
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// // ---------- App Root ----------
// export default function App() {
//   return (
//    <SafeAreaProvider>
//     <UserProvider>
//       <FavouritesProvider>
//                 <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
//           <RootNavigator />
//         </SafeAreaView>
//       </FavouritesProvider>
//     </UserProvider>
//     </SafeAreaProvider>
//   );
// }
