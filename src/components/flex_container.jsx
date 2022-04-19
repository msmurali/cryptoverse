import React from "react";

const FlexContainer = ({ title, children }) => {
  return (
    <div className="mx-4 md:mx-6 p-4 md:p-8">
      <h1 className="text-white font-medium mb-6 md:text-xl font-primary flex justify-between items-center">
        {title}
        <span className="font-medium cursor-pointer text-sm font-primary text-secondary hidden md:inline">
          SHOW MORE
        </span>
      </h1>
      <div className="flex justify-between flex-wrap items-start">
        {children}
      </div>
      <span className="font-medium cursor-pointer block text-sm font-primary text-secondary text-center mx-auto my-6 md:hidden">
        SHOW MORE
      </span>
    </div>
  );
};

export default FlexContainer;
