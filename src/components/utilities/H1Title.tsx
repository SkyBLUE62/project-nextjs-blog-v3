import React from "react";

interface Props {
  title: string;
  className?: string;
}

const H1Title: React.FC<Props> = ({ title, className }) => {
  return (
    <h1 className={`text-4xl  font-bold font-Lora  ${className}`}>
      {title}
    </h1>
  );
};

export default H1Title;
