import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL, GOOGLE_API_KEY_1 } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { setIsLoading } from "../utils/appSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();
  const selectedCategory = useSelector((store) => store.app.selectedCategory);
  const loading = useSelector((store) => store.app.isLoading);
  useEffect(() => {
    getVideos();
  }, [selectedCategory]);

  const getVideos = async () => {
    dispatch(setIsLoading(true));
    let URL = "";
    if (selectedCategory === "New") {
      URL =
        BASE_URL +
        `/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&videoDuration=medium&key=` +
        GOOGLE_API_KEY_1;
    } else {
      URL =
        BASE_URL +
        `/search?part=snippet&maxResults=50&type=video&q=${selectedCategory}&videoDuration=medium&key=` +
        GOOGLE_API_KEY_1;
    }
    const data = await fetch(URL);
    const json = await data.json();

    setVideos(json.items);
    dispatch(setIsLoading(false));
  };

  if (loading) {
    // MockData.map((item, index) => <SkeletonCard />);
  }
  return (
    <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white dark:bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
        {videos.map((item) => {
          let videoId =
            item?.kind === "youtube#video" ? item?.id : item?.id.videoId;

          return (
            <Link key={videoId} to={"/watch?v=" + videoId}>
              <VideoCard video={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default VideoContainer;
