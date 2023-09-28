"use server";

import CategoryUi from "@/components/utilities/CategoryUi";
import H1Title from "@/components/utilities/H1Title";
import StandardParagraphe from "@/components/utilities/StandardParagraphe";
import HorizontalSeparator from "@/components/utilities/HorizontalSeparator";
import { Date } from "@/components/utilities/Date";

interface Post {
  title: string;
  description: string;
  image: string;
  category: { id: number; createdAt: Date; name: string } | null;
  createdAt: Date;
}

interface BigPostProps {
  post: Post;
}

const BigPost = (post: BigPostProps) => {
  const { title, description, image, category, createdAt } = post.post;
  const nameCategory = category?.name;
  const formattedDate = createdAt.toISOString().split("T")[0];

  return (
    <div
      className="h-4.75xl w-full  bg-cover bg-no-repeat bg-top"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex flex-col items-center text-center gap-5 h-full justify-center w-1/3 mx-auto">
        {nameCategory && <CategoryUi category={nameCategory} />}
        <H1Title className="text-white" title={title} />
        <StandardParagraphe content={description} />
        <HorizontalSeparator />
        <Date date={formattedDate} />
      </div>
    </div>
  );
};

export default BigPost;
