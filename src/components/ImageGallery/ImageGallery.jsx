import React from "react";
import PropTypes from 'prop-types';
import { List } from "./ImageGallery.styled";
import Item from "components/ImageGalleryItem/ImageGalleryItem";


const GalleryList = ({images, onImageClick}) =>(
    <List>
        {images.map(image=>{
        return (
        <Item key={image.id} image={image} onImageClick={onImageClick}/>)})}
    </List>
);



GalleryList.propTypes = {
        images: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
          }),
        ),
        onImageClick: PropTypes.func.isRequired,
    };

export default GalleryList;