import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className="gallery">
          {/* <!-- Набір <li> із зображеннями --> */}
          {images.map(image=>(
      <ImageGalleryItem key={image.id} smallImage={image.webformatURL} largeImage={image.largeImageURL} onClick={onClick}/>))}
    </ul>
  );
};

export default ImageGallery;
