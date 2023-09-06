import Template from "@/components/template/Template";
import HomeSliders from "@/components/slider/HomeSliders";
import PopularTopics from "@/components/content/home/PopularTopics/PopularTopics";
import ServBigPost from "@/components/content/home/BigPost/ServBigPost";
import ServEditorPick from "@/components/content/home/EditorPick/ServEditorPick";

export default function Home() {
  return (
    <Template sliders={<HomeSliders />}>
      {/* @ts-expect-error Server Component */}
      <PopularTopics />
      {/* @ts-expect-error Server Component */}
      <ServBigPost />
      {/* @ts-expect-error Server Component */}
      <ServEditorPick />
    </Template>
  );
}
