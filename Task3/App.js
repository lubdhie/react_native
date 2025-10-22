
// import React, { useContext } from "react";
// import { Image } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import { UserProvider, UserContext } from "./context/UserContext";
// import { FavouritesProvider } from "./context/FavouritesContext";

// import Home from "./screens/Home";
// import Login from "./screens/Login";
// import Signup from "./screens/Signup";
// import Profile from "./screens/Profile";
// import EditProfile from "./screens/EditProfile";
// import Events from "./screens/Events";
// import Favourites from "./screens/Favourites";

// const AuthStack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// // function AuthStackScreen() {
// //   return (
// //     <AuthStack.Navigator screenOptions={{ headerShown: false }}>
// //       <AuthStack.Screen name="Home" component={Home} />
// //       <AuthStack.Screen name="Login" component={Login} />
// //       <AuthStack.Screen name="Signup" component={Signup} />
// //     </AuthStack.Navigator>
// //   );
// // }

// // ---- Main Tabs for logged-in users ----
// function MainTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarIcon: ({ color, size }) => {
//           let iconPath;
//           if (route.name === "Home") iconPath = require("./assets/home.png");
//           else if (route.name === "Profile") iconPath = require("./assets/user.png");
//           else if (route.name === "Events") iconPath = require("./assets/wishlist.png");
//           else if (route.name === "Favourites") iconPath = require("./assets/wishlist.png");
//           else if (route.name === "EditProfile") iconPath = require("./assets/wishlist.png");

//           return <Image source={iconPath} style={{ width: size, height: size, tintColor: color }} />;
//         },
//       })}
//     >
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Profile" component={Profile} />
//       <Tab.Screen name="Events" component={Events} />
//       <Tab.Screen name="Favourites" component={Favourites} />
//       <Tab.Screen name="EditProfile" component={EditProfile} />
//     </Tab.Navigator>
//   );
// }


// // function RootNavigator() {
// //   const { user } = useContext(UserContext);
// //   return (
// //     <NavigationContainer>
// //       {user && user.name ? <MainTabs /> : <AuthStackScreen />}
// //     </NavigationContainer>
// //   );
// // }

// export default function App() {
//   return (
//     <UserProvider>
//       <FavouritesProvider>
//         {/* <RootNavigator /> */}
//       </FavouritesProvider>
//     </UserProvider>
//   );
// }


// import React from "react";
// import { Image } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import { UserProvider } from "./context/UserContext";
// import { FavouritesProvider } from "./context/FavouritesContext";

// import Home from "./screens/Home";
// import Login from "./screens/Login";
// import Signup from "./screens/Signup";
// import Events from "./screens/Events";
// import Profile from "./screens/Profile";
// import EditProfile from "./screens/EditProfile";
// import Favourites from "./screens/Favourites";

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// function MainTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarIcon: ({ color, size }) => {
//           let iconPath;
//           if (route.name === "Home") iconPath = require("./assets/home.png");
//           else if (route.name === "Profile") iconPath = require("./assets/user.png");
//           else if (route.name === "Events") iconPath = require("./assets/wishlist.png");
//           else if (route.name === "Favourites") iconPath = require("./assets/wishlist.png");
//           else if (route.name === "EditProfile") iconPath = require("./assets/wishlist.png");

//           return <Image source={iconPath} style={{ width: size, height: size, tintColor: color }} />;
//         },
//       })}
//     >
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Profile" component={Profile} />
//       <Tab.Screen name="Events" component={Events} />
//       <Tab.Screen name="Favourites" component={Favourites} />
//       <Tab.Screen name="EditProfile" component={EditProfile} />
//     </Tab.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <UserProvider>
//       <FavouritesProvider>
//         <NavigationContainer>
//           <Stack.Navigator screenOptions={{ headerShown: false }}>
//             <Stack.Screen name="Home" component={Home} />
//             <Stack.Screen name="Login" component={Login} />
//             <Stack.Screen name="Signup" component={Signup} />
//             <Stack.Screen name="Events" component={Events} />
//             <Stack.Screen name="Profile" component={Profile} />
//             <Stack.Screen name="EditProfile" component={EditProfile} />
//             <Stack.Screen name="Favourites" component={Favourites} />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </FavouritesProvider>
//     </UserProvider>
//   );
// }


