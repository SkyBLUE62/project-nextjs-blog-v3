import CardTopics from "@/components/card/cardTopics/CardTopics";
import { useActualCategory } from "../../../context/ActualCategory";

interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  category: { id: number; createdAt: Date; name: string } | null;
  createdAt: Date;
  user: { id: number; name: string; job: string };
}

type Props = {
  popularPosts: Post[];
};

const FilterTopics = (props: Props) => {
  const { filterCategory, setFilterCategory } = useActualCategory();
  const posts = props.popularPosts;

  return (
    <>
      {posts
        .filter(
          (post) =>
            (post.category && post.category.name === filterCategory) ||
            filterCategory === "all"
        )
        .map((post, index) => (
          <CardTopics key={index} post={post} />
        ))}
    </>
  );
};

export default FilterTopics;
