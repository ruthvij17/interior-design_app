import React, { useContext, useState } from "react";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../Context/UserProvider";

function NavSm() {
  return (
    <>
      <div className="w-10 h-10">
        <Link to={`/`} className="flex flex-row">
          <img className="w-full h-full" src="/logo.jpeg" alt="logo" />
          <h1 className="mx-3 text-4xl font-extrabold bg-gradient-to-br from-red-500 via-red-300 to-white bg-clip-text text-transparent">
            DesignHub
          </h1>
        </Link>
      </div>
    </>
  );
}
function NavMd() {
  const navigate = useNavigate();
  let user = useContext(userContext);
  const handleNavigate = () => {
    // Navigate to the login page
    navigate("/");
  };
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-10 h-10">
            <Link to={`/`} className="flex flex-row">
              <img className="w-full h-full" src="/logo.jpeg" alt="logo" />
              <h1 className="mx-3 text-4xl font-extrabold bg-gradient-to-br from-red-500 via-red-300 to-white bg-clip-text text-transparent">
                DesignHub
              </h1>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
            Mangalore
            <BiChevronDown />
          </span>
          {(() => {
            if (!user) {
              <button
                className="bg-red-600 text-white px-2 py-1 text-sm rounded"
                onClick={handleNavigate}
              >
                Sign in
              </button>;
            }
          })()}
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}
function NavLg() {
  const navigate = useNavigate();
  let user = useContext(userContext);
  console.log("USER");
  console.log(user.user);
  const handleNavigate = () => {
    // Navigate to the login page
    navigate("/");
  };
  const handleNewDesign = () => {
    navigate("/designform");
  };
  const handlePayment = () => {
    navigate("/paymentdetails");
  };
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-10 h-10">
            <Link to={`/`} className="flex flex-row">
              <img className="w-full h-full" src="/logo.jpeg" alt="logo" />
              <h1 className="mx-3 text-4xl font-extrabold bg-gradient-to-br from-red-500 via-red-300 to-white bg-clip-text text-transparent">
                DesignHub
              </h1>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          {(() => {
            if (user.user) {
              if (user.user.u_id == user.admin) {
                return (
                  <>
                    <button
                      className="bg-green-600 text-white px-2 py-1 text-sm rounded"
                      onClick={handlePayment}
                    >
                      Payment details
                    </button>
                    <button
                      className="bg-red-600 text-white px-2 py-1 text-sm rounded"
                      onClick={handleNewDesign}
                    >
                      Add new Design
                    </button>
                  </>
                );
              }
            }
          })()}

          <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
            Mangalore
            <BiChevronDown />
          </span>
          {(() => {
            if (!user.user) {
              return (
                <button
                  className="bg-red-600 text-white px-2 py-1 text-sm rounded"
                  onClick={handleNavigate}
                >
                  Sign in
                </button>
              );
            }
          })()}
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}

const NavbarComponent = () => {
  return (
    <nav className="bg-darkBackground-700 px-4 py-3">
      {/* Small screen */}
      <div className="md:hidden">
        <NavSm />
      </div>

      {/* Medium screen */}
      <div className="hidden md:flex lg:hidden">
        <NavMd />
      </div>

      {/* Large screen */}
      <div className="hidden md:hidden lg:flex">
        <NavLg />
      </div>
    </nav>
  );
};

export default NavbarComponent;
