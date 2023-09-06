import React from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  author: string;
  job?: string;
};

const CardAuthor = ({ src, alt, author, job }: Props) => {
  return (
    <>
      <Image
        src={`/assets/images/${src}`}
        width={50}
        height={50}
        alt={alt}
        className="rounded-full justify-start"
      />
      <h3 className="flex flex-col justify-center ml-4">
        <span className="text-[#343A40] text-sm font-bold font-Lora">
          {author}
        </span>
        {job && (
          <span className="text-[#343A40] text-sm font-normal font-Lora">
            {job}
          </span>
        )}
      </h3>
    </>
  );
};

export default CardAuthor;
