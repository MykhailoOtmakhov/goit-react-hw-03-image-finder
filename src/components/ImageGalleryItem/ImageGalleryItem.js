import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css'


const ImageGalleryItem = ({ webimg, }) =>(
<li className={styles.ImageGalleryItem}>
  <img 
    src={webimg} 
    alt="" 
    className={styles.ImageGalleryItemImage} 
    // onImgClick={showModal}
  />
</li>
)
export default ImageGalleryItem

