import React from "react";

interface CategoryProps {
  category: string;
  className?: string;
}

const Category: React.FC<CategoryProps> = ({ category, className }) => {
  return (
    <div
      className={`bg-category py-2 px-2 rounded-lg uppercase text-white font-Roboto text-center font-bold text-xs ${className} `}
    >
      {category}
    </div>
  );
};

export default Category;
