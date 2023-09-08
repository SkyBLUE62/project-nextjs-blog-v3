"use client";
import CardAuthor from "./CardAuthor";
import CardContent from "./CardContent";
import CardHeader from "./CardHeader";

type Props = {
  post: Post;
};

interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  category: { id: number; createdAt: Date; name: string } | null;
  createdAt: Date;
  user: { id: number; name: string; job: string };
}

const CardTopics = ({ post }: Props) => {
  const { title, description, image, createdAt } = post;

  return (
    <div className="flex-col flex rounded-md h-card w-card shadow-2xl">
      <CardHeader
        src={image}
        alt={image}
        category={post.category?.name ?? "N/A"}
      />

      <div className="flex flex-col space-y-4 mt-4 px-5">
        <CardContent
          date={createdAt.toISOString().split("T")[0]}
          title={title}
          description={description}
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
