import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import LeftNav from "./LeftNav";

const Body = () => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex flex-row h-[calc(100%-56px)] bg-black">
        <LeftNav />
        <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
