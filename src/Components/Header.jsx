import React, { useEffect, useState } from "react";
import Logo from "/logo.png";
import { FaOpencart } from "react-icons/fa";
import { AiOutlineNotification } from "react-icons/ai";
import { LuUserRound, LuUserRoundCheck, LuUserRoundMinus } from "react-icons/lu";
import { TfiHeart } from "react-icons/tfi";
import { CgMenuRightAlt } from "react-icons/cg";
import { RiCloseLargeLine } from "react-icons/ri";

const Header = () => {
  const offers = [
    "🎁 Flat 20% Off on First Purchase!",
    "🔥 Get Freebies on every purchase above ₹499!",
    "🚚 Free Shipping on Orders Over ₹499!",
    "💳 Earn Venom drops on every purchase",
    "🛍️ Play games to earn Venom drops",
    "🎉 Weekend Sale - Upto 50% Off!",
  ];

  const [currentOffer, setCurrentOffer] = useState(offers[0]);

  useEffect(() => {
    let index = 1;
    const interval = setInterval(() => {
      setCurrentOffer(offers[index]);
      index = (index + 1) % offers.length;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className="h-15 sm:h-20 md:h-25 grid items-center grid-cols-[1fr_1fr] bg-gray-200 ">
        {/* bg-[#ffe4e2] */}
        <img src={Logo} alt="Logo" className="h-15 sm:h-20 md:h-25 !pl-5 sm:!pl-7 md:!pl-10" />
        <span className="absolute right-5 sm:right-7 md:right-10 flex gap-5 sm:gap-7 md:gap-10 items-center">
          <TfiHeart className="text-[1.2em] sm:text-[1.5em] md:text-[1.7em] transition duration-300 ease-in-out text-[#e0344b] cursor-pointer" />
          <FaOpencart className="text-[1.2em] sm:text-[1.5em] md:text-[1.7em] transition duration-300 ease-in-out text-[#008ab5] cursor-pointer" />
          {/* <span className="border-2 border-[#976973] flex text-[#574141] font-bold items-center justify-center bg-[#ffe7ec] rounded-4xl"> */}
          
          <AiOutlineNotification className="text-[1.2em] sm:text-[1.5em] md:text-[1.7em] transition duration-300 ease-in-out text-[#008ab5] cursor-pointer" />
          <LuUserRoundMinus className="text-[1.2em] sm:text-[1.5em] md:text-[1.7em] transition duration-300 ease-in-out text-[#e0344b] cursor-pointer" />
          <LuUserRound className="hidden text-[1.2em] sm:text-[1.5em] md:text-[1.7em] transition duration-300 ease-in-out hover:text-[#008ab5] text-[#bd8180] cursor-pointer" />
          <LuUserRoundCheck className="hidden text-[1.2em] sm:text-[1.5em] md:text-[1.7em] transition duration-300 ease-in-out text-[#305100] cursor-pointer" />
{/*         
          <CgMenuRightAlt className="md:hidden text-[1.2em] sm:text-[1.5em] md:text-[1.7em] transition duration-300 ease-in-out text-[#574141] cursor-pointer" />
          <RiCloseLargeLine className="hidden text-[1.2em] sm:text-[1.5em] md:text-[1.7em] transition duration-300 ease-in-out text-[#574141] cursor-pointer" />
         */}
        </span>
      </header>


      
      
      <section className="text-[0.7em] sm:text-[1em] w-full h-7 sm:h-10 bg-[black] text-[#ffe7ec] flex items-center justify-center">
        <p >{currentOffer}</p>
      </section>
    </>
  );
};

export default Header;
