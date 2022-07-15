import addChannelDataToEachVideoData from "./addChannelDataToEachVideoData";

async function getVideosData() {
  const youtubeVideosRequestEndPoint =
    "https://www.googleapis.com/youtube/v3/videos";

  const fetchedVideos = await fetch(
    `${youtubeVideosRequestEndPoint}?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );

  const data = await fetchedVideos.json();
  const videoItems = data.items;
  const videosData = videoItems.map((i) => {
    const { id, snippet, contentDetails } = i;
    const { title, channelId, channelTitle, thumbnails } = snippet;
    return {
      id,
      contentDetails,
      title,
      channelId,
      channelTitle,
      thumbnails,
    };
  });

  console.log(videoItems);
  //   console.log(videosData);

  return videosData;
}

async function getvideosDataWithChannelData() {
  const videosData = await getVideosData();
  const videosDataWithChannelData = await addChannelDataToEachVideoData(
    videosData
  );
  return videosDataWithChannelData;
}

export default getvideosDataWithChannelData;
