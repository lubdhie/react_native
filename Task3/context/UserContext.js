

import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Always start fresh (disable auto-login)
  useEffect(() => {
    const resetUser = async () => {
      await AsyncStorage.removeItem("user");
      setUser(null);
      setLoading(false);
    };
    resetUser();
  }, []);

  // ✅ SIGNUP FUNCTION
  const signup = async (name, email, password) => {
    try {
      const newUser = { name, email, password };
      setUser(newUser);
      await AsyncStorage.setItem("user", JSON.stringify(newUser));
      return true;
    } catch (e) {
      console.log("Signup error:", e);
      return false;
    }
  };

  // ✅ LOGIN FUNCTION
  const login = async (email, password) => {
    try {
      const storedUser = await AsyncStorage.getItem("user");
      if (!storedUser) return false;

      const userData = JSON.parse(storedUser);
      if (userData.email === email && userData.password === password) {
        setUser(userData);
        return true;
      }
      return false;
    } catch (e) {
      console.log("Login error:", e);
      return false;
    }
  };

  // ✅ LOGOUT FUNCTION
  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem("user");
  };

  // ✅ CONTEXT PROVIDER
  return (
    <UserContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};



// import React, { createContext, useState, useEffect } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true); // loading state on app start

//   // Check if user is already logged in (persistent login)
//   useEffect(() => {
//     const loadUser = async () => {
//       try {
//         const storedUser = await AsyncStorage.getItem("user");
//         if (storedUser) setUser(JSON.parse(storedUser));
//       } catch (e) {
//         console.log("Failed to load user:", e);
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadUser();
//   }, []);

//   const login = async (email, password) => {
//     // Example login validation
//     if (email === "test@example.com" && password === "123456") {
//       const loggedUser = { name: "Alex", email };
//       setUser(loggedUser);
//       await AsyncStorage.setItem("user", JSON.stringify(loggedUser)); // persist login
//       return true;
//     }
//     return false;
//   };

//   const signup = async (name, email, password) => {
//     const newUser = { name, email };
//     setUser(newUser);
//     await AsyncStorage.setItem("user", JSON.stringify(newUser)); // persist login
//   };

//   const logout = async () => {
//     setUser(null);
//     await AsyncStorage.removeItem("user");
//   };

//   return (
//     <UserContext.Provider value={{ user, login, signup, logout, loading }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
