import React, { Component } from "react";
import { Segment, Form, Input } from "semantic-ui-react";

export default class SearchBar extends Component {
  constructor(props){
    super(props)

  }
    
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchChange(term)
  }


  render() {
    return (
      <Segment color="teal" inverted raised className="searchSegment">
        <Form>
          <Form.Field>
            <Input
              fluid
              placeholder="search a video..."
              icon="search"
              size="small"
              onChange={event => this.onInputChange(event.target.value)}
            />
          </Form.Field>
        </Form>
      </Segment>
    );
  }
}
