import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Welcome to Home Screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center ",outerHeight: 20 ,outerWidth:80 , border:2 },
  text: { fontSize: 22, fontWeight: "bold" },
});
