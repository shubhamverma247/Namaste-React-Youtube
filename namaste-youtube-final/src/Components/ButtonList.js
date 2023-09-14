import React from "react";
import Button from "./Button";

const buttonList = [
  "All",
  "Gaming",
  "Music",
  "Live",
  "Cricket",
  "Socccer",
  "Movies",
  "News",
  "Adventure",
  "Technology",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {buttonList.map((item) => (
        <Button key={item} name={item}></Button>
      ))}
    </div>
  );
};

export default ButtonList;
