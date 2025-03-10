import React from "react";
import blogPosts from "./data/blogPosts";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
