import { Heart } from "lucide-react";
import { calculateTotalPrice, getSkipCategory } from "../../utils/skipUtils";
import Badge from "../common/Badge";

const SkipListItem = ({
  skip,
  isSelected,
  onSelect,
  onToggleFavorite,
  isFavorite,
}) => {
  const totalPrice = calculateTotalPrice(skip);
  const category = getSkipCategory(skip.size);

  return (
    <div
      className={`bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-4 md:p-6 transition-all ${
        isSelected ? "ring-2 ring-purple-500" : ""
      }`}
    >
      <div className="block md:hidden">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-2 text-center min-w-[60px]">
              <div className="text-lg font-bold text-white">{skip.size}</div>
              <div className="text-[10px] text-white/80">YARDS</div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                {skip.size} Yard Skip
              </h3>
              <p className="text-gray-300 text-xs">
                {skip.hire_period_days} days • {category.name}
              </p>
            </div>
          </div>

          <div className="text-right">
            <div className="text-lg font-bold text-white">£{totalPrice}</div>
            <div className="text-[10px] text-gray-400">inc. VAT</div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {skip.allowed_on_road && (
              <Badge variant="success" size="sm">
                Road OK
              </Badge>
            )}
            {skip.allows_heavy_waste && (
              <Badge variant="info" size="sm">
                Heavy Waste
              </Badge>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleFavorite(skip.id)}
              className={`p-2 rounded-full transition-all ${
                isFavorite
                  ? "bg-red-500 text-white"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <Heart
                className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`}
              />
            </button>

            <button
              onClick={() => onSelect(skip)}
              className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
                isSelected
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {isSelected ? "Selected" : "Select"}
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-4 text-center min-w-[80px]">
            <div className="text-2xl font-bold text-white">{skip.size}</div>
            <div className="text-xs text-white/80">YARDS</div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              {skip.size} Yard Skip
            </h3>
            <p className="text-gray-300 text-sm">
              {skip.hire_period_days} days • {category.name}
            </p>
            <div className="flex gap-2 mt-2">
              {skip.allowed_on_road && (
                <Badge variant="success" size="sm">
                  Road OK
                </Badge>
              )}
              {skip.allows_heavy_waste && (
                <Badge variant="info" size="sm">
                  Heavy Waste
                </Badge>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-2xl font-bold text-white">£{totalPrice}</div>
            <div className="text-xs text-gray-400">inc. VAT</div>
          </div>

          <button
            onClick={() => onToggleFavorite(skip.id)}
            className={`p-2 rounded-full transition-all ${
              isFavorite
                ? "bg-red-500 text-white"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
          </button>

          <button
            onClick={() => onSelect(skip)}
            className={`px-6 py-2 rounded-xl font-semibold transition-all ${
              isSelected
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {isSelected ? "Selected" : "Select"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkipListItem;
