import { useState, useEffect } from "react";
import GalleryLoader from "./GalleryLoader";
import NextPageLoader from "./NextPageLoader";
import creactVideoGalleryItems from "../creactVideoGalleryItems";
import getVideosAndChannelsData from "../getVideosAndChannelsData";
import "../styles/HomepageVideoGallery.css";

function HomepageVideoGallery() {
  const [videoGalleryItems, setVideoGalleryItems] = useState(null);
  const [videosAndChannelsData, setVideosAndChannelsData] = useState(null);
  const [totalVideosOnDisplay, setTotalVideosOnDisplay] = useState(50);

  function handleScroll(e) {
    if (videosAndChannelsData) {
      const galleryDiv = document.getElementById("homepage-video-gallery");
      const galleryHeight = galleryDiv.clientHeight;
      const lengthScrolled = e.target.documentElement.scrollTop;
      const totalScrollablelength = e.target.documentElement.scrollHeight;
      const scrolledToPageBottom =
        galleryHeight + lengthScrolled >= totalScrollablelength;
      const moreVideosAvailable =
        totalVideosOnDisplay + 50 <=
        videosAndChannelsData[0].totalVideosAvailable;

      if (scrolledToPageBottom && moreVideosAvailable) {
        setTotalVideosOnDisplay((currentAmount) => currentAmount + 50);
        const nextPageSpinner = document.getElementById("next-page-spinner");
        const lastGalleryItem =
          videosAndChannelsData[videosAndChannelsData.length - 1];

        nextPageSpinner.style.display = "flex";

        getVideosAndChannelsData(lastGalleryItem.nextPageToken)
          .then((newItems) =>
            setVideosAndChannelsData((currentItems) => [
              ...currentItems,
              ...newItems,
            ])
          )
          .catch((error) =>
            console.error(`getVideosAndChannelsData Fetch Error: ${error}`)
          );
      }
    }
  }

  useEffect(() => {
    getVideosAndChannelsData()
      .then((items) => setVideosAndChannelsData(items))
      .catch((error) =>
        console.error(`getVideosAndChannelsData Fetch Error: ${error}`)
      );
  }, []);

  useEffect(() => {
    setVideoGalleryItems(creactVideoGalleryItems(videosAndChannelsData));
  }, [videosAndChannelsData]);

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
