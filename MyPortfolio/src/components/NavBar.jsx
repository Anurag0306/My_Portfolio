import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="h-16 z-50 flex items-center sticky top-0 w-full backdrop-blur-lg bg-black shadow-[0_4px_15px_rgba(255,140,66,0.3)] border-b border-[#FF8C42]/40">
      
      {/* Navigation Links (Centered) */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <ul className="flex gap-10">
          <li>
            <Link
              className="font-semibold text-lg bg-gradient-to-r from-[#C0C0C0] to-[#E0E0E0] text-transparent bg-clip-text transition-all duration-300 
                hover:text-white hover:drop-shadow-[0px_0px_12px_#FF8C42] relative group"
              to="/"
            >
              Home
              {/* Animated Underline */}
              {/* <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#FF8C42] transition-all duration-500 ease-in-out group-hover:w-full group-hover:h-[3px] group-hover:drop-shadow-[0px_0px_6px_#FF8C42]"></span> */}
            </Link>
          </li>
          <li>
            <Link
              className="font-semibold text-lg bg-gradient-to-r from-[#C0C0C0] to-[#E0E0E0] text-transparent bg-clip-text transition-all duration-300 
                hover:text-white hover:drop-shadow-[0px_0px_12px_#FF8C42] relative group"
              to="/about"
            >
              About
              {/* <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#FF8C42] transition-all duration-500 ease-in-out group-hover:w-full group-hover:h-[3px] group-hover:drop-shadow-[0px_0px_6px_#FF8C42]"></span> */}
            </Link>
          </li>
          <li>
            <Link
              className="font-semibold text-lg bg-gradient-to-r from-[#C0C0C0] to-[#E0E0E0] text-transparent bg-clip-text transition-all duration-300 
                hover:text-white hover:drop-shadow-[0px_0px_12px_#FF8C42] relative group"
              to="/projects"
            >
              Projects
              {/* <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#FF8C42] transition-all duration-500 ease-in-out group-hover:w-full group-hover:h-[3px] group-hover:drop-shadow-[0px_0px_6px_#FF8C42]"></span> */}
            </Link>
          </li>
          <li>
            <Link
              className="font-semibold text-lg bg-gradient-to-r from-[#C0C0C0] to-[#E0E0E0] text-transparent bg-clip-text transition-all duration-300 
                hover:text-white hover:drop-shadow-[0px_0px_12px_#FF8C42] relative group"
              to="/contact"
            >
              Contact
              {/* <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#FF8C42] transition-all duration-500 ease-in-out group-hover:w-full group-hover:h-[3px] group-hover:drop-shadow-[0px_0px_6px_#FF8C42]"></span> */}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
