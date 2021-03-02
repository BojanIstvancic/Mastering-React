import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ name, tweets }) => {
  return (
    <div className="tweet-list">
      <Tweet name={name} />
    </div>
  );
};

export default TweetList;