// import React, { useContext } from "react";
// import { Image } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import { UserProvider, UserContext } from "./context/UserContext";
// import { FavouritesProvider } from "./context/FavouritesContext";

// import Home from "./screens/Home";
// import Login from "./screens/Login";
// import Signup from "./screens/Signup";
// import Events from "./screens/Events";
// import Profile from "./screens/Profile";
// import EditProfile from "./screens/EditProfile";
// import Favourites from "./screens/Favourites";

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();


// // ---------- Bottom Tabs for logged-in users ----------
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
//     </Tab.Navigator>
//   );
// }


// // ---------- Authentication flow ----------
// function AuthStack() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Login" component={Login} />
//       <Stack.Screen name="Signup" component={Signup} />
//     </Stack.Navigator>
//   );
// }


// // ---------- Root Navigator decides what to show ----------
// function RootNavigator() {
//   const { user } = useContext(UserContext);
//   return (
//     <NavigationContainer>
//       {user && user.name ? <MainTabs /> : <AuthStack />}
//     </NavigationContainer>
//   );
// }


// // ---------- App Root ----------
// export default function App() {
//   return (
//     <UserProvider>
//       <FavouritesProvider>
//         <RootNavigator />
//       </FavouritesProvider>
//     </UserProvider>
//   );
// }


// import React, { useContext } from "react";
// import { Text,Image, ActivityIndicator, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import { UserContext ,UserProvider } from "./context/UserContext";
// import { FavouritesProvider } from "./context/FavouritesContext";


// import Home from "./screens/Home";
// import Login from "./screens/Login";
// import Signup from "./screens/Signup";
// import Events from "./screens/Events";
// //import Profile from "./screens/Profile";
// import EditProfile from "./screens/EditProfile";
// import Favourites from "./screens/Favourites";

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// // ---------- Bottom Tabs for logged-in users ----------
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
//     </Tab.Navigator>
//   );
// }

// // ---------- Authentication flow ----------
// // function AuthStack() {
// //     return (
// //     <Stack.Navigator>
// //       {user ? (
// //         <Stack.Screen name="Home" component={Home} />
// //       ) : (
// //         <>
// //           <Stack.Screen name="Home" component={Home} />
// //           <Stack.Screen name="Login" component={Login} />
// //           <Stack.Screen name="Signup" component={Signup} />
// //         </>
// //       )}
// //     </Stack.Navigator>
// //   );
//   // return (
//   //   <Stack.Navigator screenOptions={{ headerShown: false }}>
//   //     <Stack.Screen name="Home" component={Home} />
//   //     <Stack.Screen name="Login" component={Login} />
//   //     <Stack.Screen name="Signup" component={Signup} />
//   //   </Stack.Navigator>
//   // );
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

// //   return (
// //     <NavigationContainer>
// //       {user ? <MainTabs /> : <AuthStack />}
// //     </NavigationContainer>
// //   );
// // }



 
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator screenOptions={{ headerShown: false }}>
// //         <Stack.Screen name="Home" component={Home} />
// //         {!user || !user.name ? (
// //           <>
// //             <Stack.Screen name="Login" component={Login} />
// //             <Stack.Screen name="Signup" component={Signup} />
// //           </>
// //         ) : (
// //           <Stack.Screen name="MainTabs" component={MainTabs} />
// //         )}
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // }



// // // ---------- App Root ----------
// // export default function App() {
// //   return (
// //     <UserProvider>
// //       <FavouritesProvider>
// //        {/* < NavigationContainer> */}
// //         <RootNavigator />
// //         <NavigationContainer/>
// //       </FavouritesProvider>
// //     </UserProvider>
// //   );
// // }

// export default function App() {
//   return (
//     <UserProvider>
//       <FavoritesProvider>
//         <NavigationContainer>
//           <Stack.Navigator initialRouteName="Signup">
//             <Stack.Screen name="Signup" component={Signup} />
//             <Stack.Screen name="Login" component={Login} />
//             <Stack.Screen name="HomeTabs" component={Home} options={{headerShown: false}} />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </FavoritesProvider>
//     </UserProvider>
//   );
// }

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
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user ? (
          <>
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Login" component={Login} />
          </>
        ) : (
          <Stack.Screen name="MainTabs" component={MainTabs} />
        )}
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
