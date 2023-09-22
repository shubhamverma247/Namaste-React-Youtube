import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  BASE_URL,
  REACT_APP_GOOGLE_API_KEY_1,
  header,
} from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const { ref, inView } = useInView();
  const selectedCategory = useSelector((store) => store.app.selectedCategory);
  const getVideos = async (nextPageToken) => {
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

    const data = await fetch(URL, { header: header });
    const json = await data.json();
    return json;
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

          {isFetchingNextPage && <Shimmer />}
        </div>
      </div>
    </>
  );
};

export default VideoContainer;
