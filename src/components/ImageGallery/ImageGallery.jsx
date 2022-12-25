import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import style from "./ImageGallery.module.css"

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={style.ImageGallery}>
          {/* <!-- Набір <li> із зображеннями --> */}
          {images.map(image=>(
      <ImageGalleryItem key={image.id} smallImage={image.webformatURL} largeImage={image.largeImageURL} onClick={onClick}/>))}
    </ul>
  );
};

export default ImageGallery;
