import React from "react";
import CategoryUi from "@/components/utilities/CategoryUi";
import H1Title from "@/components/utilities/H1Title";
import StandardParagraphe from "@/components/utilities/StandardParagraphe";
import HorizontalSeparator from "@/components/utilities/HorizontalSeparator";
import { Date } from "@/components/utilities/Date";
const BigPost = () => {
  return (
    <div className="h-4.75xl w-full bg-bigPost bg-cover bg-no-repeat bg-top">
      <div className="flex flex-col items-center text-center gap-5 h-full justify-center w-1/3 mx-auto">
        <CategoryUi category="Fashion" />
        <H1Title
          className="text-white"
          title="Richird Norton photorealistic rendering as real photos"
        />
        <StandardParagraphe content="Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data." />
        <HorizontalSeparator />
        <Date date="08.08.2021" />
      </div>
    </div>
  );
};

export default BigPost;
