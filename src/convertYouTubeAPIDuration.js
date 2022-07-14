function convertYouTubeAPIDuration(duration) {
  // YouTube's duration is a minimum of 4 characters
  // 1 seconds is displayed as 0:01
  // A duration less than 10 seconds is preceded with "0:0" (e.g., "0:09", "0:05", "0:01")
  // A duration greater than 9 seconds and less than 60 seconds (1 minute) is preceded with "0:" (e.g., "0:59", "0:10", "0:32")

  const YOUTUBE_API_DURATION_PATTERN =
    /^P([0-9]*D)?T([0-9]*H)?([0-9]*M)?([0-9]*S)?$/i;
  const foundDurationPatternArray = YOUTUBE_API_DURATION_PATTERN.exec(duration);
  if (foundDurationPatternArray) {
    const days = parseInt(foundDurationPatternArray[1], 10) || "";
    const hours = parseInt(foundDurationPatternArray[2], 10) || "";
    const minutes = parseInt(foundDurationPatternArray[3], 10) || 0;
    const seconds = parseInt(foundDurationPatternArray[4], 10) || 0;
    return `${days && `${days}:`}${hours && `${hours}:`}${minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  }
  return 0;
}

export default convertYouTubeAPIDuration;
