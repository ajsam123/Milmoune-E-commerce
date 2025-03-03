import React from "react";

const Input = ({ label, placeholder, type, value }) => {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        type={type}
        className="bg-gray-100 mt-2 px-3 py-2 w-full"
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default Input;
