import { GalleryItem, GalleryImg } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({image, text}) => {
    return (
        <GalleryItem>
            <GalleryImg src={image} alt={text} loading="lazy"/>
        </GalleryItem>
    )
};