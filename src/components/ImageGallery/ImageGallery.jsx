import React from 'react';
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';


export const ImageGallery = ({ images, onImageClick }) => (
  <Gallery className="gallery">
    {images.map(image => (
      <ImageGalleryItem key={image.id} image={image} onClick={() => onImageClick(image)} />
    ))}
  </Gallery>
);







