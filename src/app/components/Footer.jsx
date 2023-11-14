import React from "react";
import Link from "next/link";

import { BsPhone, BsFacebook } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full bg-gray-600">
      <div className="container w-full mx-auto px-3 md:flex md:flex-row md:justify-between">
        <div className="text-white my-3 md:flex md:flex-col md:gap-5">
          <div>
            <h3 className="font-semibold md:font-bold text-lg">Direction.</h3>
            <div className="flex gap-1 items-center">
              <FaLocationDot />
              <span>Club Santiago, 28868 Manzanillo, Col.</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg md:font-bold">Email</h3>
            <div className="flex gap-1 items-center">
              <HiOutlineMail />
              <span>gomezclubsantiago@gmail.com</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg md:font-bold">Phone</h3>
            <div className="flex gap-1 items-center">
              <BsPhone />
              <span>+52 314 181 6088</span>
            </div>
          </div>
        </div>
        <div className="text-white my-3">
          <h3 className="font-semibold text-lg">Other Links</h3>
          <ul>
            <li>
              <Link href="" className="underline hover:no-underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="" className="underline hover:no-underline">
                About us
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-white my-3">
          <h3 className="font-semibold text-lg text-white">Social media</h3>
          <div className="flex gap-3 md:justify-center py-2">
            <Link href="#" className="text-3xl text-white"> <BsFacebook /></Link>
            <Link href="#" className="text-3xl text-white"> <AiFillInstagram /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
