import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //early return
  if (!isMenuOpen) return null;
  return (
    <div className=" shadow-lg px-4 py-2 w-52 mr-2">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Sorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold mt-3">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Music</li>
      </ul>
      <h1 className="font-bold mt-3">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Music</li>
      </ul>
    </div>
  );
};

export default Sidebar;
