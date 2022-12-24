import React, { Component } from 'react';

 const ImageGalleryItem = ({ smallImage, largeImage, onClick }) => {
  return (
    <li>
      <img
        onClick={() => onClick(largeImage)}
        src={smallImage}
        alt="gallaryImg"
      />
    </li>
  );
};
export default ImageGalleryItem;