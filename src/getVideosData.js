const youtubeVideosRequestEndPoint =
  "https://www.googleapis.com/youtube/v3/videos";

async function getVideosData() {
  const response = await fetch(
    `${youtubeVideosRequestEndPoint}?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );

  const data = await response.json();
  const videoItems = data.items;
  const videoData = videoItems.map((i) => {
    const { id, snippet, contentDetails } = i;
    const { title, channelTitle, thumbnails } = snippet;
    return {
      id,
      contentDetails,
      title,
      channelTitle,
      thumbnails,
    };
  });

  console.log(videoItems);
  //   console.log(videoData);

  return videoData;
}

export default getVideosData;
