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
    if (searchLine === '') {
      return
    }

    setIsLoading(true);
    getImages(searchLine, page).then(data => {
      data.hits.length === 0
      ? Notify.info('Ops! We did not find any images matching your request. Please try again.')
      : setImages(prevState => [...prevState, ...data.hits])
      setIsLoading(false)
    })
    .catch(error => {
      setIsLoading(true); 
            console.log(error)
      setIsLoading(false);
        })
  }, [searchLine, page]);

const handleFormSubmit = (searchLine) => {
  setPage(1);
  setSearchLine(searchLine);
  setImages([]);
};

const loadMore = () => {
  setPage(prevState => prevState+1)
};

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
