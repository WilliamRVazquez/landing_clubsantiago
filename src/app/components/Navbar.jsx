"use client";
import React, { useState } from "react";
import Link from "next/link";

import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-10 bg-white">
      <div className="md:my-2 md:container md:mx-auto md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <div>
            <h1>Club Santiago, Manzanillo, Colima.</h1>
            <h2>COASTAL STAYS GOMEZ</h2>
          </div>
          <span
            className="text-3xl cursor-pointer mx-2 md:hidden block"
            onClick={toggleMenu}
          >
            <RxHamburgerMenu />
          </span>
        </div>
        <ul
          className={`md:flex md:gap-5 z-[-1] md:z-auto md:static absolute bg-white w-full md:w-auto md:opacity-100 ${
            isMenuOpen ? "opacity-100 left-0" : "left-[800px]"
          } transition-all ease-linear duration-400`}
        >
          <li className="w-full md:w-auto">
            <Link
              className="flex w-full py-3 md:px-5 md:py-5 hover:text-blue-500 font-semibold md:hover:bg-blue-500 md:hover:text-white rounded-sm"
              href="#"
            >
              Home
            </Link>
          </li>
          <li className="w-full md:w-auto md:mx-5">
            <Link
              className="flex w-full py-3 md:px-5 md:py-5 hover:text-blue-500 font-semibold md:hover:bg-blue-500 md:hover:text-white rounded-sm"
              href="#"
            >
              About us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
