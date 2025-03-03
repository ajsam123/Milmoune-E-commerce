import React from "react";

const ButtonLink = ({ children }) => {
  return (
    <div>
      <button className="font-medium hover:cursor-pointer hover:underline hover:text-gray-600">
        {children}
      </button>
    </div>
  );
};

export default ButtonLink;
