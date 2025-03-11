import React from "react";

import blogPosts from "./data/blogPosts";
import { Link } from "react-router-dom";

const HomePage = () => {
  console.log(blogPosts);
  return (
    <div>
      <ul>
        {blogPosts.map((p) => (
          <Link key={p.id} to={`blog/${p.id}`}>
            <li>{p.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
