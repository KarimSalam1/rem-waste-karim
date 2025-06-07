const LoadingSpinner = ({
  size = "large",
  message = "Loading premium skips...",
  fullScreen = true,
}) => {
  const sizeClasses = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-20 h-20",
  };

  const containerClasses = fullScreen
    ? "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center"
    : "flex items-center justify-center p-8";

  return (
    <div className={containerClasses}>
      <div className="text-center">
        <div className="relative">
          <div
            className={`${sizeClasses[size]} border-4 border-purple-200 border-t-purple-500 rounded-full animate-spin mx-auto mb-4`}
          ></div>
          <div
            className={`absolute inset-0 ${sizeClasses[size]} border-4 border-transparent border-t-pink-500 rounded-full animate-spin mx-auto`}
            style={{
              animationDirection: "reverse",
              animationDuration: "0.8s",
            }}
          ></div>
        </div>
        {message && <p className="text-xl text-white">{message}</p>}
      </div>
    </div>
  );
};

export default LoadingSpinner;
