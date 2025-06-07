import { useState, useEffect } from "react";
import { skipService } from "../api/api";
import { filterSkips } from "../utils/skipUtils";

export const useSkips = (initialFilters = {}) => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    roadAllowed: "all",
    heavyWaste: "all",
    priceRange: [200, 1200],
    sizeRange: [4, 40],
    ...initialFilters,
  });

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        setLoading(true);
        setError(null);

        const [data] = await Promise.all([
          skipService.fetchSkips(),
          new Promise((resolve) => setTimeout(resolve, 800)),
        ]);

        setSkips(data);
      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch skips:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  const filteredSkips = filterSkips(skips, filters);

  const resetFilters = () => {
    setFilters({
      roadAllowed: "all",
      heavyWaste: "all",
      priceRange: [200, 1200],
      sizeRange: [4, 40],
    });
  };

  return {
    skips,
    filteredSkips,
    loading,
    error,
    filters,
    setFilters,
    resetFilters,
  };
};
