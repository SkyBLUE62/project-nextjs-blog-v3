"use server"
import Template from "@/components/template/Template";
import AddArticleForm from "@/components/form/AddArticleForm";

const addArticle = () => {
  return (
    <Template>
      <div className="h-1/2 w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1>Add Article</h1>
          <AddArticleForm />
        </div>
      </div>
    </Template>
  );
};

export default addArticle;
