import React from "react";

const Card = ({ children }) => {
  return (
    <div className="card cursor-pointer w-72 h-56 p-4 md:p-4 text-white font-primary mx-auto my-4 md:mx-4 md:my-6">
      {children}
    </div>
  );
};

export default Card;
