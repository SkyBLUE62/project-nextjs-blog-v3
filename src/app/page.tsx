"use server";

import Template from "@/components/template/Template";
import HomeSliders from "@/components/slider/HomeSliders";
import PopularTopics from "@/components/content/home/PopularTopics/PopularTopics";
import ServBigPost from "@/components/content/home/BigPost/ServBigPost";
import ServEditorPick from "@/components/content/home/EditorPick/ServEditorPick";
import prisma from "@/db/prisma";


export default async function Home() {
  const slides = await prisma.post.findMany({
    where: {
      published: true,
      slide: true,
    },
    select: {
      id: true,
      title: true,
      description: true,
      image: true,
      createdAt: true,
      category: true,
    },
  });

  return (
    <Template sliders={slides && <HomeSliders slides={slides} />}>
      {/* @ts-expect-error Server Component */}
      <PopularTopics />
      {/* @ts-expect-error Server Component */}
      <ServBigPost />
      {/* @ts-expect-error Server Component */}
      <ServEditorPick />
    </Template>
  );
}
