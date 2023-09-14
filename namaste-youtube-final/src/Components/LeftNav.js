import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { categories } from "../utils/constants";
import LeftNavMenuItem from "./LeftNavMenuItem";

const LeftNav = () => {
  const selectedCategory = useSelector((store) => store.app.selectedCategory);
  useEffect(() => {}, [selectedCategory]);
  return (
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
  );
};

export default LeftNav;
