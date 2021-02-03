import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Searchbar from './components/Searchbar/Searchbar';
import PropTypes from 'prop-types';

export default class App extends Component {
  state = {
    imagesTag: '',
  }

  handleFormSubmit = imageTag =>{
    this.setState({imageTag})
    console.log(imageTag);
  }

  render(){
    return(
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery 
          imageTag={this.state.imageTag}
        />
        <ToastContainer autoClose={2500}/>
      </div> 
    )
  }
}

App.propTypes={
  imageTag: PropTypes.string,
}

App.defaultProps = {
  imagesTag: '',
}