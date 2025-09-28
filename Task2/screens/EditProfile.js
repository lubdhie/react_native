import React from 'react';
import { View, Text, Button } from 'react-native';
import { UserContext } from "../context/UserContext";
import { useEffect, useState, useContext } from "react";
import * as ImagePicker from "expo-image-picker";


export default function EditProfileScreen({ navigation }) {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Edit Profile Screen</Text>
      <Button title="Save" onPress={() => navigation.goBack()} />
    </View>
  );
}