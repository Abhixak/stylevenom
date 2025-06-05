import React from "react";
import { GrHomeOption } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";
import { IoGridOutline } from "react-icons/io5";
import { MdWaterDrop } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <ul className="fixed z-100 bottom-0 flex justify-evenly sm:justify-start items-center font-bold sm: gap-x-10 !pl-5 sm:!pl-7 md:!pl-10 sm:relative h-15 sm:h-15 md:h-12 w-full text-[#f2e5e7] text-[1.5em] sm:text-[1.2em] md:text-[1em] bg-[#457f8d] ">
        <li className="sm:hidden relative bg-[#457f8d] text-red-300">
          <GrHomeOption />
        </li>
        <li className="hidden sm:block">HOME</li>
        <li className="sm:hidden">
          <IoGridOutline />
        </li>
        <li className="hidden sm:block">CATEGORIES</li>{" "}
        <li className="sm:hidden">
          <IoIosSearch />
        </li>
        <li className="hidden sm:block">SEARCH</li>
        <li className="sm:hidden">
          <MdWaterDrop />
        </li>
        <li className="hidden sm:block">VENOM DROPS</li>
      </ul>
    </>
  );
};

export default Navbar;
