import React from "react";

const VerticalSeparator = () => {
  return (
    <div className="relative">
      <div className="absolute inset-y-1/2 bg-social-icons w-[0.5px] h-5 transform -translate-y-1/2"></div>
    </div>
  );
};

export default VerticalSeparator;
