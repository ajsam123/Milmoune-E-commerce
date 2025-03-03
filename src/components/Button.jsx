import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-gray-800 text-center px-2 py-[16px] text-gray-0 w-full">
      {children}
    </button>
  );
};

export default Button;
