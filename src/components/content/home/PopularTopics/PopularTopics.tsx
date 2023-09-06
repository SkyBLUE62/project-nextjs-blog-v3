"use server";
import prisma from "@/db/prisma";
import RenderPopularTopics from "./RenderPopularTopics";

type Categories = {
  id: number;
  createdAt: Date;
  name: string;
}[];

const PopularTopics = async (): Promise<JSX.Element> => {
  const categories: Categories = await prisma.category.findMany();
  const posts = await prisma.post.findMany({
    where: {
      published: true,
      popularTopics: true,
    },
    select: {
      id: true,
      title: true,
      description: true,
      image: true,
      category: true,
      createdAt: true,
    },
  });
  return <RenderPopularTopics categories={categories} />;
};
export default PopularTopics;
