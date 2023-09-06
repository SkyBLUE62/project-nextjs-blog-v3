"use server";
import prisma from "@/db/prisma";
import RenderPopularTopics from "./RenderPopularTopics";

type Categories = {
  id: number;
  createdAt: Date;
  name: string;
}[];

const PopularTopics = async () => {
  const categories: Categories = await prisma.category.findMany();
  console.log(categories);
  return <RenderPopularTopics categories={categories} />;
};
export default PopularTopics;
