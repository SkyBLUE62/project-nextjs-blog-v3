import Template from "@/components/template/Template";
import HomeSliders from "@/components/slider/HomeSliders";
import PopularTopics from "@/components/content/home/PopularTopics/PopularTopics";
import EditorPick from "@/components/content/home/EditorPick/EditorPick";
import ServBigPost from "@/components/content/home/BigPost/ServBigPost";
export default function Home() {
  return (
    <Template sliders={<HomeSliders />}>
      {/* @ts-expect-error Server Component */}
      <PopularTopics />
      {/* @ts-expect-error Server Component */}
      <ServBigPost />
      <EditorPick />
    </Template>
  );
}
