import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/a/AATXAJxPbKBAAY1IDDEscScNp4z-cWuy5mgbiByDJVwgOQ=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Clever Programmer"
        verified
        subs="660K"
        noOfVideos={382}
        description="You can find awesome progarmming lessons"
      />
      <hr />
      <VideoRow
        image="https://i.ytimg.com/vi/pnkuI8KXW_8/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB2ZnJXtr2-DfDvZAOXP7F9uhd4Cg"
        channel="Clever Programmer"
        title="🔴 Build a Spotify Clone with REACT JS for Beginners"
        subs="660K"
        views="660K"
        timestamp="Streamed 11 hours ago"
        description="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training ..."
      />
      <hr />
    </div>
  );
}

export default SearchPage;
