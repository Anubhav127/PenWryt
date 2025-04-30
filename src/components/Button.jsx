import React from "react";
 function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 font-semibold ${className}`} {...props}>
            {children}
        </button>
    );
}
export default Button