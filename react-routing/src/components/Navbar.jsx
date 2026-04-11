import React from "react";
import Dashboard from "./Dashboard";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" className={({isActive}) => isActive ? "active-link" : ""}>Home</NavLink>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
