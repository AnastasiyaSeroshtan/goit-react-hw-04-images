import React from "react";
import { Box } from "./Box";
import { Searchbar } from "./Searchbar/Searchbar";

export class App extends React.Component {
  state = {
    searchLine: "",
};

handleFormSubmit = searchLine => {
  console.log("In APP", searchLine)
  this.setState({searchLine:searchLine})
};


  render() {
    return (
      <Box bg="mute" >
        <Searchbar onFormSubmit={this.handleFormSubmit}/>
      </Box>
    );
  }
};
