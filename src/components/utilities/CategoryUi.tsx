import React from "react";

interface CategoryProps {
  category: string;
}

const Category: React.FC<CategoryProps> = ({ category }) => {
  return (
    <div className="bg-category py-2 px-2 rounded-lg uppercase text-white font-Roboto text-center font-bold text-xs">
      {category}
    </div>
  );
};

export default Category;
