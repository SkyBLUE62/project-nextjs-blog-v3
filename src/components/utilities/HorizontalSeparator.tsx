import React from "react";

const HorizontalSeparator = () => {
  return (
    <div className="relative">
      <div className="absolute inset-x-1/2 bg-social-icons w-5 h-[0.5px] transform -translate-x-1/2"></div>
    </div>
  );
};

export default HorizontalSeparator;
