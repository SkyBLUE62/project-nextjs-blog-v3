"use server";
import prisma from "@/db/prisma";
import EditorPick from "./EditorPick";

const ServEditorPick = async () => {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
      editorPick: true,
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

  if (posts.length > 1) {
    return <EditorPick posts={posts} />;
  }
};

export default ServEditorPick;
