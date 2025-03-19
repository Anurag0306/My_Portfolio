import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="h-16 z-50  flex items-center sticky top-0 bg-black shadow-md w-full">
        
        {/* Navigation Links (Centered) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 ">
          <ul className="flex gap-10 text-white ">
            <li>
              <Link className="text-orange-400 font-semibold bg-gray-500 rounded-5" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-orange-400 font-semibold" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="text-orange-400 font-semibold" to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="text-orange-400 font-semibold" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

      </div>
  );
};

export default NavBar;
