import React, { useState } from "react";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

function NavSm() {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It all Starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
            Bangalore
            <BiChevronDown />
          </span>
        </div>
        <div className="w-8 h-8">
          <BiSearch className="h-full w-full" />
        </div>
      </div>
    </>
  );
}
function NavMd() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div className="w-10 h-10">
        <Link to={`/`}>
          <img
            className="w-full h-full"
            src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
        <BiSearch />
        <input
          type="search"
          className="w-full bg-transparent border-none focus:outline-none"
          placeholder="Search for movies, events, place, sports and activities"
          onInput={(e) => setInput(e.target.value.trim())}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              navigate(input === "" ? "" : `/search/${input}`);
            }
          }}
        />
        <Link to={input === "" ? "" : `/search/${input}`}>
          <button className="w-full h-full text-white bg-red-600 rounded px-2 py-1">
            Search
          </button>
        </Link>
      </div>
    </>
  );
}
function NavLg() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleNavigate = () => {
    // Navigate to the login page
    navigate("/");
  };
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-10 h-10">
            <Link to={`/`}>
              <img
                className="w-full h-full"
                src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for movies, events, place, sports and activities"
              onInput={(e) => setInput(e.target.value.trim())}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  navigate(input === "" ? "" : `/search/${input}`);
                }
              }}
            />
            <Link to={input === "" ? "" : `/search/${input}`}>
              <button className="w-full h-full text-white bg-red-600 rounded px-2 py-1">
                Search
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
            Bangalore NCR
            <BiChevronDown />
          </span>
          <button
            className="bg-red-600 text-white px-2 py-1 text-sm rounded"
            onClick={handleNavigate}
          >
            Sign in
          </button>
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
