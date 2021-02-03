import React from 'react'
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({ id, webimg, onClick, largeimg, onImgClick }) =>(
  <li className={styles.ImageGalleryItem}
      onClick={onClick}>
    <img 
      src={webimg} 
      alt={id} 
      data-source={largeimg}
      className={styles.ImageGalleryItemImage}
      onClick={onImgClick}
    />
  </li>
)

ImageGalleryItem.propTypes={
  onClick: PropTypes.func,
  onImgClick: PropTypes.func,
  id:  PropTypes.number,
  webimg: PropTypes.string,
  largeimg: PropTypes.string,
}

export default ImageGalleryItem

