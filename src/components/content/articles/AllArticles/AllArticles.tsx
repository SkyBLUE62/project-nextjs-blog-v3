"use client";

import FilterNav from "../../home/PopularTopics/FilterNav";
import { ActualCategoryProvider } from "../../../context/ActualCategory";
import H1Title from "@/components/utilities/H1Title";
import FilterTopics from "../../home/PopularTopics/FilterTopics";


type Categories = {
  id: number;
  createdAt: Date;
  name: string;
};

type Post = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: { id: number; createdAt: Date; name: string } | null;
  createdAt: Date;
  user: { id: number; name: string; job: string };
};

type Props = {
  categories: Categories[];
  allPosts: Post[];
};

const AllArticles = (props: Props) => {
  const ArrCategories = props.categories;
  const ArrPosts = props.allPosts;
  return (
    <ActualCategoryProvider>
      <div className="max-w-10xl mx-auto py-10">
        <H1Title
          className="text-title xl:text-left text-center xl:py-0 py-0 xl:px-0"
          title="All Articles"
        />
        <div className="py-10">
          <FilterNav categories={ArrCategories} />
        </div>

        <div className="grid xl:grid-cols-4 xl:gap-16 grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 mx-auto w-auto h-auto">
          <FilterTopics popularPosts={ArrPosts} />
        </div>
      </div>
    </ActualCategoryProvider>
  );
};

export default AllArticles;
