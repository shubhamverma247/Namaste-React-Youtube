import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL, REACT_APP_GOOGLE_API_KEY_1 } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { setIsLoading } from "../utils/appSlice";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import useIntersectionObserver from "../utils/useIntersectionObserver";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const { ref, inView } = useInView();
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();
  const selectedCategory = useSelector((store) => store.app.selectedCategory);
  const loading = useSelector((store) => store.app.isLoading);

  // useEffect(() => {
  //   getVideos();
  // }, [selectedCategory]);

  const bottomRef = useRef();

  const onScreen = useIntersectionObserver(bottomRef, { threshold: 0.5 });
  const getVideos = async (nextPageToken) => {
    // dispatch(setIsLoading(true));
    let URL = "";
    if (selectedCategory === "New") {
      URL =
        BASE_URL +
        `/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=12&chart=mostPopular&regionCode=IN&videoDuration=medium&pageToken=${
          nextPageToken ?? ""
        }&key=` +
        REACT_APP_GOOGLE_API_KEY_1;
    } else {
      URL =
        BASE_URL +
        `/search?part=snippet&maxResults=12&type=video&q=${selectedCategory}&videoDuration=medium&key=` +
        REACT_APP_GOOGLE_API_KEY_1;
    }
    setTimeout(async () => {
      const data = await fetch(URL);
    }, 50000);
    const data = await fetch(URL);
    const json = await data.json();
    return json;
    // setVideos(json.items);
    // dispatch(setIsLoading(false));
  };

  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isSuccess,
  } = useInfiniteQuery(
    ["Home", selectedCategory],
    ({ pageParam = null }) => getVideos(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage?.nextPageToken;
      },
    }
  );

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return isLoading ? (
    <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white dark:bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
        <Shimmer />
      </div>
    </div>
  ) : (
    <>
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white dark:bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {isSuccess &&
            data.pages.map((page, index) => {
              return (
                page?.items && (
                  <Fragment key={index}>
                    {page?.items.map((video, i) => {
                      let videoId =
                        video?.kind === "youtube#video"
                          ? video?.id
                          : video?.id.videoId;
                      if (page.items.length === i + 1) {
                        return (
                          <Link
                            key={videoId}
                            ref={ref}
                            to={"/watch?v=" + videoId}>
                            <VideoCard video={video} />
                          </Link>
                        );
                      } else {
                        return (
                          <Link key={videoId} to={"/watch?v=" + videoId}>
                            <VideoCard video={video} />
                          </Link>
                        );
                      }
                    })}
                  </Fragment>
                )
              );
            })}
          {/* {videos.map((item) => {
      let videoId =
        item?.kind === "youtube#video" ? item?.id : item?.id.videoId;

      return (
        <Link key={videoId} to={"/watch?v=" + videoId}>
          <VideoCard video={item} />
        </Link>
      );
    })} */}
          {isFetchingNextPage && <Shimmer />}
        </div>
      </div>
    </>
  );
};

export default VideoContainer;
