import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home Screen!</Text>
    <Button title="Signup / Update Profile" onPress={() => navigation.navigate('Signup')} />
    <View style={{ height: 10 }} />
    <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
    );
    }
    
    
    const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
    title: { fontSize: 24, marginBottom: 20 },
    });
    
    const SCREENS={
        HOME : 'HOME',
        PROFILE :'PROFILE',
        SIGNUP : 'SIGNUP',
        EDIT : 'EDIT',
    };
    
    // export default SCREENS;
