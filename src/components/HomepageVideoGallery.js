import { useState, useEffect } from "react";
import getVideosDataWithChannelData from "../getVideosDataWithChannelData";
import "../styles/HomepageVideoGallery.css";
import convertYouTubeAPIDuration from "../convertYouTubeAPIDuration";

function HomepageVideoGallery() {
  const [videosDataWithChannelData, setVideosDataWithChannelData] =
    useState(null);

  let imgElementArray = [];

  if (videosDataWithChannelData) {
    imgElementArray = videosDataWithChannelData.map(function (item) {
      return (
        <div className="video-gallery-item" key={item.id}>
          <a href={`https://www.youtube.com/watch?v=${item.id}`}>
            <div className="video-image-div">
              <img
                alt={item.title}
                src={item.thumbnails.medium.url}
                className="video-image"
              />
              <span className="video-duration">
                {convertYouTubeAPIDuration(item.contentDetails.duration)}
              </span>
            </div>
          </a>
          <div>avatar</div>
          <div>video-title</div>
          <div>channel-name</div>
          <div>Verified badge</div>
          <div>
            <span>Views • </span>
            <span>Publication date</span>
          </div>
        </div>
      );
    });
  }

  useEffect(() => {
    getVideosDataWithChannelData().then((items) =>
      setVideosDataWithChannelData(items)
    );
  }, []);

  return <div id="homepage-video-gallery">{imgElementArray}</div>;
}

export default HomepageVideoGallery;
