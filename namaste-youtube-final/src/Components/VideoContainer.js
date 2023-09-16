import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  YOUTUBE_VIDEOS_API,
  BASE_URL,
  options,
  MockData,
} from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { setIsLoading } from "../utils/appSlice";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();
  const selectedCategory = useSelector((store) => store.app.selectedCategory);
  useEffect(() => {
    getVideos();
  }, [selectedCategory]);

  const getVideos = async () => {
    dispatch(setIsLoading(true));

    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(MockData);
    // const dataRapid = await fetch(
    //   `${BASE_URL}/search/?q=${selectedCategory}&hl=en&gl=IN`,
    //   options
    // );
    // const jsonRapid = await dataRapid.json();

    // setVideos(jsonRapid?.contents);
    // console.log(selectedCategory)
    // console.log(jsonRapid?.contents);
    dispatch(setIsLoading(false));
  };

  // if (videos.length === 0) return <h1>loading...</h1>;
  return (
    <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
        {videos.map((item) => {
          if (item.type !== "video") return false;
          return (
            <Link
              key={item?.video?.videoId}
              to={"/watch?v=" + item?.video?.videoId}>
              <VideoCard video={item?.video} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default VideoContainer;
