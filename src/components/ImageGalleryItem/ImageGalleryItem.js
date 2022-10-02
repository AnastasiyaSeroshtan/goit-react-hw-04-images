import React from "react";
import { GalleryItem, GalleryImg } from "./ImageGalleryItem.styled";
import { Modal } from "components/Modal/Modal";
import { Box } from "components/Box";
// export const ImageGalleryItem = ({image, text}) => {
//     return (
//         <GalleryItem>
//             <GalleryImg src={image} alt={text} loading="lazy"/>
//         </GalleryItem>
//     )
// };

export class ImageGalleryItem extends React.Component{
    state= {
        showModal: false,
    };

    toggleModal = () => {
        this.setState({showModal: !this.state.showModal})
    };
    
    render(){
        const {showModal} = this.state; 
        return (
         <Box>
               <GalleryItem>
                <GalleryImg src={this.props.image} 
                            alt={this.props.text} 
                            loading="lazy"
                            onClick={this.toggleModal}/>
            </GalleryItem>
          {showModal &&(
              <Modal onCloseModal={this.toggleModal}>
              <img src={this.props.imageLarge}alt={this.props.text}  />
               </Modal>
          )}
         </Box>
        )
    }
};

