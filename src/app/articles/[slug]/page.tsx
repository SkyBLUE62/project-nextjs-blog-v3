"use server";
import { redirect } from "next/navigation";
import Template from "@/components/template/Template";
import prisma from "@/db/prisma";
import ArticlesLayout from "@/components/content/articles/single/ArticlesLayout";

const page = async ({ params }: { params: { slug: string } }) => {
  const post = await prisma.post.findFirst({
    where: {
      slug: params.slug,
      published: true,
    },
    select: {
      title: true,
      content: true,
      image: true,
      createdAt: true,
      updatedAt: true,
      user: {
        select: {
          name: true,
          job: true,
        },
      },
      category: true,
    },
  });

  if (post) {
    return (
      <Template>
        <ArticlesLayout article={post} />
      </Template>
    );
  }
  return redirect("/");
};

export default page;
