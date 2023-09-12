"use server";

import Header from "../header/Header";
import Footer from "../footer/Footer";

type Props = {
  children: React.ReactNode;
  sliders?: React.JSX.Element;
};

const Template = ({ children = null, sliders }: Props) => {
  let isServer = typeof window !== "undefined" ? true : false;
  console.log(isServer);

  return (
    <div className="min-w-screen min-h-screen bg-[#F8F9FA] overflow-hidden relative">
      <div
        className={` ${
          sliders != undefined ? "h-4.75xl" : "h-full"
        }    overflow-hidden`}
      >
        <Header slidersExist={sliders} />
        {sliders !== null && sliders}
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Template;
