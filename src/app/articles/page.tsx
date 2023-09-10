"use server";
import Template from "@/components/template/Template";
import AllArticles from "@/components/content/articles/AllArticles/AllArticles";
import prisma from "@/db/prisma";
const page = async () => {
  const categories = await prisma.category.findMany({
    where: {
      post: {
        some: {
          AND: [{ published: true }],
        },
      },
    },
  });
  const posts = await prisma.post.findMany({
    where: {
      published: true,
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
  return (
    <Template>
      <AllArticles categories={categories} allPosts={posts} />
    </Template>
  );
};

export default page;
