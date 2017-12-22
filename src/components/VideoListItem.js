import React from "react";
import { Item } from "semantic-ui-react";

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <Item.Group divided>
      <Item onClick={() => onVideoSelect(video)}>
        <Item.Image size="tiny" src={imageUrl} />
        <Item.Content verticalAlign="middle">
          <Item.Header>{video.snippet.title}</Item.Header>
        </Item.Content>
      </Item>
    </Item.Group>
  );
};

export default VideoListItem;
