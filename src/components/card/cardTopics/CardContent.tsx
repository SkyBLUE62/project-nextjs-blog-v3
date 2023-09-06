import React from "react";

type Props = {
  date: string;
  title: string;
  description: string;
};

const CardContent = ({ date, title, description }: Props) => {
  return (
    <>
      <span className="text-sm font-Lora text-secondary ">{date}</span>
      <h2 className="font-Lora text-lg font-bold text-title">{title}</h2>
      <p className="text-xs font-Lora text-title">{description}</p>
    </>
  );
};

export default CardContent;
