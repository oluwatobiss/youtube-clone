import getVideosData from "./getVideosData";
import addChannelDataToEachVideoData from "./addChannelDataToEachVideoData";

async function getVideosDataWithChannelData(nextPageToken) {
  const videosData = await getVideosData(nextPageToken);
  const videosDataWithChannelData = await addChannelDataToEachVideoData(
    videosData
  );
  return videosDataWithChannelData;
}

export default getVideosDataWithChannelData;
