// import React, { useState } from "react";
// import { View, Text, TextInput, Button, StyleSheet } from "react-native";
// // import { db } from "../firebaseConfig";
// // import { doc, getDoc, setDoc } from "firebase/firestore";

// export default function SignupScreen({ navigation }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

//   const handleSignup = async () => {
//     if (!validateEmail(email)) {
//       setError("Invalid email format");
//       return;
//     }
//     if (password.length < 6) {
//       setError("Password must be at least 6 characters");
//       return;
//     }

//     try {
//       const userRef = doc(db, "users", email);
//       const userSnap = await getDoc(userRef);

//       if (userSnap.exists()) {
//         setError("User already exists");
//       } else {
//         await setDoc(userRef, { email, password });
//         navigation.replace("Home");
//       }
//     } catch (e) {
//       setError("Error signing up: " + e.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Signup</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={(t) => setEmail(t)}
//         keyboardType="email-address"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={(t) => setPassword(t)}
//         secureTextEntry
//       />
//       {error ? <Text style={styles.error}>{error}</Text> : null}
//       <Button title="Signup" onPress={handleSignup} />
//       <Button
//         title="Already have an account? Login"
//         onPress={() => navigation.navigate("Login")}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", padding: 20 },
//   input: { borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 5 },
//   error: { color: "red", marginBottom: 10 },
//   title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
// });

import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
//import { auth } from "../../../firebaseConfig";
//import { createUserWithEmailAndPassword } from "firebase/auth";


// Example signup function:
const handleSignup = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("User created");
  } catch (error) {
    console.error("Signup error:", error);
  }
};


export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.navigate("Home");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Sign Up</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Already have an account?{" "}
          <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f4f7",
    padding: 20,
  },
  card: {
    width: "100%",
    maxWidth: 350,
    backgroundColor: "white",
    padding: 25,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  input: {
    height: 45,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#fafafa",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  footerText: {
    textAlign: "center",
    fontSize: 14,
    color: "#555",
  },
  link: {
    color: "#007bff",
    fontWeight: "600",
  },
});