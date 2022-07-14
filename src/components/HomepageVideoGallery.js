import { useState, useEffect } from "react";
import getVideosData from "../getVideosData";
import "../styles/HomepageVideoGallery.css";
import convertYouTubeAPIDuration from "../convertYouTubeAPIDuration";

function HomepageVideoGallery() {
  const [videoDataArray, setVideoDataArray] = useState(null);

  let imgElementArray = [];

  if (videoDataArray) {
    imgElementArray = videoDataArray.map(function (item) {
      return (
        <div key={item.id}>
          <a href={`https://www.youtube.com/watch?v=${item.id}`}>
            <img
              alt={item.title}
              src={item.thumbnails.high.url}
              className="youtube-video-image"
            />
            <div>{convertYouTubeAPIDuration(item.contentDetails.duration)}</div>
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
    getVideosData().then((items) => setVideoDataArray(items));
  }, []);

  return <div id="homepage-video-gallery">{imgElementArray}</div>;
}

export default HomepageVideoGallery;
