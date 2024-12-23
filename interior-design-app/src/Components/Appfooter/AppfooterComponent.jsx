import React from "react";
import { GiBarracksTent } from "react-icons/gi";
import { RiCustomerService2Line } from "react-icons/ri";
import { GrTicket } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";
import {
  FaFacebook,
  FaInstagramSquare,
  FaPinterest,
  FaLinkedin,
  FaYoutubeSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const AppFooter = () => {
  return (
    <>
      <div className="w-full bg-darkBackground-800 py-10 hidden md:hidden lg:block">
        <div className="w-full h-20 flex text-white gap-3 px-32 ">
          <GiBarracksTent fontSize={50} />
          <div className="mt-5 flex gap-2">
            <h3 className="font-bold text-lg">Book Your Design</h3>
            <p className="text-lg">
              Explore various and aesthetics design for your homew and book.
            </p>
          </div>
          <button className="w-32 h-10 bg-red-700 ml-32 mt-3 rounded-sm cursor-pointer">
            Contact Today!
          </button>
        </div>

        <div className="bg-darkBackground-700 w-full mx-0 px-32 flex justify-around text-gray-500 ">
          <div className="hover:text-white cursor-pointer flex flex-col items-center gap-1 ">
            <RiCustomerService2Line fontSize={65} />
            <h3>24/7 CUSTOMER CARE</h3>
          </div>
          <div className="hover:text-white cursor-pointer flex flex-col items-center  gap-1">
            <GrTicket fontSize={65} />
            <h3>RESEND BOOKING CONFIRMATION</h3>
          </div>
          <div className="hover:text-white cursor-pointer flex flex-col items-center  gap-1">
            <TfiEmail fontSize={65} />
            <h3>NEWSLETTER</h3>
          </div>
        </div>

        <div className="flex flex-col gap-3  text-gray-500 px-32 py-10">
          <h2 className="text-gray-300">COUNTRIES WE DELIVER OUR SERVICE</h2>
          <p>
            <span className="hover:text-white">India</span>
            <span className="hover:text-white">Indonasia</span> |
            <span className="hover:text-white"> Singapur</span> |
            <span className="hover:text-white"> UAE</span> |
            <span className="hover:text-white"> Sri Lanka</span> |
            <span className="hover:text-white"> West Indies</span>
          </p>
          <h2 className="text-gray-300">Help</h2>
          <p>
            <span className="hover:text-white">About Us</span> |
            <span className="hover:text-white"> Contact US</span> |
            <span className="hover:text-white"> Site Map</span> |
            <span className="hover:text-white"> FAQs</span> |
            <span className="hover:text-white"> Terms and Conditions</span> |
            <span className="hover:text-white"> Privacy Policy</span>
          </p>
          <h2 className="text-gray-300">DESIGNHUB EXCLUSIVES</h2>
          <p>
            <span className="hover:text-white">Vinatge</span> |
            <span className="hover:text-white"> Classic</span> |
            <span className="hover:text-white"> Modern</span> |
            <span className="hover:text-white"> Village Aesthetics</span> |
            <span className="hover:text-white"> Gift Cards</span> |
            <span className="hover:text-white"> Designs</span> |
            <span className="hover:text-white"> Offers</span>
          </p>
        </div>

        <div class="flex items-center justify-center space-x-4">
          <div class="flex-1 h-px bg-gray-300"></div>
          <span class="text-gray-500 font-medium">
            <h1 className="mx-3 text-4xl font-extrabold bg-gradient-to-br from-red-500 via-red-300 to-white bg-clip-text text-transparent">
              DesignHub
            </h1>
          </span>
          <div class="flex-1 h-px bg-gray-300"></div>
        </div>

        <div className="text-gray-500 flex flex-row w-full justify-center text-5xl my-10 gap-2">
          <div className="h-10 w-10 rounded-full overflow-hidden flex justify-center items-center hover:text-white">
            <FaFacebook />
          </div>
          <div className="h-10 w-10 rounded-full overflow-hidden flex justify-center items-center hover:text-white">
            <FaSquareXTwitter />
          </div>
          <div className="h-10 w-10 rounded-full overflow-hidden flex justify-center items-center hover:text-white">
            <FaInstagramSquare />
          </div>
          <div className="h-10 w-10 rounded-full overflow-hidden flex justify-center items-center hover:text-white">
            <FaYoutubeSquare />
          </div>
          <div className="h-10 w-10 rounded-full overflow-hidden flex justify-center items-center hover:text-white">
            <FaPinterest />
          </div>
          <div className="h-10 w-10 rounded-full overflow-hidden flex justify-center items-center hover:text-white">
            <FaLinkedin />
          </div>
        </div>

        <footer className="flex flex-col text-center text-gray-500 text-sm">
          <p>Copyright 2024 @ DesignHub Pvt. Ltd. All Rights Reserved.</p>
          <p>
            The content and images used on this site are copyright protected and
            copyrights vests with the respective owners. The usage of the
            content and images on this website is intended to promote the works
            and no endorsement of the artist shall be implied. Unauthorized use
            is prohibited and punishable by law.
          </p>
        </footer>
      </div>
    </>
  );
};

export default AppFooter;
