import React from "react";
import CardEditorContent from "./CardEditorContent";
import CategoryUi from "@/components/utilities/CategoryUi";

type Props = {
  image: string;
  date: string;
  title: string;
  description: string;
  category:  string;
};
const CardEditorPick: React.FC<Props> = ({
  image,
  date,
  title,
  description,
  category,
}) => {
  const urlImage = `${image}`;
  return (
    <div
      className={`xl:w-1/2 w-full xl:px-0 rounded-2xl  h-full bg-cover bg-no-repeat`}
      style={{
        backgroundImage: `url(${urlImage})`,
      }}
    >
      <div className="mx-auto flex flex-row  justify-end gap-2 xl:gap-6 pt-5 pr-5">
         <CategoryUi category={category} />;
      </div>
      <div className="flex flex-col pl-10 w-full h-full justify-center pb-10 gap-6">
        <CardEditorContent
          date={date}
          title={title}
          description={description}
        />
      </div>
    </div>
  );
};

export default CardEditorPick;
