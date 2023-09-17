import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { MockData } from "../utils/constants";
import SearchResultVideoCard from "./SearchResultVideoCard";
import { setIsLoading } from "../utils/appSlice";

const SearchResults = () => {
  const [searchQueryN] = useSearchParams();
  const searchInput = useRef(null);
  // const [dispatch] = useDispatch();
  const [result, setResult] = useState([]);
  // const inputElement = document.getElementById("searchInput");
  // inputElement.blur();
  useEffect(() => {
    getResult();
  }, []);
  const getResult = async () => {
    // dispatch(setIsLoading(true));

    setResult(MockData);
    console.log(MockData);
    // dispatch(setIsLoading(false));
  };
  if (result.length === 0) return <h1>Loading</h1>;
  return (
    <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white dark:bg-black">
      <div className="grid grid-cols-1 gap-2 p-5">
        {result?.map((item) => {
          if (item?.type !== "video") return false;
          let video = item?.video;
          return <SearchResultVideoCard key={video.videoId} video={video} />;
        })}
      </div>
    </div>
  );
};

export default SearchResults;
