import React, { useState, useContext ,useEffect} from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert,Image } from 'react-native';
import { UserContext } from '../context/UserContext';
import * as ImagePicker from 'expo-image-picker';

export default function Signup({ navigation }) {
   const { user, updateUser } = useContext(UserContext);
  
    const [name, setName] = useState(user.name || '');
    const [email, setEmail] = useState(user.email || '');
    const [photo, setPhoto] = useState(user.photo || null);
  
    useEffect(() => {
      (async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission required', 'Permission to access media library is required!');
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
          // Expo SDK 48+ uses result.assets[0].uri
          const uri = result.assets ? result.assets[0].uri : result.uri;
          setPhoto(uri);
        }
      } catch (e) {
        console.log('ImagePicker error', e);
      }
    };
  
    const handleSave = () => {
      if (!name.trim() || !email.trim()) {
        Alert.alert('Validation', 'Please enter name and email.');
        return;
      }
      updateUser({ name: name.trim(), email: email.trim(), photo });
      navigation.navigate('Profile'); // Ensure this matches your navigator's route name
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Profile Picture</Text>
        {photo ? (
          <Image source={{ uri: photo }} style={styles.avatar} />
        ) : (
          <View style={[styles.avatar, styles.placeholder]}>
            <Text>No Image</Text>
          </View>
        )}
        <Button title="Pick Image" onPress={pickImage} />
  
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Your name"
        />
  
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="you@example.com"
          keyboardType="email-address"
        />
  
        <View style={{ height: 12 }} />
        <Button title="Save & Go to Profile" onPress={handleSave} />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    label: { marginTop: 12, marginBottom: 6 },
    input: { borderWidth: 1, borderColor: '#ddd', padding: 10, borderRadius: 6 },
    avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 8 },
    placeholder: { alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee' },
  });
  