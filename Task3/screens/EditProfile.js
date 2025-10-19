import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Alert,
  FlatList,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { UserContext } from "../context/UserContext";

export default function EditProfile({ navigation }) {
  const { user, updateUser } = useContext(UserContext);

  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [photo, setPhoto] = useState(user.photo || null);
  const [favorites, setFavorites] = useState(user.favorites || []);
  const [newMovie, setNewMovie] = useState(""); // input for adding

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.6,
    });

    if (!result.canceled) {
      const uri = result.assets ? result.assets[0].uri : result.uri;
      setPhoto(uri);
    }
  };

  const removeFavorite = (index) => {
    const newFavs = [...favorites];
    newFavs.splice(index, 1);
    setFavorites(newFavs);
  };

  const handleSave = () => {
    if (!name.trim() || !email.trim()) {
      Alert.alert("Validation", "Please enter name and email");
      return;
    }
    updateUser({ name: name.trim(), email: email.trim(), photo, favorites });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Profile</Text>

      {photo ? (
        <Image source={{ uri: photo }} style={styles.avatar} />
      ) : (
        <View style={[styles.avatar, styles.placeholder]}>
          <Text>No Image</Text>
        </View>
      )}
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Change Photo</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Favorite Movies Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Favorite Movies</Text>

        {favorites.length > 0 ? (
          <FlatList
            data={favorites}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={styles.favoriteItem}>
                <Text style={{ flex: 1 }}>• {item}</Text>
                <TouchableOpacity onPress={() => removeFavorite(index)}>
                  <Text style={styles.removeText}>Remove</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        ) : (
          <Text>No favorites yet</Text>
        )}

        {/* Inline Input for Adding */}
        <View style={styles.addBox}>
          <TextInput
            style={styles.addInput}
            placeholder="Enter movie name"
            value={newMovie}
            onChangeText={setNewMovie}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              if (newMovie.trim()) {
                setFavorites([...favorites, newMovie.trim()]);
                setNewMovie(""); // clear after add
              }
            }}
          >
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={[styles.button, { marginTop: 20 }]} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f9f9f9" },
  header: { fontSize: 22, fontWeight: "700", marginBottom: 16 },
  label: { marginTop: 12, marginBottom: 6, fontWeight: "500" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
    alignSelf: "center",
  },
  placeholder: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: { color: "#fff", fontWeight: "600" },
  card: {
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardTitle: { fontWeight: "600", fontSize: 16, marginBottom: 8 },
  favoriteItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  removeText: { color: "red", marginLeft: 6 },
  addBox: {
    flexDirection: "row",
    marginTop: 12,
    alignItems: "center",
  },
  addInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginRight: 8,
  },
  addButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
