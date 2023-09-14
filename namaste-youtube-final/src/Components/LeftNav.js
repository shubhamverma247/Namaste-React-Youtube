import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { categories } from "../utils/constants";
import LeftNavMenuItem from "./LeftNavMenuItem";

const LeftNav = () => {
  const selectedCategory = useSelector((store) => store.app.selectedCategory);
  const mobileMenu = useSelector((store) => store.app.isMobileMenu);
  useEffect(() => {}, [selectedCategory]);
  return (
    <div
      className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
        mobileMenu ? "translate-x-[0px]" : ""
      }`}>
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <div key={item.name}>
              <LeftNavMenuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                name={item.name}
                type={item.type}
                className={`${
                  selectedCategory === item.name ? "bg-white/[0.15]" : ""
                }`}
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
