import React from "react";
import "./css/Navbar.css";
import { connect } from "react-redux";
import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <nav class="navbar navbar-expand-sm  navbar-light bg-white">
      <a class="navbar-brand" href="#">
        <img
          src="https://cdn.shopify.com/s/files/1/0496/1029/files/Freesample.svg?5153"
          alt="Company Logo"
          className="navbar-brand-logo"
          srcset=""
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse navlink-container float-right"
        id="navbarNavDropdown"
      >
        <SignedInLinks />
        {/* <SignedOutLinks /> */}
      </div>
    </nav>
  );
};

export default Navbar;

// <nav class="navbar navbar-light p-0 bg-light">
//   <a class="navbar-brand" href="#">
//     <img
//       src="https://cdn.shopify.com/s/files/1/0496/1029/files/Freesample.svg?5153"
//       alt="Company Logo"
//       className="navbar-brand-logo"
//       srcset=""
//     />
//   </a>
//   <div class="collapse navbar-collapse" id="navbarNavDropdown">
//     <ul className="navbar-nav">
//       <li class="nav-item dropdown">
//         <a
//           class="nav-link dropdown-toggle"
//           href="#"
//           id="navbarDropdownMenuLink"
//           data-toggle="dropdown"
//           aria-haspopup="true"
//           aria-expanded="false"
//         >
//           Dropdown link
//         </a>
//         <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//           <a class="dropdown-item" href="#">
//             Action
//           </a>
//           <a class="dropdown-item" href="#">
//             Another action
//           </a>
//           <a class="dropdown-item" href="#">
//             Something else here
//           </a>
//         </div>
//       </li>
//     </ul>
//   </div>
// </nav>;
