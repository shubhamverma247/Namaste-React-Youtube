import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sugestions, setSuggestions] = useState([]);
  const [showsuggestions, setShowSuggestions] = useState(false);
  useEffect(() => {
    //make an api call after every key press
    //but if the diff btw 2 api call in <200ms
    //decline the api call
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
  };
  const dispatch = useDispatch();
  const togleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => togleMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/128/11480/11480420.png"
          alt="menu"
        />
        {/* <Link to="/"> */}
        <img
          className="h-8 mx-2"
          alt="logo"
          src="https://www.pngkey.com/png/detail/314-3149308_youtube-podcast-icon-link-youtube-new-logo-png.png"
        />
        {/* </Link> */}
      </div>
      <div className="col-span-10 ">
        <div className="">
          <input
            className="border border-gray-400 w-4/12 rounded-tl-xl px-3 rounded-bl-xl"
            value={searchQuery}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
          />
          <button className="border border-gray-400 bg-gray-200 px-2 rounded-tr-xl rounded-br-xl">
            🔍
          </button>
        </div>
        {showsuggestions && (
          <div className="fixed  py-2 px-2 w-96 shadow-lg rounded-lg border border-gray-300">
            <ul className="">
              {sugestions.map((item) => (
                <li className="py-2 px-1 shadow-sm hover:bg-gray-100">
                  🔍 {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1 ">
        <img
          className="h-8 "
          alt="usericon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
