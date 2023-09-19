import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { closeMenu, setIsLoading } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import {
  BASE_URL,
  MockData,
  REACT_APP_GOOGLE_API_KEY_1,
  YOUTUBE_VIDEOS_API,
} from "../utils/constants";
import SuggesstionVideos from "./SuggesstionVideos";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [video, setVideo] = useState([]);
  const [channelDetail, setChannelDetail] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [searchQuery] = useSearchParams();
  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    getVideo();
    // suggestedVideos();
  }, [searchQuery.get("v")]);

  const getVideo = async () => {
    dispatch(setIsLoading(true));
    const data = await fetch(
      BASE_URL +
        `/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchQuery.get(
          "v"
        )}&key=${REACT_APP_GOOGLE_API_KEY_1}`
    );
    const json = await data.json();

    setVideo(json.items[0]);
    const response = await fetch(
      BASE_URL +
        `/channels?part=snippet%2Cstatistics%2CcontentDetails&id=${json.items[0]?.snippet?.channelId}&key=${REACT_APP_GOOGLE_API_KEY_1}`
    );
    const dataN = await response.json();

    setChannelDetail(dataN?.items[0]);

    dispatch(setIsLoading(false));
  };

  if (
    (video.length === 0 && channelDetail?.length === 0) ||
    (channelDetail?.length === 0 && video.length === 0)
  ) {
    return (
      <>
        <h1 className="text-black dark:text-white text-2xl ml-24">loading</h1>
      </>
    );
  }
  return (
    <div className="flex justify-center flex-row h-[calc(100%-56px)] bg-white dark:bg-black">
      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
          <div className="h-[200px] md:h-[380px] lg:h-[380px] xl:h-[500px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <iframe
              className="rounded-lg"
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${searchQuery.get(
                "v"
              )}?autoplay=1&modestbranding=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </div>
          <div className="text-black dark:text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
            {video?.snippet?.title}
          </div>
          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex">
              <div className="flex items-start">
                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                  <img
                    alt=""
                    className="h-full w-full object-cover"
                    src={channelDetail?.snippet?.thumbnails?.default?.url}
                  />
                </div>
              </div>
              <div className="flex flex-col ml-3">
                <div className="text-black dark:text-white text-md font-semibold flex items-center">
                  {video?.snippet?.channelTitle}
                  {/* {video.video?.author?.badges[0]?.type ===
                    "VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className="text-black/[0.5] dark:text-white/[0.5] text-[12px] ml-1" />
                  )} */}
                </div>
                <div className="text-black dark:text-white/[0.7] text-sm">
                  {Intl.NumberFormat("en", { notation: "compact" }).format(
                    channelDetail?.statistics?.subscriberCount
                  )}{" "}
                  subscribers
                </div>
              </div>
            </div>
            <div className="flex text-black dark:text-white mt-4 md:mt-0">
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-black/[0.15] dark:bg-white/[0.15]">
                <AiOutlineLike className="text-xl text-black dark:text-white mr-2" />
                {Intl.NumberFormat("en", { notation: "compact" }).format(
                  channelDetail?.statistics?.subscriberCount
                )}{" "}
                Likes
              </div>
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl  bg-black/[0.15] dark:bg-white/[0.15] ml-4">
                {`${abbreviateNumber(
                  channelDetail?.statistics?.viewCount,
                  2
                )} Views`}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
          <SuggesstionVideos videoTitle={video?.snippet?.title} />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
