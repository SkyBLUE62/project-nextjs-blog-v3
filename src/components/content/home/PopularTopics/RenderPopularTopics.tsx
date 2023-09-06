"use client";

import FilterNav from "./FilterNav";
import FilterTopics from "./FilterTopics";
import { ActualCategoryProvider } from "../../../context/ActualCategory";

interface Categories {
  id: number;
  createdAt: Date;
  name: string;
}

type Props = {
  categories: Categories[];
};

const RenderPopularTopics = (categories: Props) => {
  
  return (
    <ActualCategoryProvider>
      <div className="h-full w-full flex flex-col max-w-10xl mx-auto xl:py-20 py-10  space-y-14">
        <h1 className="font-Lora text-4xl font-bold pl-4 xl:pl-0 text-title">
          Popular topics
        </h1>
        <FilterNav categories={categories.categories} />
        <div className="grid xl:grid-cols-4 xl:gap-16 grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 mx-auto w-auto h-auto">
          <FilterTopics />
        </div>
      </div>
    </ActualCategoryProvider>
  );
};

export default RenderPopularTopics;
