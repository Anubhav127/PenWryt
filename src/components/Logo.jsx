import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div style={{ width }} className="transform hover:scale-105 transition-transform duration-200">
      <svg
        viewBox="0 0 200 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          d="M20 10L40 50L60 10M80 10V50M100 10V50L120 30L140 50V10M160 10V50"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-500"
        />
      </svg>
    </div>
  );
}

export default Logo;
