const SkipFilters = ({ filters, onFiltersChange, showFilters }) => {
  const updateFilter = (key, value) => {
    onFiltersChange({ [key]: value });
  };

  const updatePriceRange = (index, value) => {
    const newRange = [...filters.priceRange];
    newRange[index] = parseInt(value) || 0;
    onFiltersChange({ priceRange: newRange });
  };

  const updateSizeRange = (index, value) => {
    const newRange = [...filters.sizeRange];
    newRange[index] = parseInt(value) || 0;
    onFiltersChange({ sizeRange: newRange });
  };

  return (
    <>
      {showFilters && (
        <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 animate-in slide-in-from-top duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-200">
                Road Placement
              </label>
              <select
                value={filters.roadAllowed}
                onChange={(e) => updateFilter("roadAllowed", e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white [&>option]:text-black [&>option]:bg-white focus:border-purple-400 focus:outline-none transition-colors"
              >
                <option value="all">All Options</option>
                <option value="true">Road Allowed</option>
                <option value="false">Private Only</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-200">
                Heavy Waste
              </label>
              <select
                value={filters.heavyWaste}
                onChange={(e) => updateFilter("heavyWaste", e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white [&>option]:text-black [&>option]:bg-white focus:border-purple-400 focus:outline-none transition-colors"
              >
                <option value="all">All Types</option>
                <option value="true">Heavy Allowed</option>
                <option value="false">Standard Only</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-200">
                Price Range
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={filters.priceRange[0]}
                  onChange={(e) => updatePriceRange(0, e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                  placeholder="Min"
                  min="0"
                />
                <input
                  type="number"
                  value={filters.priceRange[1]}
                  onChange={(e) => updatePriceRange(1, e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                  placeholder="Max"
                  min="0"
                />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>£{filters.priceRange[0]}</span>
                <span>£{filters.priceRange[1]}</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-200">
                Size Range
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={filters.sizeRange[0]}
                  onChange={(e) => updateSizeRange(0, e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                  placeholder="Min"
                  min="1"
                />
                <input
                  type="number"
                  value={filters.sizeRange[1]}
                  onChange={(e) => updateSizeRange(1, e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                  placeholder="Max"
                  min="1"
                />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>{filters.sizeRange[0]} yards</span>
                <span>{filters.sizeRange[1]} yards</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-white/10">
            <div className="flex flex-wrap gap-2 text-sm">
              {filters.roadAllowed !== "all" && (
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                  Road:{" "}
                  {filters.roadAllowed === "true" ? "Allowed" : "Private Only"}
                </span>
              )}
              {filters.heavyWaste !== "all" && (
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                  Heavy Waste:{" "}
                  {filters.heavyWaste === "true" ? "Allowed" : "Standard Only"}
                </span>
              )}
              <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full">
                £{filters.priceRange[0]} - £{filters.priceRange[1]}
              </span>
              <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full">
                {filters.sizeRange[0]} - {filters.sizeRange[1]} yards
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SkipFilters;
