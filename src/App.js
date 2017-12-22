import React, { Component } from "react";
import { Container, Segment, Grid, Rail } from "semantic-ui-react";
import YTSearch from "youtube-api-search";
import _ from 'lodash'

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetails from "./components/VideoDetails";

const apiKey = "AIzaSyAbs_MkDZDcBIdI4TJs6tYcjdq4kJYc02o";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVideo: null };

    this.videoSearch('dota')
  }

  videoSearch(search) {
    YTSearch({ key: apiKey, term: search }, videos => {
      this.setState({ videos: videos, selectedVideo: videos[0] });
    });
  }

  render() {

    const videoSearch =_.debounce((term) => {this.videoSearch(term)}, 350)

    return (
      <Container className="searchbar">
            <SearchBar onSearchChange={videoSearch} />
      
        <Grid columns={2}>
          <Grid.Column width={10}>
        <VideoDetails video={this.state.selectedVideo} />
          </Grid.Column>
            
          <Grid.Column width={6}>
            <VideoList
              videos={this.state.videos}
              onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            />
          </Grid.Column>
        </Grid>
        
      </Container>
    );
  }
}

export default App;
