import React from "react";
import { Embed } from "semantic-ui-react";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Hosting is retarded...Loading...</div>;
  }

  const videoId = video.id.videoId;

  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div>
      {/* <Embed >
        <iframe src={url} />
      </Embed> */}
      <iframe className='yvideo' src={url} />
      <h2>{video.snippet.title}</h2>
    </div>
  );
};

export default VideoDetails;
