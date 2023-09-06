import React from "react";

interface Props {
  content: string;
  className?: string;
}

const StandardParagraphe: React.FC<Props> = ({ content, className }) => {
  return (
    <p className={` ${className} text-xs font-Lora text-primary font-normal`}>
      {content}
    </p>
  );
};

export default StandardParagraphe;
