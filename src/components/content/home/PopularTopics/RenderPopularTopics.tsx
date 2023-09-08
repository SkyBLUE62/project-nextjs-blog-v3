"use client";
import FilterNav from "./FilterNav";
import FilterTopics from "./FilterTopics";
import { ActualCategoryProvider } from "../../../context/ActualCategory";

interface Categories {
  id: number;
  createdAt: Date;
  name: string;
}

interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  category: { id: number; createdAt: Date; name: string } | null;
  createdAt: Date;
  user: { id: number; name: string; job: string };
}

type Props = {
  categories: Categories[];
  popularPosts: Post[];
};

const RenderPopularTopics = (props: Props) => {
  return (
    <ActualCategoryProvider>
      <div className="h-full w-full flex flex-col max-w-10xl mx-auto xl:py-20 py-10  space-y-14">
        <h1 className="font-Lora text-4xl font-bold pl-4 xl:pl-0 text-title">
          Popular topics
        </h1>
        <FilterNav categories={props.categories} />
        <div className="grid xl:grid-cols-4 xl:gap-16 grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 mx-auto w-auto h-auto">
          <FilterTopics popularPosts={props.popularPosts} />
        </div>
      </div>
    </ActualCategoryProvider>
  );
};

export default RenderPopularTopics;
