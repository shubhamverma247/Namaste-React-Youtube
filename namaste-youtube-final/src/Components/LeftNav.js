import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { categories } from "../utils/constants";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { useLocation } from "react-router-dom";

const LeftNav = () => {
  const selectedCategory = useSelector((store) => store.app.selectedCategory);
  const mobileMenu = useSelector((store) => store.app.isMobileMenu);
  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

  useEffect(() => {}, [selectedCategory]);
  return (
    <div
      className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-white z-20 dark:bg-black text-black dark:text-white absolute md:relative  translate-x-[-240px] md:translate-x-0 transition-all ${
        mobileMenu ? "translate-x-[0px]" : ""
      } ${pageName === "watch" ? "md:translate-x-[-240px]" : ""}`}>
      <div className="flex px-5 flex-col ">
        {categories.map((item) => {
          return (
            <div key={item.name}>
              <LeftNavMenuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                name={item.name}
                type={item.type}
                className={
                  pageName === "results"
                    ? ""
                    : selectedCategory === item.name
                    ? "bg-black/[0.15] dark:bg-white/[0.15]"
                    : ""
                }
              />
              {item.divider && <hr className="my-5 border-white/[0.2]" />}
            </div>
          );
        })}
        <hr className="my-5 border-white/[0.2]" />
      </div>
    </div>
  );
};

export default LeftNav;
