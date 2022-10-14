import { useState, useEffect } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Box } from "./Box";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { getImages } from "../services/api";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";

export const App = () => {
  const [page, setPage] = useState(1);
  const [searchLine, setSearchLine] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getImages(searchLine, page).then(data => {
      return(
        data.hits.length === 0
        ? Notify.info('Ops! We did not find any images matching your request. Please try again.')
        : setImages(prevState => [...prevState, ...data.hits])
      )
    });
    setIsLoading(false);
  }, [searchLine, page,]);

// async componentDidUpdate(_, prevState) {
//   try {
//     const {page, searchLine} = this.state;

//     if (prevState.searchLine !== searchLine ||
//         prevState.page !== page) {

//       this.setState({isLoading: true});    
//       await getImages(searchLine, page).then(data => {
//         return(
//           data.hits.length === 0
//           ? Notify.info('Ops! We did not find any images matching your request. Please try again.')
//           : this.setState(prevState => ({
//             images: [...prevState.images, ...data.hits],
//           }))
//         )
//       } 
//       )
//       this.setState({isLoading: false})
//     }
//   } catch(error){
//       this.setState({isLoading: true}); 
//       console.log(error)
//       this.setState({isLoading: false})
//   } 
// }

const handleFormSubmit = (searchLine) => {
  setPage(1);
  setSearchLine(searchLine);
  setImages([]);
};

const loadMore = () => {
  setPage(prevState => prevState+1)
};

    // const {isLoading, images} = this.state;
  return (
      <Box bg="mute" >
        {isLoading && <Loader />}
        <Searchbar onFormSubmit={handleFormSubmit}/>
       <main style={{ textAlign: 'center', marginTop: '20px' }}>
       <ImageGallery images={images}/>
        {images.length > 0 && <Button handleClick={loadMore}/>}
        </main>
      </Box>
    );
};

// export class App extends React.Component {
//   state = {
//     page: 1,
//     searchLine: "",
//     images: [],
//     isLoading: false,
// };

// async componentDidUpdate(_, prevState) {
//   try {
//     const {page, searchLine} = this.state;

//     if (prevState.searchLine !== searchLine ||
//         prevState.page !== page) {

//       this.setState({isLoading: true});    
//       await getImages(searchLine, page).then(data => {
//         return(
//           data.hits.length === 0
//           ? Notify.info('Ops! We did not find any images matching your request. Please try again.')
//           : this.setState(prevState => ({
//             images: [...prevState.images, ...data.hits],
//           }))
//         )
//       } 
//       )
//       this.setState({isLoading: false})
//     }
//   } catch(error){
//       this.setState({isLoading: true}); 
//       console.log(error)
//       this.setState({isLoading: false})
//   } 
// }

// handleFormSubmit = (searchLine) => {
//   this.setState({
//     page:1,
//     searchLine:searchLine,
//     images: [],})
// };

// loadMore = () => {
//   this.setState(prevState => ({
//     page: prevState.page + 1,
//   }));
// };

//   render() {
//     const {isLoading, images} = this.state;
//     return (
//       <Box bg="mute" >
//         {isLoading && <Loader />}
//         <Searchbar onFormSubmit={this.handleFormSubmit}/>
//        <main style={{ textAlign: 'center', marginTop: '20px' }}>
//        <ImageGallery images={images}/>
//         {images.length > 0 && <Button handleClick={this.loadMore}/>}
//         </main>
//       </Box>
//     );
//   }
// };
