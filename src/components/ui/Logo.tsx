import React from "react";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  showTagline?: boolean;
}

export default function Logo({
  variant = "dark",
  className = "",
  showTagline = true,
}: LogoProps) {
  const isLight = variant === "light";

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Brand Icon Emblem */}
      <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Outer Shield / Hexagonal Container */}
          <rect
            x="4"
            y="4"
            width="92"
            height="92"
            rx="18"
            fill={isLight ? "#07192F" : "#0B2545"}
            stroke={isLight ? "#134074" : "#134074"}
            strokeWidth="3"
          />

          {/* Compass / Longitude Grid Curves */}
          <path
            d="M20 50C20 66.5685 33.4315 80 50 80C66.5685 80 80 66.5685 80 50"
            stroke={isLight ? "#38BDF8" : "#94A3B8"}
            strokeWidth="2.5"
            strokeDasharray="4 4"
            opacity="0.4"
          />

          {/* Ocean Waves */}
          <path
            d="M22 68C32 63 40 73 50 68C60 63 68 73 78 68"
            stroke={isLight ? "#38BDF8" : "#38BDF8"}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M28 75C36 71 42 79 50 75C58 71 64 79 72 75"
            stroke={isLight ? "#0284C7" : "#0284C7"}
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.7"
          />

          {/* Ascending Air Cargo Wing in Crimson */}
          <path
            d="M22 46L68 22C74 19.8 80 25.5 77.5 31.5L62 62C60.5 65.5 56 67 52.5 65L38 56L22 46Z"
            fill="#D90429"
          />

          {/* Wing Accent Line */}
          <path
            d="M32 46L66 30L56 52"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />

          {/* Core Monogram "DAC" */}
          <text
            x="50"
            y="54"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="18"
            fontWeight="900"
            fontFamily="Arial, sans-serif"
            letterSpacing="1"
          >
            DAC
          </text>
        </svg>
      </div>

      {/* Typography Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-black text-xl tracking-tight leading-none ${
              isLight ? "text-white" : "text-navy"
            }`}
          >
            DAC PACIFIC
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-crimson mb-0.5"></span>
        </div>
        {showTagline && (
          <span className="text-[10px] font-bold text-crimson tracking-wider uppercase mt-1">
            Dhaka Logistics Division
          </span>
        )}
      </div>
    </div>
  );
}
