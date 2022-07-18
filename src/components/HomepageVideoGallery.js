import { useState, useEffect } from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import moment from "moment";
import getVideosDataWithChannelData from "../getVideosDataWithChannelData";
import convertYouTubeAPIDuration from "../convertYouTubeAPIDuration";
import Loader from "./Loader";
import "../styles/HomepageVideoGallery.css";

function HomepageVideoGallery() {
  const [videosDataWithChannelData, setVideosDataWithChannelData] =
    useState(null);

  let imgElementArray = null;

  if (videosDataWithChannelData) {
    imgElementArray = videosDataWithChannelData.map(function (item) {
      const publishedDate = item.publishedAt.slice(0, 10);
      const publishedDateWithoutHyphens = publishedDate.replace(/-/g, "");
      const relativeTime = moment(
        publishedDateWithoutHyphens,
        "YYYYMMDD"
      ).fromNow();

      function handleClick(e) {
        e.currentTarget.style.backgroundColor = "#dedede";
        window.location.href = `https://www.youtube.com/watch?v=${item.id}`;
      }

      return (
        <div className="video-gallery-item" key={item.id} onClick={handleClick}>
          <div className="video-gallery-item-image-div">
            <img
              alt={item.title}
              src={item.thumbnails.medium.url}
              className="video-gallery-item-image"
            />
            <span className="video-gallery-item-image-duration">
              {convertYouTubeAPIDuration(item.contentDetails.duration)}
            </span>
          </div>
          <div className="video-gallery-item-image-info-div">
            <span>
              <a
                href={`https://www.youtube.com/channel/${item.channelId}`}
                title={item.channelTitle}
              >
                <img
                  alt=""
                  src={item.defaultChannelAvatar}
                  className="video-gallery-item-avatar-image"
                />
              </a>
            </span>
            <span className="video-gallery-item-image-info-span">
              <h3 title={item.title}>{item.title}</h3>
              <div>
                <a
                  href={`https://www.youtube.com/channel/${item.channelId}`}
                  title={item.channelTitle}
                  className="channel-link"
                >
                  {item.channelTitle}
                </a>
              </div>
              <div className="video-view-count">
                <span>{`${abbreviateNumber(item.viewCount, 0)} views`} • </span>
                <span>{relativeTime}</span>
              </div>
            </span>
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

  return (
    <div id="homepage-video-gallery">
      {imgElementArray ? imgElementArray : Loader()}
    </div>
  );
}

export default HomepageVideoGallery;
