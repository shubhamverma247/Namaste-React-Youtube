import React from "react";

import {
  BASE_URL,
  REACT_APP_GOOGLE_API_KEY_1,
  header,
} from "../utils/constants";
import { useDispatch } from "react-redux";
import { setIsLoading } from "../utils/appSlice";
import { Link } from "react-router-dom";
import moment from "moment";

const SuggesstionVideos = ({ videoTitle }) => {
  const dispatch = useDispatch();
  const [videos, setVideos] = React.useState([]);
  console.log(videoTitle);
  const getSuggesstedVideos = async (searchText) => {
    dispatch(setIsLoading(true));
    const response = await fetch(
      BASE_URL +
        `/search?part=snippet&maxResults=12&type=video&q=${searchText}&order=viewCount&videoDuration=medium&key=${REACT_APP_GOOGLE_API_KEY_1}`,
      { header: header }
    );
    const data = await response.json();

    setVideos(data.items);
    dispatch(setIsLoading(false));
  };

  React.useEffect(() => {
    getSuggesstedVideos(videoTitle);
  }, [videoTitle]);

  if (videos.length === 0) return null;
  return videos.map((video, index) => (
    <Link to={"/watch?v=" + video?.id?.videoId} key={index}>
      <div className="flex mb-3">
        <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl bg-slate-800 overflow-hidden">
          <img
            alt=""
            className="h-full w-full object-cover"
            src={video?.snippet?.thumbnails?.medium?.url}
          />
        </div>
        <div className="flex flex-col ml-3 overflow-hidden">
          <span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2 text-black dark:text-white">
            {video.snippet?.title}
          </span>
          <span className="text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2 text-black/[0.7] dark:text-white/[0.7] flex items-center">
            {video.snippet?.channelTitle}
          </span>
          <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold  text-black/[0.7] dark:text-white/[0.7] truncate overflow-hidden">
            <span className="flex text-[24px] leading-none font-bold  text-black/[0.7] dark:text-white/[0.7] relative top-[-10px] mx-1">
              .
            </span>
            <span className="truncate">
              {moment(video?.snippet?.publishedAt).fromNow()}
            </span>
          </div>
        </div>
      </div>
    </Link>
  ));
};

export default SuggesstionVideos;
