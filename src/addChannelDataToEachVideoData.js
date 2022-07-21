async function addChannelDataToEachVideoData(videosData) {
  const vidsData = [...videosData];
  let videosAndChannelsData = [];

  for (let i = 0; i < vidsData.length; i++) {
    const youtubeChannelRequestEndPoint =
      "https://www.googleapis.com/youtube/v3/channels";
    const fetchedChannel = await fetch(
      `${youtubeChannelRequestEndPoint}?part=snippet%2CcontentDetails%2Cstatistics&id=${vidsData[i].channelId}&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    );
    const channelData = await fetchedChannel.json();
    const channelItems = channelData.items;
    const { snippet } = channelItems[0];
    const { thumbnails } = snippet;
    const defaultChannelAvatar = thumbnails.default.url;
    const vidAndChannelData = {
      ...vidsData[i],
      defaultChannelAvatar,
    };
    videosAndChannelsData.push(vidAndChannelData);
  }

  return videosAndChannelsData;
}

export default addChannelDataToEachVideoData;
