import { useParams } from "react-router-dom";
import blogPosts from "./data/blogPosts";
const BlogPost = () => {
  const { id } = useParams();
  console.log(id);

  const posts = blogPosts.find((p) => p.id === id);
  if (!posts) {
    return `There is no posts available`;
  }
  console.log(posts);

  return (
    <div>
      <p className="text-2xl font-bold mb-4">{posts.title}</p>

      <p className="text-xl font-semibold mb-4">{posts.date}</p>

      <p className="text-lg">{posts.content}</p>
    </div>
  );
};

export default BlogPost;
