import getVideosData from "./getVideosData";
import addChannelDataToEachVideoData from "./addChannelDataToEachVideoData";

async function getVideosDataWithChannelData(nextPageToken) {
  const nextPageSpinner = document.getElementById("next-page-spinner");
  const videosData = await getVideosData(nextPageToken);
  const videosDataWithChannelData = await addChannelDataToEachVideoData(
    videosData
  );
  nextPageSpinner.style.display = "none";
  return videosDataWithChannelData;
}

export default getVideosDataWithChannelData;
