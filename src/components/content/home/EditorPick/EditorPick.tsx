import React from "react";

import H1Title from "@/components/utilities/H1Title";
import CardEditorPick from "@/components/card/cardEditorPick/CardEditorPick";

interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  category: { id: number; createdAt: Date; name: string } | null;
  createdAt: Date;
}

interface BigPostProps {
  posts: Post[];
}

const EditorPick = (posts: BigPostProps) => {
  const postEditorPick = posts.posts;

  return (
    <div className="xl:h-4.75xl h-auto w-full xl:py-20 py-10 max-w-10xl mx-auto">
      <div className="flex flex-col w-full h-full">
        <H1Title
          className="text-title xl:text-left text-center xl:pb-4 xl:py-0 py-4 xl:px-0"
          title="Editor's Pick"
        />
        <div className="flex xl:flex-row flex-col xl:px-0 px-2 h-full w-full gap-4">
          {postEditorPick.map(
            ({ title, description, image, category, createdAt, id }) => (
              <CardEditorPick
                key={id}
                image={image}
                date={createdAt.toISOString().split("T")[0]}
                title={title}
                description={description}
                category={category ? category.name : "N/A"}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default EditorPick;
