import Image from "next/image";
import CategoryUI from "@/components/utilities/CategoryUi";

type Article = {
  title: string;
  content: string;
  image: string;
  category: { id: number; createdAt: Date; name: string };
  createdAt: Date;
  updatedAt: Date;
  user: { name: string; job: string };
};

type Props = {
  article: Article;
};

const ArticlesLayout = (article: Props) => {
  const { title, content, image, category, createdAt, updatedAt, user } =
    article.article;
  console.log(category.name);
  return (
    <div className="max-w-10xl mx-auto py-10 flex flex-col gap-5">
      <h1 className="text-center text-title xl:text-left text-4xl font-bold font-Lora">
        {title}
      </h1>

      <div>
        <div className="float-left ">
          <Image
            src={"/assets/images/" + image}
            alt={image}
            width={400}
            height={300}
            className="mx-auto w-1/2"
          />
          <div className="w-1/5 mx-auto mt-2">
            <CategoryUI category={category.name} className="w-auto" />
          </div>
        </div>
        <div>
          <p className="text-justify font-Lora first-letter:text-4xl xl:first-letter:text-2xl px-2 text-lg">
            {content}
          </p>
        </div>
        <div style={{ clear: "both" }}></div>
      </div>
    </div>
  );
};

export default ArticlesLayout;
