import { useState } from "react";
import PropTypes from "prop-types";
import { GalleryItem, GalleryImg } from "./ImageGalleryItem.styled";
import { Modal } from "components/Modal/Modal";
import { Box } from "components/Box";

export const ImageGalleryItem = ({image, text, imageLarge}) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal)
    };

    return (
         <Box>
               <GalleryItem>
                <GalleryImg src={image} 
                            alt={text} 
                            loading="lazy"
                            onClick={toggleModal}/>
            </GalleryItem>
          {showModal &&(
              <Modal onCloseModal={toggleModal}>
              <img src={imageLarge} alt={text}  />
               </Modal>
          )}
         </Box>
        )
};

ImageGalleryItem.propTypes = {
    image: PropTypes.string.isRequired,
    imageLarge: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

