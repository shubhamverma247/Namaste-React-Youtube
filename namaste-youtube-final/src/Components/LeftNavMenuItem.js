import React from "react";
import { useDispatch } from "react-redux";
import { selectCategory } from "../utils/appSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
const LeftNavMenuItem = ({ text, icon, className, name, type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];
  const clickHandler = (name, type) => {
    if (pageName === "results") {
      if (type === "category") {
        dispatch(selectCategory(name));
        navigate("/");
      }
      if (type === "home") {
        dispatch(selectCategory(name));
        navigate("/");
      }
    } else {
      switch (type) {
        case "category":
          return dispatch(selectCategory(name));
        case "home":
          return dispatch(selectCategory(name));
        case "menu":
          return false;
        default:
          break;
      }
    }
  };
  return (
    <div
      className={
        "text-black dark:text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-black/[0.15] dark:hover:bg-white/[0.15] " +
        className
      }
      onClick={() => clickHandler(name, type)}>
      <span className="text-xl mr-5">{icon}</span>
      {text}
    </div>
  );
};

export default LeftNavMenuItem;
