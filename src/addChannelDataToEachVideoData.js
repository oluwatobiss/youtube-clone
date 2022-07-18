async function addChannelDataToEachVideoData(videosData) {
  const data = [...videosData];
  let videosDataWithChannelData = [];

  for (let i = 0; i < data.length; i++) {
    const youtubeChannelRequestEndPoint =
      "https://www.googleapis.com/youtube/v3/channels";
    const fetchedChannel = await fetch(
      `${youtubeChannelRequestEndPoint}?part=snippet%2CcontentDetails%2Cstatistics&id=${data[i].channelId}&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    );
    const channelData = await fetchedChannel.json();
    const channelItems = channelData.items;
    const { snippet } = channelItems[0];
    const { thumbnails } = snippet;
    const defaultChannelAvatar = thumbnails.default.url;
    const videoDataPlusChannelData = {
      ...data[i],
      defaultChannelAvatar,
    };
    videosDataWithChannelData.push(videoDataPlusChannelData);
  }

  return videosDataWithChannelData;
}

export default addChannelDataToEachVideoData;
