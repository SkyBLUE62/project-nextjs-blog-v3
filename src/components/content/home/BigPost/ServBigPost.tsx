"use server";
import prisma from "@/db/prisma";
import BigPost from "./BigPost";

interface Post {
  published: boolean;
  bigPost: boolean;
  title: string;
  description: string;
  image: string;
  category: { id: number; createdAt: Date; name: string } | null;
  createdAt: Date;
}

const ServBigPost = async () => {
  const post = await prisma.post.findFirst({
    where: {
      published: true,
      bigPost: true,
    },
    select: {
      published: true,
      bigPost: true,
      title: true,
      description: true,
      image: true,
      category: true,
      createdAt: true,
    },
  });

  if (post) {
    return <BigPost post={post} />;
  }
};

export default ServBigPost;
