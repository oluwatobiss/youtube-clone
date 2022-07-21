import { useState, useEffect } from "react";
import GalleryLoader from "./GalleryLoader";
import NextPageLoader from "./NextPageLoader";
import getVideosDataWithChannelData from "../getVideosDataWithChannelData";
import creactVideoGalleryItems from "../creactVideoGalleryItems";
import "../styles/HomepageVideoGallery.css";

function HomepageVideoGallery() {
  const [videosDataWithChannelData, setVideosDataWithChannelData] =
    useState(null);
  const [videoGalleryItems, setVideoGalleryItems] = useState(null);

  function handleScroll(e) {
    if (
      videosDataWithChannelData &&
      videosDataWithChannelData[0].newNextPageToken
    ) {
      const nextPageSpinner = document.getElementById("next-page-spinner");
      const galleryDiv = document.getElementById("homepage-video-gallery");
      const galleryHeight = galleryDiv.clientHeight;
      const lengthScrolled = e.target.documentElement.scrollTop;
      const totalScrollablelength = e.target.documentElement.scrollHeight;
      nextPageSpinner.style.display = "flex";

      if (galleryHeight + lengthScrolled >= totalScrollablelength) {
        const lastGalleryItem =
          videosDataWithChannelData[videosDataWithChannelData.length - 1];

        getVideosDataWithChannelData(lastGalleryItem.newNextPageToken).then(
          (newItems) =>
            setVideosDataWithChannelData((currentItems) => [
              ...currentItems,
              ...newItems,
            ])
        );
      }
      nextPageSpinner.style.display = "none";
    }
  }

  useEffect(() => {
    getVideosDataWithChannelData().then((items) =>
      setVideosDataWithChannelData(items)
    );
  }, []);

  useEffect(() => {
    setVideoGalleryItems(creactVideoGalleryItems(videosDataWithChannelData));
  }, [videosDataWithChannelData]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div id="homepage-video-gallery" className="if-wide-sidebar-is-active">
      {videoGalleryItems ? videoGalleryItems : GalleryLoader()}
      {NextPageLoader()}
    </div>
  );
}

export default HomepageVideoGallery;
