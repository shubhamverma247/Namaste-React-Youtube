import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [video, setVideo] = useState([]);
  const [searchQuery] = useSearchParams();

  useEffect(() => {
    getVideoById();
    dispatch(closeMenu());
  }, []);
  const getVideoById = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?&id=" +
        searchQuery.get("v") +
        "&part=snippet&key=AIzaSyAmwA_vN9ep0hJJ4ndY4rj8Z-CUxvB6ktg"
    );
    const json = await data.json();

    setVideo(json?.items);
    console.log(json?.items);
  };
  return video.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div className="px-10 m-8">
      <iframe
        className="rounded-lg"
        width="1050"
        height="550"
        src={
          "https://www.youtube.com/embed/" +
          searchQuery.get("v") +
          "?si=X5l8ukj-3KtP2Z4N"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen></iframe>
      <div>
        <h1 className="py-2 my-2 text-l font-bold">
          {video[0]?.snippet?.title}
        </h1>
      </div>
      <div>
        <CommentContainer />
      </div>
    </div>
  );
};

export default WatchPage;
