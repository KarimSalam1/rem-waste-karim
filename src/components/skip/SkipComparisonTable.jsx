import { Check, X, Heart } from "lucide-react";
import { calculateTotalPrice, getSkipCategory } from "../../utils/skipUtils";

const SkipComparisonTable = ({
  filteredSkips,
  selectedSkip,
  onSelect,
  favorites,
  onToggleFavorite,
}) => {
  const skipsToCompare = filteredSkips;

  if (skipsToCompare.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">No skips match your criteria</p>
      </div>
    );
  }

  const comparisonRows = [
    {
      label: "Skip Size",
      key: "size",
      render: (skip) => (
        <div className="text-center">
          <div className="text-2xl font-black text-white mb-1">{skip.size}</div>
          <div className="text-xs text-gray-300">YARD</div>
        </div>
      ),
    },
    {
      label: "Category",
      key: "category",
      render: (skip) => {
        const category = getSkipCategory(skip.size);
        return (
          <div className="flex justify-center">
            <div
              className={`inline-flex items-center gap-1 bg-${category.color}-500 text-white px-2 py-1 rounded-full text-xs font-semibold`}
            >
              <span className="text-xs">{category.icon}</span>
              <span>{category.name}</span>
            </div>
          </div>
        );
      },
    },
    {
      label: "Road Placement",
      key: "roadPlacement",
      render: (skip) => (
        <div className="flex items-center justify-center">
          {skip.allowed_on_road ? (
            <div className="flex items-center gap-1 text-green-400">
              <Check className="w-4 h-4" />
              <span className="text-xs">Yes</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 text-red-400">
              <X className="w-4 h-4" />
              <span className="text-xs">No</span>
            </div>
          )}
        </div>
      ),
    },
    {
      label: "Heavy Waste",
      key: "heavyWaste",
      render: (skip) => (
        <div className="flex items-center justify-center">
          {skip.allows_heavy_waste ? (
            <div className="flex items-center gap-1 text-green-400">
              <Check className="w-4 h-4" />
              <span className="text-xs">Yes</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 text-red-400">
              <X className="w-4 h-4" />
              <span className="text-xs">No</span>
            </div>
          )}
        </div>
      ),
    },
    {
      label: "Hire Period",
      key: "hirePeriod",
      render: (skip) => (
        <div className="text-center">
          <div className="text-lg font-bold text-white">
            {skip.hire_period_days}
          </div>
          <div className="text-xs text-gray-300">days</div>
        </div>
      ),
    },
    {
      label: "Price",
      key: "price",
      render: (skip) => (
        <div className="text-center">
          <div className="text-xl font-black text-white">
            £{calculateTotalPrice(skip)}
          </div>
          <div className="text-xs text-gray-400">inc. VAT</div>
        </div>
      ),
    },
  ];

  const mobileColumnWidth = 140;
  const desktopColumnWidth = 200;
  const totalMobileColumns = skipsToCompare.length + 1;

  const MobileHorizontalComparisonView = () => (
    <div className="overflow-x-auto scrollbar-modern pb-4 md:hidden">
      <div
        className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/20 overflow-hidden"
        style={{ minWidth: `${totalMobileColumns * mobileColumnWidth}px` }}
      >
        <style jsx>{`
          .scrollbar-modern {
            scrollbar-width: thin;
            scrollbar-color: rgba(147, 51, 234, 0.6) rgba(255, 255, 255, 0.1);
          }

          .scrollbar-modern::-webkit-scrollbar {
            height: 8px;
          }

          .scrollbar-modern::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            margin: 0 16px;
          }

          .scrollbar-modern::-webkit-scrollbar-thumb {
            background: linear-gradient(90deg, #9333ea, #ec4899);
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.2);
          }

          .scrollbar-modern::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(90deg, #a855f7, #f472b6);
          }

          .scrollbar-modern::-webkit-scrollbar-corner {
            background: transparent;
          }
        `}</style>

        <div className="flex bg-gradient-to-r from-purple-600/30 to-pink-600/30">
          <div
            className="p-3 border-r border-white/10 flex-shrink-0"
            style={{ width: `${mobileColumnWidth}px` }}
          >
            <h3 className="text-sm font-bold text-white text-center">
              COMPARISON
            </h3>
          </div>
          {skipsToCompare.map((skip) => {
            const category = getSkipCategory(skip.size);
            return (
              <div
                key={skip.id}
                className="p-3 border-r border-white/10 last:border-r-0 text-center relative flex-shrink-0"
                style={{ width: `${mobileColumnWidth}px` }}
              >
                <button
                  onClick={() => onToggleFavorite(skip.id)}
                  className={`absolute top-2 right-2 p-1 rounded-full transition-all z-10 ${
                    favorites.includes(skip.id)
                      ? "bg-red-500 text-white"
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  <Heart
                    className={`w-3 h-3 ${
                      favorites.includes(skip.id) ? "fill-current" : ""
                    }`}
                  />
                </button>
                <div
                  className="inline-block px-2 py-1 rounded-full text-white font-bold text-sm"
                  style={{
                    backgroundColor: `var(--${category.color}-500, #6366f1)`,
                  }}
                >
                  {skip.size} YARD
                </div>
              </div>
            );
          })}
        </div>

        {comparisonRows.map((row, index) => (
          <div
            key={row.key}
            className={`flex ${index % 2 === 0 ? "bg-white/2" : "bg-white/5"}`}
          >
            <div
              className="p-3 border-r border-white/10 bg-white/5 flex-shrink-0 flex items-center"
              style={{ width: `${mobileColumnWidth}px` }}
            >
              <div className="font-semibold text-white text-xs text-center w-full">
                {row.label}
              </div>
            </div>
            {skipsToCompare.map((skip) => (
              <div
                key={skip.id}
                className="p-3 border-r border-white/10 last:border-r-0 flex-shrink-0 flex items-center justify-center"
                style={{ width: `${mobileColumnWidth}px` }}
              >
                <div className="transform scale-75">{row.render(skip)}</div>
              </div>
            ))}
          </div>
        ))}

        <div className="flex bg-white/10">
          <div
            className="p-3 border-r border-white/10 flex-shrink-0"
            style={{ width: `${mobileColumnWidth}px` }}
          ></div>
          {skipsToCompare.map((skip) => (
            <div
              key={skip.id}
              className="p-3 border-r border-white/10 last:border-r-0 flex-shrink-0"
              style={{ width: `${mobileColumnWidth}px` }}
            >
              <button
                onClick={() => onSelect(skip)}
                className={`w-full py-2 rounded-lg font-semibold text-xs transition-all ${
                  selectedSkip?.id === skip.id
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {selectedSkip?.id === skip.id ? "Selected" : "Select"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const DesktopComparisonView = () => (
    <div className="overflow-x-auto scrollbar-modern pb-4 hidden md:block">
      <div
        className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/20 overflow-hidden"
        style={{
          minWidth: `${(skipsToCompare.length + 1) * desktopColumnWidth}px`,
        }}
      >
        <style jsx>{`
          .scrollbar-modern {
            scrollbar-width: thin;
            scrollbar-color: rgba(147, 51, 234, 0.6) rgba(255, 255, 255, 0.1);
          }

          .scrollbar-modern::-webkit-scrollbar {
            height: 8px;
          }

          .scrollbar-modern::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            margin: 0 16px;
          }

          .scrollbar-modern::-webkit-scrollbar-thumb {
            background: linear-gradient(90deg, #9333ea, #ec4899);
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.2);
          }

          .scrollbar-modern::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(90deg, #a855f7, #f472b6);
          }

          .scrollbar-modern::-webkit-scrollbar-corner {
            background: transparent;
          }
        `}</style>

        <div className="flex bg-gradient-to-r from-purple-600/30 to-pink-600/30">
          <div
            className="p-6 border-r border-white/10 flex-shrink-0"
            style={{ width: `${desktopColumnWidth}px` }}
          >
            <h3 className="text-xl font-bold text-white text-center">
              COMPARISON
            </h3>
          </div>
          {skipsToCompare.map((skip) => {
            const category = getSkipCategory(skip.size);
            return (
              <div
                key={skip.id}
                className="p-6 border-r border-white/10 last:border-r-0 text-center relative flex-shrink-0"
                style={{ width: `${desktopColumnWidth}px` }}
              >
                <button
                  onClick={() => onToggleFavorite(skip.id)}
                  className={`absolute top-4 right-4 p-2 rounded-full transition-all z-10 ${
                    favorites.includes(skip.id)
                      ? "bg-red-500 text-white"
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  <Heart
                    className={`w-4 h-4 ${
                      favorites.includes(skip.id) ? "fill-current" : ""
                    }`}
                  />
                </button>
                <div
                  className="inline-block px-4 py-2 rounded-full text-white font-bold text-lg"
                  style={{
                    backgroundColor: `var(--${category.color}-500, #6366f1)`,
                  }}
                >
                  {skip.size} YARD
                </div>
              </div>
            );
          })}
        </div>

        {comparisonRows.map((row, index) => (
          <div
            key={row.key}
            className={`flex ${index % 2 === 0 ? "bg-white/2" : "bg-white/5"}`}
          >
            <div
              className="p-6 border-r border-white/10 bg-white/5 flex-shrink-0"
              style={{ width: `${desktopColumnWidth}px` }}
            >
              <div className="font-semibold text-white text-center">
                {row.label}
              </div>
            </div>
            {skipsToCompare.map((skip) => (
              <div
                key={skip.id}
                className="p-6 border-r border-white/10 last:border-r-0 flex-shrink-0"
                style={{ width: `${desktopColumnWidth}px` }}
              >
                {row.render(skip)}
              </div>
            ))}
          </div>
        ))}

        <div className="flex bg-white/10">
          <div
            className="p-6 border-r border-white/10 flex-shrink-0"
            style={{ width: `${desktopColumnWidth}px` }}
          ></div>
          {skipsToCompare.map((skip) => (
            <div
              key={skip.id}
              className="p-6 border-r border-white/10 last:border-r-0 flex-shrink-0"
              style={{ width: `${desktopColumnWidth}px` }}
            >
              <button
                onClick={() => onSelect(skip)}
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  selectedSkip?.id === skip.id
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {selectedSkip?.id === skip.id ? "Selected" : "Select"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <MobileHorizontalComparisonView />

      <DesktopComparisonView />
    </div>
  );
};

export default SkipComparisonTable;
