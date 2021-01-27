import React from 'react'
// import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({ webimg, showImage }) =>(
<li className={styles.ImageGalleryItem}
    onClick={showImage}>
  <img 
    src={webimg} 
    alt="" 
    className={styles.ImageGalleryItemImage} 
    // onImgClick={showModal}
  />
</li>
)
export default ImageGalleryItem

