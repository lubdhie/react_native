// screens/Events.js
import React, { useContext } from "react";
import { View, Text, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import EventsData from "../events.json";
import { FavouritesContext } from "../context/FavouritesContext";
import { AntDesign } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function Events() {
  const { favourites, addFavourite, removeFavourite } = useContext(FavouritesContext);

  const isFavourite = (id) => favourites.some((f) => f.id === id);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {EventsData.map((event) => (
        <View key={event.id} style={styles.card}>
          <Image source={{ uri: event.image }} style={styles.image} resizeMode="cover" />

          <View style={styles.details}>
            <Text style={styles.title}>{event.title}</Text>
            <Text style={styles.desc} numberOfLines={2}>{event.description}</Text>
            <Text style={styles.location}>{event.location}</Text>
            <Text style={styles.date}>{new Date(event.date).toDateString()}</Text>

            <View style={styles.row}>
              <Text style={styles.price}>Price: {event.ticket_price}</Text>

              <TouchableOpacity
                onPress={() =>
                  isFavourite(event.id) ? removeFavourite(event.id) : addFavourite(event)
                }
                style={styles.heart}
              >
                <AntDesign
                  name={isFavourite(event.id) ? "heart" : "heart"}
                  size={22}
                  color={isFavourite(event.id) ? "red" : "#666"}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

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
    width: "36%",
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
