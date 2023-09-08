"use server";
import prisma from "@/db/prisma";
import RenderPopularTopics from "./RenderPopularTopics";

type Categories = {
  id: number;
  createdAt: Date;
  name: string;
}[];

interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  category: { id: number; createdAt: Date; name: string } | null;
  createdAt: Date;
  uesr: { id: number; name: string; job: string };
}

const PopularTopics = async (): Promise<JSX.Element> => {
  const categories: Categories = await prisma.category.findMany({
    where: {
      post: {
        some: {
          AND: [{ published: true }, { popularTopics: true }],
        },
      },
    },
  });

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
      createdAt: true,
      user: {
        select: {
          id: true,
          name: true,
          job: true,
        },
      },
      category: true,
    },
  });

  console.log(posts);
  if (posts.length === 0 && categories.length === 0) {
    return <></>;
  }

  return <RenderPopularTopics categories={categories} popularPosts={posts} />;
};
export default PopularTopics;
