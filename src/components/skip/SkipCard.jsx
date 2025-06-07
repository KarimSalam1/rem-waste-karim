import { Check, X, Heart, Truck, Zap } from "lucide-react";
import { calculateTotalPrice, getSkipCategory } from "../../utils/skipUtils";

const SkipCard = ({
  skip,
  isSelected = false,
  onSelect,
  onToggleFavorite,
  isFavorite = false,
  compact = false,
  className = "",
}) => {
  const totalPrice = calculateTotalPrice(skip);
  const category = getSkipCategory(skip.size);

  const handleSelect = () => {
    onSelect?.(skip);
  };

  const handleToggleFavorite = (e) => {
    e.stopPropagation();
    onToggleFavorite?.(skip.id);
  };

  return (
    <div
      className={`relative group ${
        compact ? "" : "transform hover:scale-105"
      } transition-all duration-300 ${className}`}
    >
      <div
        className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/20 overflow-hidden shadow-2xl cursor-pointer ${
          isSelected ? "ring-4 ring-purple-500" : ""
        }`}
        onClick={handleSelect}
      >
        <div className="relative h-48 bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center overflow-hidden">
          <div
            className={`absolute top-4 left-4 bg-${category.color}-500 text-white px-3 py-1 rounded-full text-sm font-semibold`}
          >
            {category.icon} {category.name}
          </div>

          <button
            onClick={handleToggleFavorite}
            className={`absolute top-4 right-4 p-2 rounded-full transition-all z-10 ${
              isFavorite
                ? "bg-red-500 text-white"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
          </button>

          <div className="text-center">
            <div className="text-6xl font-black text-white mb-2">
              {skip.size}
            </div>
            <div className="text-lg text-white/80 font-semibold">YARD SKIP</div>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2">
            {skip.allowed_on_road && (
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                <Truck className="w-3 h-3" />
                Road OK
              </div>
            )}
            {skip.allows_heavy_waste && (
              <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                <Zap className="w-3 h-3" />
                Heavy Waste
              </div>
            )}
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                {skip.size} Yard Skip
              </h3>
              <p className="text-gray-300 text-sm">
                {skip.hire_period_days} day hire period
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-black text-white">
                £{totalPrice}
              </div>
              <div className="text-xs text-gray-400">inc. VAT</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center">
              <div
                className={`text-2xl ${
                  skip.allowed_on_road ? "text-green-400" : "text-red-400"
                } mb-1`}
              >
                {skip.allowed_on_road ? (
                  <Check className="w-6 h-6 mx-auto" />
                ) : (
                  <X className="w-6 h-6 mx-auto" />
                )}
              </div>
              <div className="text-sm text-gray-300">Road Placement</div>
            </div>
            <div className="text-center">
              <div
                className={`text-2xl ${
                  skip.allows_heavy_waste ? "text-green-400" : "text-red-400"
                } mb-1`}
              >
                {skip.allows_heavy_waste ? (
                  <Check className="w-6 h-6 mx-auto" />
                ) : (
                  <X className="w-6 h-6 mx-auto" />
                )}
              </div>
              <div className="text-sm text-gray-300">Heavy Waste</div>
            </div>
          </div>

          <button
            onClick={handleSelect}
            className={`w-full py-4 rounded-2xl font-semibold transition-all ${
              isSelected
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {isSelected ? "Selected" : "Select This Skip"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkipCard;
