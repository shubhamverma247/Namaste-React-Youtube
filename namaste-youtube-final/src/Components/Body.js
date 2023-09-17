import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import LeftNav from "./LeftNav";

const Body = () => {
  return (
    <div className="flex flex-col h-full" id="innerDiv">
      <Header />
      <div className="flex flex-row h-[calc(100%-56px)] bg-white dark:bg-black">
        <LeftNav />
        <>
          <Outlet />
        </>
      </div>
    </div>
  );
};

export default Body;
