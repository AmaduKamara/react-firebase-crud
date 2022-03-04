import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white py-5 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-2xl text-teal-500 font-semibold">
          ReactFirebase CRUD
        </Link>
        <ul className="flex items-center">
          <li className=" text-lg">
            <NavLink
              to="/add"
              style={({ isActive }) => ({
                color: isActive ? "teal" : "",
              })}
            >
              Add Contact
            </NavLink>
          </li>
          <li className="ml-10 text-lg">
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "teal" : "",
              })}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
