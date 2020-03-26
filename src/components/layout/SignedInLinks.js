import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const SignedInLinks = props => {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink class="nav-link" to="/">
          Home <span class="sr-only">(current)</span>
        </NavLink>
      </li>

      <li className="nav-item ">
        <NavLink className="nav-link" to="/courses" aria-expanded="false">
          Courses
        </NavLink>
      </li>
      <li className="nav-item ">
        <NavLink className="nav-link" to="/livestream" aria-expanded="false">
          LiveSession
        </NavLink>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#">
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Q/A
        </a>
      </li>
    </ul>
  );
};

export default SignedInLinks;
