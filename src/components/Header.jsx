import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [activeTab, setActiveTab] = useState("home");

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (location.pathname === "/add") {
      setActiveTab("AddContact");
    } else if (location.pathname === "/about") {
      setActiveTab("About");
    }
  }, [location]);

  return (
    <div className="bg-white py-5 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-2xl text-teal-500 font-semibold">
          ReactFirebase CRUD
        </Link>
        <ul className="flex items-center">
          <li className=" text-lg">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "teal" : "",
              })}
            >
              Home
            </NavLink>
          </li>
          <li className="ml-10 text-lg">
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
