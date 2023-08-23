
//  import {Image} from './ImageGalleryItem.styled'


//  export const ImageGalleryItem = ({ image }) => {
//     return (
//       <Image>
//        <a href={image.largeImageURL}>
//          <img src={image.webformatURL} alt="" />
//         </a>
      
//      </Image>
//    );
//   };
import React, { useState } from 'react';
import {Image} from './ImageGalleryItem.styled'

import {Modal} from '../Modal/Modal'


export const ImageGalleryItem = ({image}) =>{

const [isModalOpen,setIsModalOpen] = useState(false)
 const { webformatURL, tags, largeImageURL} = image;

  return (
    <Image className="gallery-item">
      <img
        src={webformatURL}
        alt={tags}
        onClick={()=>{setIsModalOpen(true)}}
        className="gallery-image"
      />
      {isModalOpen && (
        <Modal onClose={()=>{setIsModalOpen(false)}} image={largeImageURL} />
      )}
    </Image>
  );
}