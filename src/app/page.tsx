
import Template from "@/components/template/Template";
import HomeSliders from "@/components/slider/HomeSliders";
import PopularTopics from "@/components/content/home/PopularTopics/PopularTopics";
import BigPost from "@/components/content/home/BigPost/BigPost";
import EditorPick from "@/components/content/home/EditorPick/EditorPick";

export default function Home() {
  return (
    <Template sliders={<HomeSliders />}>
      <PopularTopics />
      <BigPost />
      <EditorPick />
    </Template>
  );
}
