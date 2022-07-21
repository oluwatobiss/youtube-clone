import getVideosData from "./getVideosData";
import addChannelDataToEachVideoData from "./addChannelDataToEachVideoData";

async function getVideosAndChannelsData(nextPageToken) {
  const nextPageSpinner = document.getElementById("next-page-spinner");
  const videosData = await getVideosData(nextPageToken);
  const videosAndChannelsData = await addChannelDataToEachVideoData(videosData);
  nextPageSpinner.style.display = "none";
  return videosAndChannelsData;
}

export default getVideosAndChannelsData;
