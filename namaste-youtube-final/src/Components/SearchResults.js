import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  BASE_URL,
  MockData,
  REACT_APP_GOOGLE_API_KEY_1,
} from "../utils/constants";
import SearchResultVideoCard from "./SearchResultVideoCard";
import { setIsLoading } from "../utils/appSlice";

const SearchResults = () => {
  const [searchQuery] = useSearchParams();
  const dispatch = useDispatch();

  const [result, setResult] = useState([]);

  useEffect(() => {
    getResult();
  }, [searchQuery]);
  const getResult = async () => {
    dispatch(setIsLoading(true));

    const response = await fetch(
      BASE_URL +
        `/search?part=snippet&maxResults=50&type=video&q=${searchQuery.get(
          "search_query"
        )}&videoDuration=medium&key=` +
        REACT_APP_GOOGLE_API_KEY_1
    );
    const data = await response.json();
    setResult(data.items);
    console.log(data.items);
    dispatch(setIsLoading(false));
  };
  if (result.length === 0) return <h1>Loading</h1>;
  return (
    <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white dark:bg-black">
      <div className="grid grid-cols-1 gap-2 p-5">
        {result?.map((item) => {
          return (
            <SearchResultVideoCard
              key={item?.id?.videoId}
              videoId={item?.id?.videoId}
              video={item?.snippet}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
