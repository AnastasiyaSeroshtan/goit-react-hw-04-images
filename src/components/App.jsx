import React from "react";
import { Box } from "./Box";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { getImages } from "../services/api";
import { Button } from "./Button/Button";

export class App extends React.Component {
  state = {
    page: 1,
    searchLine: "",
    images: [],
};

handleFormSubmit = (searchLine) => {
  this.setState({
    page:1,
    searchLine:searchLine,
    images: [],})
};

loadMore = () => {
  this.setState(prevState => ({
    page: prevState.page + 1,
  }))
};

componentDidUpdate(prevProps, prevState) {
  console.log("prevState.page", prevState.page);
  console.log("this.state.page", this.state.page);

  console.log("prevState.searchLine", prevState.searchLine);
  console.log("this.state.searchLine", this.state.searchLine);
  const {page, searchLine} = this.state;

  if (prevState.searchLine !== searchLine ||
      prevState.page !== page) {
    getImages(searchLine, page).then(data => 
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
      }))
    )
  }
};

  render() {
    return (
      <Box bg="mute" >
        <Searchbar onFormSubmit={this.handleFormSubmit}/>
        <ImageGallery images={this.state.images}/>
        {this.state.images.length > 0 && <Button handleClick={this.loadMore}/>}
      </Box>
    );
  }
};
