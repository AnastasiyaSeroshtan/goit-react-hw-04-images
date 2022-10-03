import PropTypes from "prop-types";
import { Gallery } from "./ImageGallery.styled";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({images}) => {
    return (
        <Gallery>
           {images.map(image => (
                <ImageGalleryItem   key={image.id} 
                                    image={image.webformatURL} 
                                    text={image.tags}
                                    imageLarge={image.largeImageURL}/>
            )
           )}
        </Gallery>
    )
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string,
        text: PropTypes.string,
        imageLarge: PropTypes.string,
    }))
};