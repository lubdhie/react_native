
import React from 'react';
import { View, Text, Button,Image,StyleSheet} from 'react-native';
import { UserContext } from '../context/UserContext';
import { useEffect, useState, useContext } from "react";


export default function ProfileScreen({ navigation }) {
  const {user} = useContext(UserContext);
  return (
  
    <View style={styles.container}>
    {user.photo ? (
    <Image source={{ uri: user.photo }} style={styles.avatar} />
    ) : (
    <View style={[styles.avatar, styles.placeholder]}>
    <Text style={{ textAlign: 'center' }}>No Image</Text>
    </View>
    )}
    
    
    <Text style={styles.name}>{user.name || 'Guest'}</Text>
    <Text style={styles.email}>{user.email || 'No email set'}</Text>
    
    
    <View style={{ height: 16 }} />
    <Button title="Edit Profile" onPress={() => navigation.navigate('EditProfile')} />
    
    
    <View style={{ height: 8 }} />
    <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
    
    
    <View style={{ marginTop: 20 }}>
    <Text style={{ fontWeight: '600' }}>Favorite Movies</Text>
    {user.favorites && user.favorites.length > 0 ? (
    user.favorites.map((m, i) => (
    <Text key={i}>• {m}</Text>
    ))
    ) : (
    <Text style={styles.email}>{user.favorites || 'No fav movies set '}</Text>
    )}
    </View>
    </View>
    );
    }
    
    
    const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', padding: 20 },
    avatar: { width: 140, height: 140, borderRadius: 70, marginTop: 20 },
    placeholder: { alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0' },
    name: { fontSize: 22, fontWeight: '700', marginTop: 12 },
    email: { color: '#666', marginTop: 6 },
    });
    