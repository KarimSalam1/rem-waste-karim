import { useState } from "react";
import { ChevronLeft, ChevronRight, Settings, RotateCcw } from "lucide-react";

import LoadingSpinner from "../common/LoadingSpinner";
import Header from "../Header";
import SkipCard from "./SkipCard";
import SkipListItem from "./SkipListItem";
import SkipFilters from "./SkipFilters";

import { useSkips } from "../../hooks/useSkips";
import { useFavorites } from "../../hooks/useFavorites";

import { calculateTotalPrice } from "../../utils/skipUtils";

const SkipSelectionPage = () => {
  const { loading, filteredSkips, filters, setFilters, resetFilters } =
    useSkips();
  const { favorites, toggleFavorite } = useFavorites();

  const [selectedSkip, setSelectedSkip] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState("cards");
  const [showFilters, setShowFilters] = useState(false);

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState("");

  const nextSkip = () => {
    setIsTransitioning(true);
    setSlideDirection("slide-left");
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredSkips.length);
      setSlideDirection("slide-right");
      setTimeout(() => {
        setIsTransitioning(false);
        setSlideDirection("");
      }, 300);
    }, 300);
  };

  const prevSkip = () => {
    setIsTransitioning(true);
    setSlideDirection("slide-right");
    setTimeout(() => {
      setCurrentIndex(
        (prev) => (prev - 1 + filteredSkips.length) % filteredSkips.length
      );
      setSlideDirection("slide-left");
      setTimeout(() => {
        setIsTransitioning(false);
        setSlideDirection("");
      }, 300);
    }, 300);
  };

  const handleDotsPress = (index) => {
    setIsTransitioning(true);
    if (index > currentIndex) {
      setSlideDirection("slide-left");
      setTimeout(() => {
        setCurrentIndex(index);
        setSlideDirection("slide-right");
        setTimeout(() => {
          setIsTransitioning(false);
          setSlideDirection("");
        }, 300);
      }, 300);
    } else {
      setSlideDirection("slide-right");
      setTimeout(() => {
        setCurrentIndex(index);
        setSlideDirection("slide-left");
        setTimeout(() => {
          setIsTransitioning(false);
          setSlideDirection("");
        }, 300);
      }, 300);
    }
  };

  const handleFiltersChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      <Header filteredSkips={filteredSkips} favorites={favorites} />

      <div className="container mx-auto px-4 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-2">
          <div className="flex bg-white/10 backdrop-blur-sm rounded-2xl p-1">
            {["cards", "compare", "list"].map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-6 py-2 rounded-xl capitalize transition-all ${
                  viewMode === mode
                    ? "bg-purple-500 text-white shadow-lg"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 hover:bg-white/20 transition-all"
            >
              <Settings className="w-5 h-5" />
              Filters
            </button>

            <button
              onClick={resetFilters}
              className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-2xl px-4 py-3 hover:bg-white/10 transition-all text-gray-300"
              title="Reset Filters"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        <SkipFilters
          filters={filters}
          onFiltersChange={handleFiltersChange}
          showFilters={showFilters}
        />
      </div>

      <div className="container mx-auto px-4 pb-24">
        {viewMode === "cards" && (
          <div className="relative max-w-4xl mx-auto">
            <button
              onClick={prevSkip}
              disabled={currentIndex === 0 || isTransitioning}
              className={`hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-10 backdrop-blur-sm rounded-full p-3 transition-all ${
                currentIndex === 0 || isTransitioning
                  ? "bg-white/5 text-gray-500 cursor-not-allowed"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSkip}
              disabled={
                currentIndex === filteredSkips.length - 1 || isTransitioning
              }
              className={`hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-10 backdrop-blur-sm rounded-full p-3 transition-all ${
                currentIndex === filteredSkips.length - 1 || isTransitioning
                  ? "bg-white/5 text-gray-500 cursor-not-allowed"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {filteredSkips[currentIndex] && (
              <div
                className={`relative mx-auto max-w-2xl overflow-hidden transition-all duration-300 transform ${
                  isTransitioning
                    ? slideDirection === "slide-left"
                      ? "-translate-x-full opacity-0"
                      : slideDirection === "slide-right"
                      ? "translate-x-full opacity-0"
                      : "opacity-0"
                    : "translate-x-0 opacity-100"
                }`}
              >
                <SkipCard
                  skip={filteredSkips[currentIndex]}
                  isSelected={
                    selectedSkip?.id === filteredSkips[currentIndex].id
                  }
                  onSelect={setSelectedSkip}
                  onToggleFavorite={toggleFavorite}
                  isFavorite={favorites.includes(
                    filteredSkips[currentIndex].id
                  )}
                />
              </div>
            )}

            <div className="flex justify-center items-center mt-8 gap-4">
              <button
                onClick={prevSkip}
                disabled={currentIndex === 0 || isTransitioning}
                className={`block md:hidden backdrop-blur-sm rounded-full p-2 transition-all ${
                  currentIndex === 0 || isTransitioning
                    ? "bg-white/5 text-gray-500 cursor-not-allowed"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {filteredSkips.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotsPress(index)}
                    disabled={isTransitioning}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex ? "bg-purple-500" : "bg-white/20"
                    } ${
                      isTransitioning ? "cursor-not-allowed" : "cursor-pointer"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSkip}
                disabled={
                  currentIndex === filteredSkips.length - 1 || isTransitioning
                }
                className={`block md:hidden backdrop-blur-sm rounded-full p-2 transition-all ${
                  currentIndex === filteredSkips.length - 1 || isTransitioning
                    ? "bg-white/5 text-gray-500 cursor-not-allowed"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {viewMode === "compare" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-2 md:px-0">
            {filteredSkips.map((skip) => (
              <SkipCard
                key={skip.id}
                skip={skip}
                isSelected={selectedSkip?.id === skip.id}
                onSelect={setSelectedSkip}
                onToggleFavorite={toggleFavorite}
                isFavorite={favorites.includes(skip.id)}
                compact={true}
              />
            ))}
          </div>
        )}

        {viewMode === "list" && (
          <div className="space-y-4 px-2 md:px-0">
            {filteredSkips.map((skip) => (
              <SkipListItem
                key={skip.id}
                skip={skip}
                isSelected={selectedSkip?.id === skip.id}
                onSelect={setSelectedSkip}
                onToggleFavorite={toggleFavorite}
                isFavorite={favorites.includes(skip.id)}
              />
            ))}
          </div>
        )}
      </div>

      {selectedSkip && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 p-6 shadow-2xl z-50">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold">
                {selectedSkip.size} Yard Skip Selected
              </h3>
              <p className="text-purple-100">
                £{calculateTotalPrice(selectedSkip)} inc. VAT •{" "}
                {selectedSkip.hire_period_days} days
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setSelectedSkip(null)}
                className="px-6 py-3 bg-white/20 rounded-xl hover:bg-white/30 transition-all"
              >
                Change
              </button>
              <button className="px-8 py-3 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-all">
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkipSelectionPage;
