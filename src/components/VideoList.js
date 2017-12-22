import React from "react";
import { Segment } from "semantic-ui-react";
import VideoListItem from "./VideoListItem";

const VideoList = props => {
  const mapList = props.videos.map(video => {
    return (
      <VideoListItem
        video={video}
        key={video.etag}
        onVideoSelect={props.onVideoSelect}
      />
    );
  });

  return <Segment className="listSegment">{mapList}</Segment>;
};

export default VideoList;

