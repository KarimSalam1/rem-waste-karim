import React from "react";

const Badge = ({
  children,
  variant = "default",
  size = "md",
  className = "",
}) => {
  const variants = {
    default: "bg-white/10 text-white",
    success: "bg-green-500/20 text-green-400",
    error: "bg-red-500/20 text-red-400",
    warning: "bg-yellow-500/20 text-yellow-400",
    info: "bg-blue-500/20 text-blue-400",
    primary: "bg-purple-500/20 text-purple-400",
    secondary: "bg-gray-500/20 text-gray-400",
    emerald: "bg-emerald-500 text-white",
    blue: "bg-blue-500 text-white",
    purple: "bg-purple-500 text-white",
    red: "bg-red-500 text-white",
  };

  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-2 text-base",
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1 rounded-full font-semibold
        ${variants[variant] || variants.default}
        ${sizes[size]}
        ${className}
      `.trim()}
    >
      {children}
    </span>
  );
};

export default Badge;
