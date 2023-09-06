import { Date } from "@/components/utilities/Date";
import H3Title from "@/components/utilities/H3Title";
import StandardParagraphe from "@/components/utilities/StandardParagraphe";
import React from "react";

type Props = {
  date: string;
  title: string;
  description: string;
};

const CardEditorContent: React.FC<Props> = ({ date, title, description }) => {
  return (
    <>
      <Date date={date} />
      <H3Title className="w-1/2" content={title} />
      <StandardParagraphe className="xl:w-[21.25rem]" content={description} />
    </>
  );
};

export default CardEditorContent;
