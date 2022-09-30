// import { Box } from "components/Box";
import { Gallery } from "./ImageGallery.styled";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({images}) => {
    return (
        <Gallery>
           {images.map(image => (
                <ImageGalleryItem key={image.id} image={image.webformatURL} text={image.tags}/>
            )
           )}
        </Gallery>
    )
};