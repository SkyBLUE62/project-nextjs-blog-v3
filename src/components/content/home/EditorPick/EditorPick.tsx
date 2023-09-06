import React from "react";

import H1Title from "@/components/utilities/H1Title";
import CardEditorPick from "@/components/card/cardEditorPick/CardEditorPick";

const EditorPick = () => {
  return (
    <div className="xl:h-4.75xl h-auto w-full xl:py-20 py-10 max-w-10xl mx-auto">
      <div className="flex flex-col w-full h-full">
        <H1Title className="text-title xl:pb-4 xl:py-0 py-4 xl:px-0 px-2" title="Editor's Pick" />
        <div className="flex xl:flex-row flex-col xl:px-0 px-2 h-full w-full gap-4">
          <CardEditorPick
            image={"EditorPick1.png"}
            date={"08.08.2021"}
            title={"Richird Norton photorealistic rendering as real photos"}
            description={
              "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data."
            }
            category={["Fashion", "Travel"]}
          />

          <CardEditorPick
            image={"EditorPick2.png"}
            date={"08.08.2021"}
            title={"Richird Norton photorealistic rendering as real photos"}
            description={
              "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data."
            }
            category={["Fashion", "Travel"]}
          />
        </div>
      </div>
    </div>
  );
};

export default EditorPick;
