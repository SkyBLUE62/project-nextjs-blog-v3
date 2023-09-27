"use server";
import Template from "@/components/template/Template";
import AddArticleForm from "@/components/form/AddArticleForm";
import prisma from "@/db/prisma";

type Category = {
  id: number;
  name: string;
}[];

const addArticle = async () => {
  const category: Category = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  return (
    <Template>
      <div className="h-1/2 w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1>Add Article</h1>
          <AddArticleForm category={category} />
        </div>
      </div>
    </Template>
  );
};

export default addArticle;
