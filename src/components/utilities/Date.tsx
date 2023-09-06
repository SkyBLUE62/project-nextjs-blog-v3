import React from "react";

type Props = {
  date: string;
};

export const Date: React.FC<Props> = ({ date }) => {
  return <span className="text-sm font-Lora text-primary ">{date}</span>;
};
