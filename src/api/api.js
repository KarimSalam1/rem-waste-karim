export const skipService = {
  async fetchSkips() {
    try {
      const response = await fetch(
        "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch skips");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching skips:", error);
      return this.getMockData();
    }
  },
};
