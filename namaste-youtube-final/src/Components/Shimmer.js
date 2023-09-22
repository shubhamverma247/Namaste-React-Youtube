import React from "react";

const Shimmer = () => {
  return (
    <>
      {Array(12)
        .fill([])
        .map((e, i) => {
          return (
            <div className="flex flex-col mb-8 " key={i}>
              <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
                <div className="w-full h-48  rounded-xl bg-64 bg-gray-300"></div>
              </div>
              <div className="flex text-black dark:text-white mt-3">
                <div className="flex items-start">
                  <div className="flex h-9 w-9 rounded-full overflow-hidden">
                    <div className="w-full h-9 border rounded-xl bg-64 custom-linear-gradient animate-pulse"></div>
                  </div>
                </div>
                <div className="flex flex-col ml-3 overflow-hidden">
                  <span className="text-sm font-bold line-clamp-2">
                    {" "}
                    <div className="w-60 h-5 border  bg-64 custom-linear-gradient animate-pulse"></div>
                  </span>
                  <span className="text-[12px] font-semibold mt-2 text-black/[0.7] dark:text-white/[0.7] flex items-center">
                    <div className="w-40 h-5 border  bg-64 custom-linear-gradient animate-pulse"></div>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Shimmer;
