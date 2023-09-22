import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";
import ytdarklogo from "../images/ytdarklogo.jpg";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import Loader from "../shared/Loader";
import { mobileMenuT, setTheme } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API, header } from "../utils/constants";
import { MdDarkMode, MdLightMode } from "react-icons/md";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggesstions, setShowSuggesstions] = useState(false);
  const [suggesstions, setSuggestions] = useState([]);
  const mobileMenu = useSelector((store) => store.app.isMobileMenu);
  const loading = useSelector((store) => store.app.isLoading);
  const isDark = useSelector((store) => store.app.isDark);
  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

  // useEffect(() => {
  //   //make an api call after every key press
  //   //but if the diff btw 2 api call in <200ms
  //   //decline the api call
  //   const timer = setTimeout(() => {
  //     getSearchSuggestions();
  //   }, 200);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [searchQuery]);

  // const getSearchSuggestions = async () => {
  //   const data = await fetch(YOUTUBE_SEARCH_API + searchQuery, {
  //     method: "GET",
  //     withCredentials: true,
  //     crossorigin: true,
  //     mode: "no-cors",
  //     body: JSON.stringify(data),
  //   });
  //   const json = await data.json();

  //   setSuggestions(json[1]);
  // };

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      // setShowSuggesstions(false);
      navigate(`/results?search_query=${searchQuery}`);
    }
  };
  const mobileMenuToggle = () => {
    dispatch(mobileMenuT());
  };

  const themeToggle = () => {
    const el = document.getElementById("innerDiv");
    if (el.classList.contains("dark")) {
      dispatch(setTheme());
      el.classList.remove("dark");
    } else {
      dispatch(setTheme());
      el.classList.add("dark");
    }
  };
  return (
    <div className="sticky top-0 z-30 flex flex-row items-center justify-between h-18 py-3 px-4 md:px-5 bg-white dark:bg-black shadow-md">
      {loading && <Loader />}

      <div className="flex h-10 items-center">
        {pageName !== "watch" && (
          <div
            className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
            onClick={mobileMenuToggle}>
            {mobileMenu ? (
              <CgClose className="text-black dark:text-white text-xl" />
            ) : (
              <SlMenu className="text-black dark:text-white text-xl" />
            )}
          </div>
        )}
        <Link to="/" className="flex h-5 items-center">
          {" "}
          <div className="flex h-5 items-center">
            {" "}
            {isDark ? (
              <img
                className="h-full hidden md:block"
                src={ytLogo}
                alt="Youtube"
              />
            ) : (
              <img
                className="h-full hidden md:block"
                src={ytdarklogo}
                alt="Youtube"
              />
            )}
            <img
              className="h-full md:hidden"
              src={ytLogoMobile}
              alt="Youtube"
            />
          </div>
        </Link>
      </div>
      <div className="group flex items-center">
        <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-gray-300 dark:border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
          <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
            <IoIosSearch className="text-black dark:text-white text-xl" />
          </div>
          <input
            type="text"
            className="bg-transparent outline-none text-black dark:text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
            placeholder="Search"
            id="searchInput"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            // onFocus={() => {

            // }}
            // onBlur={() => {
            //   setShowSuggesstions(false);
            // }}
            onKeyUp={searchQueryHandler}
          />
          {showSuggesstions && (
            <>
              <ul className="fixed text-black dark:text-white bg-white dark:bg-black w-[180px]  md:w-[300px] lg:w-[540px] mt-[35px] md:mt-[44px]  rounded-xl">
                {suggesstions.map((item, index) => (
                  <li
                    className="cursor-pointer"
                    key={index}
                    onClick={() => {
                      setShowSuggesstions(false);
                      navigate(`/results?search_query=${item}`);
                    }}>
                    <div className="flex px-2 py-2">
                      <IoIosSearch className="text-black dark:text-white text-xl mt-1" />
                      <span className="px-2 font-bold">{item}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <button
          className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-gray-300 rounded-r-3xl bg-gray-100 dark:bg-white/[0.1] dark:border-[#303030]"
          onClick={() => searchQueryHandler("searchButton")}>
          <IoIosSearch className="text-black dark:text-white text-xl" />
        </button>
      </div>
      <div className="flex items-center">
        <div
          className="flex items-center justify-center h-10 w-10 rounded-full mr-2 hover:bg-[#303030]/[0.6]"
          onClick={themeToggle}>
          {isDark ? (
            <MdLightMode className="text-black dark:text-white text-xl cursor-pointer" />
          ) : (
            <MdDarkMode className="text-black dark:text-white text-xl cursor-pointer" />
          )}
        </div>
        <div className="hidden md:flex">
          <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <RiVideoAddLine className="text-black dark:text-white text-xl cursor-pointer" />
          </div>
          <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <FiBell className="text-black dark:text-white text-xl cursor-pointer" />
          </div>
        </div>
        <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
          <img
            alt="userIcon"
            src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
