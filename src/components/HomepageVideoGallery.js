import { useState, useEffect } from "react";
import Loader from "./Loader";
import getVideosDataWithChannelData from "../getVideosDataWithChannelData";
import creactVideoGalleryItems from "../creactVideoGalleryItems";
import "../styles/HomepageVideoGallery.css";

function HomepageVideoGallery() {
  const [videosDataWithChannelData, setVideosDataWithChannelData] =
    useState(null);
  const [videoGalleryItems, setVideoGalleryItems] = useState(null);

  useEffect(() => {
    getVideosDataWithChannelData().then((items) =>
      setVideosDataWithChannelData(items)
    );
  }, []);

  useEffect(() => {
    setVideoGalleryItems(creactVideoGalleryItems(videosDataWithChannelData));
  }, [videosDataWithChannelData]);

  return (
    <div id="homepage-video-gallery" className="if-wide-sidebar-is-active">
      {videoGalleryItems ? videoGalleryItems : Loader()}
    </div>
  );
}

export default HomepageVideoGallery;
