import React from "react";
import "./tweetbox.css";

function Tweets(props) {
  const { userName, date, content } = props.tweet;
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4 offset-4 tweetBox">
            <div className="tweetHeader">
              <span>{userName}</span>
              <span>{date}</span>
            </div>
            <div className="tweetText">{content}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweets;
