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
    <div className="w-full bg-darkBackground-800 py-10">
      {/* Top Section */}
      <div className="w-full flex flex-col lg:flex-row items-center text-white gap-6 lg:gap-3 px-5 lg:px-32">
        <GiBarracksTent fontSize={50} />
        <div className="text-center lg:text-left">
          <h3 className="font-bold text-lg">Book Your Design</h3>
          <p className="text-sm lg:text-lg">
            Explore various and aesthetic designs for your home and book.
          </p>
        </div>
        <button className="w-full lg:w-32 h-10 bg-red-700 rounded-sm cursor-pointer lg:ml-auto">
          Contact Today!
        </button>
      </div>

      {/* Icons Section */}
      <div className="bg-darkBackground-700 w-full mx-0 px-5 lg:px-32 flex flex-wrap justify-around gap-6 text-gray-500 py-6">
        <div className="hover:text-white cursor-pointer flex flex-col items-center gap-1">
          <RiCustomerService2Line fontSize={50} />
          <h3 className="text-sm text-center lg:text-base">
            24/7 CUSTOMER CARE
          </h3>
        </div>
        <div className="hover:text-white cursor-pointer flex flex-col items-center gap-1">
          <GrTicket fontSize={50} />
          <h3 className="text-sm text-center lg:text-base">
            RESEND BOOKING CONFIRMATION
          </h3>
        </div>
        <div className="hover:text-white cursor-pointer flex flex-col items-center gap-1">
          <TfiEmail fontSize={50} />
          <h3 className="text-sm text-center lg:text-base">NEWSLETTER</h3>
        </div>
      </div>

      {/* Text Links Section */}
      <div className="flex flex-col gap-3 text-gray-500 px-5 lg:px-32 py-10 text-center lg:text-left">
        <h2 className="text-gray-300">COUNTRIES WE DELIVER OUR SERVICE</h2>
        <p className="text-sm lg:text-base">
          <span className="hover:text-white">India</span> |
          <span className="hover:text-white"> Indonesia</span> |
          <span className="hover:text-white"> Singapore</span> |
          <span className="hover:text-white"> UAE</span> |
          <span className="hover:text-white"> Sri Lanka</span> |
          <span className="hover:text-white"> West Indies</span>
        </p>
        <h2 className="text-gray-300">Help</h2>
        <p className="text-sm lg:text-base">
          <span className="hover:text-white">About Us</span> |
          <span className="hover:text-white"> Contact Us</span> |
          <span className="hover:text-white"> Site Map</span> |
          <span className="hover:text-white"> FAQs</span> |
          <span className="hover:text-white"> Terms and Conditions</span> |
          <span className="hover:text-white"> Privacy Policy</span>
        </p>
        <h2 className="text-gray-300">DESIGNHUB EXCLUSIVES</h2>
        <p className="text-sm lg:text-base">
          <span className="hover:text-white">Vintage</span> |
          <span className="hover:text-white"> Classic</span> |
          <span className="hover:text-white"> Modern</span> |
          <span className="hover:text-white"> Village Aesthetics</span> |
          <span className="hover:text-white"> Gift Cards</span> |
          <span className="hover:text-white"> Designs</span> |
          <span className="hover:text-white"> Offers</span>
        </p>
      </div>

      {/* Divider Section */}
      <div className="flex items-center justify-center space-x-4 px-5 lg:px-32">
        <div className="flex-1 h-px bg-gray-300"></div>
        <h1 className="mx-3 text-2xl lg:text-4xl font-extrabold bg-gradient-to-br from-red-500 via-red-300 to-white bg-clip-text text-transparent">
          DesignHub
        </h1>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      {/* Social Icons Section */}
      <div className="flex justify-center text-gray-500 text-3xl lg:text-5xl my-6 gap-4">
        {[
          FaFacebook,
          FaSquareXTwitter,
          FaInstagramSquare,
          FaYoutubeSquare,
          FaPinterest,
          FaLinkedin,
        ].map((Icon, idx) => (
          <div
            key={idx}
            className="h-10 w-10 lg:h-12 lg:w-12 rounded-full overflow-hidden flex justify-center items-center hover:text-white"
          >
            <Icon />
          </div>
        ))}
      </div>

      {/* Footer Text */}
      <footer className="flex flex-col items-center text-gray-500 text-xs lg:text-sm text-center px-5 lg:px-32">
        <p>Copyright 2024 @ DesignHub Pvt. Ltd. All Rights Reserved.</p>
        <p>
          The content and images used on this site are copyright protected and
          copyrights vest with the respective owners. Unauthorized use is
          prohibited and punishable by law.
        </p>
      </footer>
    </div>
  );
};

export default AppFooter;
