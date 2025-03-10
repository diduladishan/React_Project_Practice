import React from "react";
import { useParams } from "react-router-dom";
import blogPosts from "./data/blogPosts";

const BlogPost = () => {
  const { id } = useParams();
  // console.log(id);
  // console.log(blogPosts);

  const post = blogPosts.find((p) => p.id === id);
  console.log(post);

  if (!post) {
    return "There is no post";
  }

  return (
    <div>
      <p className="text-4xl font-bold mb-3">{post.title}</p>
      <p className="text-2xl font-bold mb-3">{post.date}</p>
      <p className="text-xl font-bold">{post.content}</p>
    </div>
  );
};

export default BlogPost;
