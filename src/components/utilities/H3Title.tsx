type Props = {
  content: string;
  className?: string;
};

const H3Title: React.FC<Props> = ({ content, className }) => {
  return (
    <h3 className={`font-Lora ${className} text-white text-xl font-bold `}>
      {content}
    </h3>
  );
};

export default H3Title;
