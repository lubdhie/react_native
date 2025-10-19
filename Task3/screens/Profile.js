import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { UserContext } from "../context/UserContext";

export default function Profile({ navigation }) {
  const { user } = useContext(UserContext);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Profile</Text>

      <View style={styles.avatarBox}>
        {user.photo ? (
          <Image source={{ uri: user.photo }} style={styles.avatar} />
        ) : (
          <View style={[styles.avatar, styles.placeholder]}>
            <Text style={{ color: "#666" }}>No Image</Text>
          </View>
        )}
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{user.name || "Guest"}</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{user.email || "No email set"}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Favorite Movies</Text>
        {user.favorites && user.favorites.length > 0 ? (
          user.favorites.map((m, i) => (
            <Text key={i} style={styles.favoriteItem}>
              • {m}
            </Text>
          ))
        ) : (
          <Text style={styles.emptyFav}>No favorite movies set</Text>
        )}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("EditProfile")}
      >
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Go Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f9f9f9" },
  header: { fontSize: 22, fontWeight: "700", marginBottom: 16 },
  avatarBox: { alignItems: "center", marginBottom: 20 },
  avatar: { width: 120, height: 120, borderRadius: 60 },
  placeholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
    marginBottom: 16,
  },
  cardTitle: { fontWeight: "600", fontSize: 16, marginBottom: 8 },
  label: { fontSize: 14, fontWeight: "600", marginTop: 8, color: "#333" },
  value: { fontSize: 14, marginTop: 4, color: "#555" },
  favoriteItem: { fontSize: 14, marginVertical: 2, color: "#444" },
  emptyFav: { color: "#aaa", fontStyle: "italic", marginTop: 4 },
  button: {
    backgroundColor: "#007AFF",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  secondaryButton: { backgroundColor: "#555" },
  buttonText: { color: "#fff", fontWeight: "600" },
});

