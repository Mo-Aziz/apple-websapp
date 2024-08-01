import React from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const navItems = ["phone", "tablet", "mac", "watch", "tv", "music", "support"];
const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple logo" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {" "}
          {navLists.map((nav, index) => (
            <div
              key={index}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              <p>{nav}</p>
            </div>
          ))}
        </div>
        <div className="flex  items-baseline  gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="Search" width={20} height={20} />
          <img src={bagImg} alt="bag" width={20} height={20} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
