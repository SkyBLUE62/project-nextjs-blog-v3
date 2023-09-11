"use server";
import { redirect } from "next/navigation";
import Template from "@/components/template/Template";
import prisma from "@/db/prisma";
import ArticlesLayout from "@/components/content/articles/single/ArticlesLayout";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

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

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;
  // fetch data
  const post = await prisma.post.findFirst({
    where: {
      slug: slug,
    },
    select: {
      title: true,
    },
  });
  return {
    title: `RUNO | ${post?.title}`,
  };
}

export default page;
