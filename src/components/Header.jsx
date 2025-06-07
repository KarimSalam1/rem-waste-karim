const Header = ({ filteredSkips, favorites }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
      <div className="relative container mx-auto px-4 py-5">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skip Selection
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Premium waste solutions designed for modern needs
          </p>

          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-purple-400">
                {filteredSkips.length}
              </div>
              <div className="text-sm text-gray-300">Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-pink-400">14</div>
              <div className="text-sm text-gray-300">Days Hire</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold text-green-400">
                {favorites.length}
              </div>
              <div className="text-sm text-gray-300">Favorites</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
