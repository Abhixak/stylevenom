import React from "react";
import Logo from "/logo.png";
import { FaOpencart } from "react-icons/fa";
const Header = () => {
  return (
    <>
      <header className="h-30 grid items-center grid-cols-[1fr_1fr] bg-[#ffe4e2]">
        <img src={Logo} alt="Logo" className="h-30 !pl-10" />
        <span absolute className="absolute right-10 flex gap-10 items-center">
          <FaOpencart className="text-[2em] transition duration-300 ease-in-out hover:text-[#574141] text-[#bd8180] cursor-pointer" />
          <span className="border-2 border-[#976973] flex text-[#574141] font-bold items-center justify-center bg-[#ffe7ec] rounded-4xl">
            <button className="hover:text-[#f3eed9] transition duration-300 ease-in-out cursor-pointer hover:bg-[#976973] !p-4 rounded-4xl w-[100px]">
              Login
            </button>
            <button className="hover:text-[#f3eed9] transition duration-300 ease-in-out cursor-pointer hover:bg-[#976973] !p-4 rounded-4xl w-[100px]">
              Register
            </button>
          </span>
        </span>
      </header>
    </>
  );
};

export default Header;
