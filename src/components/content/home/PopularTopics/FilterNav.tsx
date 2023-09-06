"use client";

import { useActualCategory } from "../../../context/ActualCategory";

type Categories = {
  id: number;
  createdAt: Date;
  name: string;
};

type Props = {
  categories: Categories[];
};

const FilterNav = (categories: Props) => {
  const { filterCategory, setFilterCategory } = useActualCategory();

  const handleFilter = (category: string) => {
    setFilterCategory(category);
  };

  return (
    <ul className="xl:flex grid grid-cols-4 gap-2 xl:gap-5 text-center flex-row  ">
      <li
        onClick={() => handleFilter("all")}
        className={` text-sm font-Lora font-bold cursor-pointer ${
          filterCategory === "all" ? "text-active" : "text-title"
        }`}
      >
        All
      </li>

      {categories.categories.map((category) => (
        <li
          key={category.id}
          onClick={() => handleFilter(category.name)}
          className={`text-sm font-Lora font-bold cursor-pointer ${
            filterCategory === category.name ? "text-active" : "text-title"
          }`}
        >
          {category.name}
        </li>
      ))}

      <li className="text-title text-sm font-Lora font-bold cursor-pointer">
        View More
      </li>
    </ul>
  );
};

export default FilterNav;
