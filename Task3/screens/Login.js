// import React, { useState, useContext } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import { UserContext } from '../context/UserContext';

// export default function Login({ navigation }) {
//   const { login } = useContext(UserContext);

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     if (!email || !password) {
//       Alert.alert('Error', 'Please enter both email and password');
//       return;
//     }

//     const success = login(email, password);
//     if (!success) {
//       Alert.alert('Error', 'Invalid credentials');
//     }

//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <TextInput placeholder="Email" style={styles.input} onChangeText={setEmail} />
//       <TextInput placeholder="Password" secureTextEntry style={styles.input} onChangeText={setPassword} />
//       <Button title="Login" onPress={handleLogin} />
//       <View style={{ marginTop: 10 }}>
//         <Button title="Don't have an account? Signup" onPress={() => navigation.navigate('Signup')} />
  

//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, justifyContent: 'center' },
//   title: { fontSize: 28, marginBottom: 20, textAlign: 'center' },
//   input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 },
// });


import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { UserContext } from "../context/UserContext";

export default function Login({ navigation }) {
  const { login } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password");
      return;
    }

    const success = await Login(email, password);
    if (!success) {
      Alert.alert("Error", "Invalid credentials");
    }
    // Navigation is automatic now since user context updates
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder="Email" style={styles.input} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <View style={{ marginTop: 10 }}>
        <Button
          title="Don't have an account? Signup"
          onPress={() => navigation.navigate("Signup")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 28, marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 },
});
