async function getVideosData(currNextPageToken) {
  const youtubeVideosRequestEndPoint =
    "https://www.googleapis.com/youtube/v3/videos";

  const fetchedVideos = await fetch(
    `${youtubeVideosRequestEndPoint}?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=50${
      currNextPageToken ? `&pageToken=${currNextPageToken}` : ""
    }&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );

  const data = await fetchedVideos.json();
  const { items, nextPageToken, pageInfo } = data;
  const totalVideosAvailable = pageInfo.totalResults;

  const videosData = items.map((i) => {
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
      nextPageToken,
      totalVideosAvailable,
    };
  });

  return videosData;
}

export default getVideosData;
