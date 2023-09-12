"use server";
import Template from "@/components/template/Template";
import H1Title from "@/components/utilities/H1Title";
import StandardParagraphe from "@/components/utilities/StandardParagraphe";
import Image from "next/image";
const page = () => {
  return (
    <div>
      <Template>
        <div className="max-w-10xl xl:max-w-6xl mx-auto xl:h-[70vh]">
          <H1Title
            title="Who we are ?"
            className="text-secondary text-center xl:text-left"
          />
          <div className="flex xl:flex-row flex-col xl:gap-10 xl:mt-10">
            <Image
              src={"/assets/images/who-we_are.avif"}
              alt="who we are"
              width={400}
              height={300}
              typeof="image/avif"
            />
            <p className="text-justify text-lg font-Lora px-2 py-2 first-letter:text-4xl first-letter:font-semibold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              quisquam saepe autem ipsa sit accusamus quasi, perferendis magni
              ipsum rerum? Ipsam sint mollitia consequatur delectus id enim
              expedita, accusantium neque? Magnam, perspiciatis? Provident sit
              dolore optio corporis quidem tenetur, non fugiat! Quos saepe
              accusamus impedit dolor, vero repudiandae omnis voluptatum,
              maiores recusandae illum laudantium sapiente vel quo enim
              aspernatur cupiditate!
            </p>
          </div>
        </div>
      </Template>
    </div>
  );
};

export default page;
