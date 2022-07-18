async function getVideosData() {
  const youtubeVideosRequestEndPoint =
    "https://www.googleapis.com/youtube/v3/videos";

  const fetchedVideos = await fetch(
    `${youtubeVideosRequestEndPoint}?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );

  const data = await fetchedVideos.json();
  const videoItems = data.items;
  const videosData = videoItems.map((i) => {
    const { id, snippet, contentDetails, statistics } = i;
    const { title, channelId, channelTitle, thumbnails, publishedAt } = snippet;
    const { viewCount } = statistics;
    return {
      id,
      contentDetails,
      title,
      channelId,
      channelTitle,
      thumbnails,
      viewCount,
      publishedAt,
    };
  });

  return videosData;
}

export default getVideosData;
