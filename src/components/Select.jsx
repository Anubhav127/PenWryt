import React, { useId } from "react";

function Select({ options, label, className, ...props }, ref) {
  const id = useId();
  return (
    <div className="w-full space-y-2">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-200 mb-1"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <select
          {...props}
          id={id}
          ref={ref}
          className={`
            w-full px-4 py-2.5
            bg-gray-700 text-white
            rounded-lg
            border border-gray-600
            focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30
            outline-none
            appearance-none
            transition-all duration-200
            ${className}
          `}
        >
          {options?.map((option) => (
            <option
              key={option}
              value={option}
              className="bg-gray-700 text-white"
            >
              {option}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default React.forwardRef(Select);
