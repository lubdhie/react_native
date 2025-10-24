
import React, { useState, useContext, useEffect } from "react";
import { View,Text,TextInput,Button,StyleSheet,Alert,Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { UserContext } from "../context/UserContext";

export default function Signup({ navigation }) {
  const { signup } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission required", "Media access is required!");
      }
    })();
  }, []);

  const pickImage = async () => {
    try {
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
    } catch (e) {
      console.log("ImagePicker error", e);
    }
  };

 const handleSignup = async () => {
  if (!name || !email || !password || !phone) {
    Alert.alert("Error", "Please fill all fields");
    return;
  }
const success = await signup(name, email, password);
  if (success) {
    Alert.alert("Success", "Account created! Please log in.");
    navigation.navigate("Login"); // ✅ goes to login after signup
  }
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>

      <View style={{ alignItems: "center" }}>
        {photo ? (
          <Image source={{ uri: photo }} style={styles.avatar} />
        ) : (
          <View style={[styles.avatar, styles.placeholder]}>
            <Text>No Image</Text>
          </View>
        )}
        <Button title="Pick Image" onPress={pickImage} />
      </View>

      <TextInput
        placeholder="Full Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        placeholder="Phone Number"
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <Button title="Create Account" onPress={handleSignup} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 28, marginBottom: 20, textAlign: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 6,
    marginBottom: 10,
  },
  avatar: { width: 120, height: 120, borderRadius: 60, marginVertical: 10 },
  placeholder: { alignItems: "center", justifyContent: "center", backgroundColor: "#eee" },
});

