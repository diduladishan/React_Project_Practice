import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-red-600" : "text-green-500"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="projects"
        className={({ isActive }) =>
          isActive ? "text-red-600" : "text-green-500"
        }
      >
        Projects
      </NavLink>

      <NavLink
        to="contact"
        className={({ isActive }) =>
          isActive ? "text-red-600" : "text-green-500"
        }
      >
        Contact Us
      </NavLink>
    </div>
  );
};

export default NavBar;
