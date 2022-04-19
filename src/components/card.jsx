import React from "react";

const Card = ({ children }) => {
  return (
    <div className="card cursor-pointer w-80 h-56 p-4 md:p-6 text-white font-primary mx-auto my-4 md:mx-0 md:my-6">
      {children}
    </div>
  );
};

export default Card;
