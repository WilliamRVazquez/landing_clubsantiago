import React from "react";
import Image from "next/image";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { FaUmbrellaBeach } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiBuilding } from "react-icons/bi";
import { PiMedalThin } from "react-icons/pi";

import clubsantiagop from "@/app/images/clubsantiago_playa.png";
import costalStay from "@/app/images/logo.png";
import reviews from "@/app/images/reviews.jpg";
import review1 from "@/app/images/review1.png";
import review2 from "@/app/images/review2.png";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
        <div className="flex relative text-center mt-10">
          <Image
            className="w-full h[500px] md:h-[700px]"
            src={clubsantiagop}
            alt="banner"
          />
          <div className="w-full h-full absolute bg-blue-600 bg-opacity-60 flex flex-col items-center justify-center px-5 gap-5">
            <h1 className="text-white font-bold text-2xl md:text-5xl drop-shadow">
              Rental & Property management?
            </h1>
            <p className="text-white font-semibold text-xl md:text-3xl drop-shadow">
              You’re in the right place!
            </p>
          </div>
        </div>
      </header>
      <div className="w-full mx-auto">
        <div className="">
          <div className="container mx-auto flex flex-col-reverse md:flex-row justify-center items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-5 uppercase md:text-3xl">
                Schedule a Consultation
              </h2>
              <p>
                Explore Your Perfect Retreat: Vacation Property Management and
                Rental Experts Ensuring the Prosperity of Your Investment. Enjoy
                a Carefree Lifestyle with Us!
              </p>
            </div>
            <Image className="h-full" src={costalStay} alt="Quienes somos" />
          </div>
        </div>
        <div className="md:bg-blue-400 md:py-2 md:my-5">
          <div className="container mx-auto my-10 w-full ">
            <h2 className="text-2xl font-semibold mb-5 text-white drop-shadow uppercase md:text-3xl">
              Benefits of Choosing Us
            </h2>
            <div className="md:flex md:flex-row md:gap-5">
              <div className="my-5 flex justify-center md:w-full md:bg-white rounded-md">
                <div className="p-5 flex flex-col text-center items-center gap-5 shadow-lg w-full">
                  <div>
                    <FaUmbrellaBeach className="text-5xl drop-shadow" />
                  </div>
                  <div>
                    <h3 className="text-4xl font-semibold">#1</h3>
                  </div>
                  <div>
                    <p>Group at Club Santiago, Manzanillo.</p>
                  </div>
                </div>
              </div>
              <div className="my-5 flex justify-center md:w-full md:bg-white rounded-md">
                <div className="p-5 flex flex-col text-center items-center gap-5 shadow-lg w-full">
                  <div>
                    <AiOutlineClockCircle className="text-5xl drop-shadow" />
                  </div>
                  <div>
                    <h3 className="text-4xl font-semibold">+10</h3>
                  </div>
                  <div>
                    <p>
                      Years of Experience in Rental and Property Management.
                    </p>
                  </div>
                </div>
              </div>
              <div className="my-5 flex justify-center md:w-full md:bg-white rounded-md">
                <div className="p-5 flex flex-col text-center items-center gap-5 shadow-lg w-full">
                  <div>
                    <BiBuilding className="text-5xl drop-shadow" />
                  </div>
                  <div>
                    <h3 className="text-4xl font-semibold">10+</h3>
                  </div>
                  <div>
                    <p>Managing 10+ Properties</p>
                  </div>
                </div>
              </div>
              <div className="my-5 flex justify-center md:w-full md:bg-white rounded-md">
                <div className="p-5 flex flex-col text-center items-center gap-5 shadow-lg w-full">
                  <div>
                    <PiMedalThin className="text-5xl  drop-shadow" />
                  </div>
                  <div>
                    <h3 className="text-4xl font-semibold">#1</h3>
                  </div>
                  <div>
                    <p>Ranked #1 for Best Customer Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="container mx-auto">
            <h2 className="text-2xl font-semibold mb-5 uppercase md:text-3xl">Reviews</h2>
            <div className="md:flex md:flex-row md:justify-center">
              <div className="md:w-1/3">
                <Image
                  src={review1}
                  alt="Review"
                  className="shadow-lg rounded-md my-4"
                />
                <Image
                  src={review2}
                  alt="Review"
                  className="shadow-lg rounded-md my-4"
                />
              </div>
              <Image
                src={reviews}
                alt="Reviews"
                className="shadow-lg rounded-md my-4 md:h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
