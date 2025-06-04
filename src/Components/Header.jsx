import React, { useEffect, useState } from "react";
import Logo from "/logo.png";
import { FaOpencart } from "react-icons/fa";

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
      <header className="h-30 grid items-center grid-cols-[1fr_1fr] bg-[#ffe4e2]">
        <img src={Logo} alt="Logo" className="h-30 !pl-10" />
        <span className="absolute right-10 flex gap-10 items-center">
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

      <section className="w-full h-10 bg-[black] text-[#ffe7ec] flex items-center justify-center">
        <p>{currentOffer}</p>
      </section>
    </>
  );
};

export default Header;
