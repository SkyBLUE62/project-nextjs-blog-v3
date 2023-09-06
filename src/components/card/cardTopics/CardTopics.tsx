import React from "react";
import CardAuthor from "./CardAuthor";
import CardContent from "./CardContent";
import CardHeader from "./CardHeader";
type Props = {
  category: string;
};
const CardTopics = ({ category }: Props) => {
  return (
    <div
      className="flex-col flex rounded-md h-card w-card shadow-2xl"
      data-category={category}
    >
      <CardHeader
        src={"blog-image.png"}
        alt="blog-image.png"
        category={category}
      />

      <div className="flex flex-col space-y-4 mt-4 px-5">
        <CardContent
          date="08.08.2021"
          title="Dream destinations to visit this year in Paris"
          description="Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data."
        />
        <hr />
        <div className="flex flex-row h-full items-center py-3 px-5">
          <CardAuthor
            src={"author.png"}
            alt="author"
            author="John Doe"
            job="Web Developer"
          />
        </div>
      </div>
    </div>
  );
};

export default CardTopics;
