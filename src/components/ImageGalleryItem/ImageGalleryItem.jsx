import React from "react";
import PropTypes from 'prop-types';
import { ImageGalleryItem, Image } from "./ImageGalleryItem.styled";


const Item=({image, onImageClick})=>{
    const largeImage = () => onImageClick(image.largeImageURL);

        return (
            <ImageGalleryItem key={image.id}>
                <Image src={image.webformatURL} alt={image.tags} onClick={largeImage}/>
            </ImageGalleryItem>
        );
};

Item.propTypes = {
    image: PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
    }),
    onImageClick: PropTypes.func.isRequired,
  };

export default Item;