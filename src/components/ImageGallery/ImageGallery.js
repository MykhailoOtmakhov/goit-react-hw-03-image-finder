import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css'

 function ImageGallery ({image: {hits}}) {
    return (
      <div>
        <ul className={styles.ImageGallery}>
        {hits.map(({id, webformatURL, largeImageURL }) =>(
          <ImageGalleryItem 
            key = {id}
            webimg = {webformatURL}
            largeimg = {largeImageURL} 
          />
          )
        )}
        </ul>
      </div>
      
    )
  }

  export default ImageGallery

