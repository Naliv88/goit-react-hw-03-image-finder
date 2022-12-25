import React from 'react';
import style from './ImageGalleryItem.module.css'

 const ImageGalleryItem = ({ smallImage, largeImage, onClick }) => {
  return (
    <li className={style.ImageGalleryItem}>
      <img
        className={style.ImageGalleryItemImage}
        onClick={() => onClick(largeImage)}
        src={smallImage}
        alt="gallaryImg"
      />
    </li>
  );
};
export default ImageGalleryItem;