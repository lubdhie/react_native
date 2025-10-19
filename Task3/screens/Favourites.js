
import React, { useContext } from "react";
import { View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { FavouritesContext } from "../context/FavouritesContext";
import { AntDesign } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const Favourites = () => {
  const { favourites, removeFavourite } = useContext(FavouritesContext);

  if (favourites.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No favourite events </Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />

      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc} numberOfLines={2}>{item.description}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <Text style={styles.date}>{new Date(item.date).toDateString()}</Text>

        <View style={styles.row}>
          <Text style={styles.price}>Price: {item.ticket_price}</Text>

          <TouchableOpacity
            onPress={() => removeFavourite(item.id)}
            style={styles.heart}
          >
            <AntDesign name="heart" size={22} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={favourites}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
};

export default Favourites;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    paddingBottom: 60,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    width: width * 0.92,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    overflow: "hidden",
  },
  image: {
    // width: "36%",
    width: width *0.36,
    height: 120,
    backgroundColor: "#a59b9b",
  },
  details: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
  },
  desc: {
    fontSize: 13,
    color: "#333",
  },
  location: {
    fontSize: 13,
    color: "#a40000",
    fontWeight: "600",
  },
  date: {
    fontSize: 12,
    color: "#444",
    fontWeight: "600",
  },
  price: {
    fontWeight: "700",
    color: "#222",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
  },
  heart: {
    padding: 6,
  },
});
