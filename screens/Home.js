import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Login from "./Login";
import Signup from "./Signup";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the App</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center" },
  header: { 
    fontSize: 26, 
    fontWeight: "700",
     marginBottom: 30 },
  button: {
    backgroundColor: "#007AFF",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    width: 200,
    marginBottom: 12,
  },
  secondaryButton: {
     backgroundColor: "#34C759" 
    },
  buttonText: { 
    color: "#fff", 
    fontWeight: "600", 
    fontSize: 15 
  },
});