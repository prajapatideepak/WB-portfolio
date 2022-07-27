import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="text-center space-y-5 lg:space-y-0 lg:flex bg-gradient-to-r from-gray-700 via-gray-700   to-gray-900 items-center text-yellow-300 justify-between bg-gray-600 px-8 py-5">
      <div className="">
        <Link to="/">
          <h1 className="text-2xl font-bold text-yellow-100 tracking-widest uppercase	">
            Wellbenix
          </h1>
        </Link>
      </div>
      <div className="space-x-4 text-sm ">
        <Link to="/about">
          <a
            className=" hover:underline hover:text-gray-100 tracking-wider"
            href="#d"
          >
            About us
          </a>
        </Link>
        <Link to="/contact">
          <a
            className=" hover:underline hover:text-gray-100 tracking-wider"
            href="#f"
          >
            Contact
          </a>
        </Link>
        <Link to="/service">
          <a
            className=" hover:underline hover:text-gray-100 tracking-wider"
            href="#f"
          >
            Service
          </a>
        </Link>
      </div>
    </div>
  );
}
