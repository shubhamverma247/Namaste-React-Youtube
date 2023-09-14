import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_VIDEOS_API, BASE_URL, options } from "../utils/constants";
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
    // const data = await fetch(YOUTUBE_VIDEOS_API);
    // const json = await data.json();
    dispatch(setIsLoading(true));
    const dataRapid = await fetch(
      `${BASE_URL}/search/?q=${selectedCategory}&hl=en&gl=IN`,
      options
    );
    const jsonRapid = await dataRapid.json();

    setVideos(jsonRapid?.contents);
    console.log(jsonRapid?.contents);
    dispatch(setIsLoading(false));
  };

  if (videos.length === 0) return <h1>loading...</h1>;
  return (
    <>
      {videos.map((item) => {
        if (item.type !== "video") return false;
        return (
          <Link key={item?.video?.videoId} to={"/watch?v=" + item?.videoId}>
            <VideoCard video={item?.video} />
          </Link>
        );
      })}
    </>
  );
};

export default VideoContainer;
