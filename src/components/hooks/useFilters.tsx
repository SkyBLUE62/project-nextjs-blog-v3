import { useState } from "react";

const useFilters = () => {
  const [filterCategory, setFilterCategory] = useState("all");

  return {
    filterCategory,
    setFilterCategory,
  };
};

export default useFilters;
