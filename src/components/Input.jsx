import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent duration-200 border border-gray-600 w-full hover:bg-gray-600 transition-colors ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
