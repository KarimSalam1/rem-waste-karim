import { useState, useEffect } from "react";

const FAVORITES_STORAGE_KEY = "skipFavorites";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(
      sessionStorage.getItem(FAVORITES_STORAGE_KEY) || "[]"
    );
    setFavorites(stored);
  }, []);

  useEffect(() => {
    sessionStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (skipId) => {
    setFavorites((prev) =>
      prev.includes(skipId)
        ? prev.filter((id) => id !== skipId)
        : [...prev, skipId]
    );
  };

  return {
    favorites,
    toggleFavorite,
  };
};
