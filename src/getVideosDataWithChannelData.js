import getVideosData from "./getVideosData";
import addChannelDataToEachVideoData from "./addChannelDataToEachVideoData";

async function getVideosDataWithChannelData() {
  const videosData = await getVideosData();
  const videosDataWithChannelData = await addChannelDataToEachVideoData(
    videosData
  );
  //   console.log(videosDataWithChannelData);
  return videosDataWithChannelData;
}

export default getVideosDataWithChannelData;