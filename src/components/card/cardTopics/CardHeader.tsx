import React from "react";
import Image from "next/image";
type Props = {
  src: string;
  alt: string;
  category: string;
};
const CardHeader = ({ src, alt, category }: Props) => {
  return (
    <div className="w-[310px] h-[280px] relative">
      <div className="absolute w-5/6 z-10 left-1/2 transform -translate-x-1/2 top-4">
        <div className="flex flex-row w-full gap-3 justify-end">
          <div className=" bg-category py-2 px-2 rounded-lg  uppercase text-white font-Roboto text-center font-bold text-xs">
            {category}
          </div>
        </div>
      </div>
      <Image
        src={`/assets/images/${src}`}
        width={310}
        height={280}
        alt={alt}
        className="w-full"
      />
    </div>
  );
};

export default CardHeader;
