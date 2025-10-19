import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "./UserContext";

export const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [favourites, setFavourites] = useState([]);

  // Load favourites from storage when user logs in
  useEffect(() => {
    const loadFavourites = async () => {
      if (!user?.email) return;
      try {
        const data = await AsyncStorage.getItem(`@favourites_${user.email}`);
        if (data) {
          setFavourites(JSON.parse(data));
        } else {
          setFavourites([]);
        }
      } catch (err) {
        console.log("Error loading favourites:", err);
      }
    };
    loadFavourites();
  }, [user]);

  // Save favourites when they change
  useEffect(() => {
    const saveFavourites = async () => {
      if (!user?.email) return;
      try {
        await AsyncStorage.setItem(
          `@favourites_${user.email}`,
          JSON.stringify(favourites)
        );
      } catch (err) {
        console.log("Error saving favourites:", err);
      }
    };
    saveFavourites();
  }, [favourites, user]);

  const addFavourite = (event) => {
    setFavourites((prev) => {
      if (prev.find((f) => f.id === event.id)) return prev;
      return [...prev, event];
    });
  };

  const removeFavourite = (id) => {
    setFavourites((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, addFavourite, removeFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
