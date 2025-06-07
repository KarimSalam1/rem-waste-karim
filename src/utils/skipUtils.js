export const calculateTotalPrice = (skip) => {
  return Math.round(skip.price_before_vat * (1 + skip.vat / 100));
};

export const getSkipCategory = (size) => {
  if (size <= 6) return { name: "Compact", color: "emerald", icon: "🏠" };
  if (size <= 12) return { name: "Standard", color: "blue", icon: "🏗️" };
  if (size <= 16) return { name: "Large", color: "purple", icon: "🏭" };
  return { name: "Industrial", color: "red", icon: "🏭" };
};

export const filterSkips = (skips, filters) => {
  return skips.filter((skip) => {
    const price = calculateTotalPrice(skip);

    if (
      filters.roadAllowed !== "all" &&
      skip.allowed_on_road !== (filters.roadAllowed === "true")
    ) {
      return false;
    }

    if (
      filters.heavyWaste !== "all" &&
      skip.allows_heavy_waste !== (filters.heavyWaste === "true")
    ) {
      return false;
    }

    if (price < filters.priceRange[0] || price > filters.priceRange[1]) {
      return false;
    }

    if (skip.size < filters.sizeRange[0] || skip.size > filters.sizeRange[1]) {
      return false;
    }

    return true;
  });
};
