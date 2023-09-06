import React from "react";
import CardTopics from "@/components/card/cardTopics/CardTopics";
import { useActualCategory } from "../../../context/ActualCategory";
const FilterTopics = () => {
  const { filterCategory, setFilterCategory } = useActualCategory();

  const topics = [
    { category: "all" },
    { category: "Adventure" },
    { category: "Travel" },
    { category: "Fashion" },
  ];
  return (
    <>
      {topics
        .filter(
          (topic) =>
            topic.category === filterCategory || filterCategory === "all"
        )
        .map((topic, index) => (
          <CardTopics key={index} category={topic.category} />
        ))}
    </>
  );
};

export default FilterTopics;
