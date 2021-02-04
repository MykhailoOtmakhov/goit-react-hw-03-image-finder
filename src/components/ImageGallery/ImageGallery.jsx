import { Component } from 'react';
import PropTypes from 'prop-types';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner";
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import styles from './ImageGallery.module.css'
import Button from '../Button/Button';
import fetchAPI from '../../ImageApiService';
import Modal from '../Modal/Modal';

export default class ImageGallery extends Component {
      state ={
        images: null,
        error: null,
        status: 'idle',
        hits: [],
        page: 1,
        showModal: false,
        largeimg: null,
    }
      componentDidUpdate(prevProps, prevState){
        const prevName = prevProps.imageTag;
        const nextName = this.props.imageTag;
        const actualPage = this.state.page;
        console.log(this.state);

        if(prevName !== nextName){
          this.setState({status: 'pending'});

          fetchAPI.fetchImage(nextName,actualPage)
          .then(images => this.setState({images, hits: images.hits, page: actualPage+1, status: 'resolved'}))
          .catch(error => this.setState({error, status: 'resjected'}))
        }
      }

          moreImages = () =>{            
            const {page, hits} = this.state;
            const actualPage = page + 1;
            console.log(this.state);

            function scrollDown () {
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
              });
            }

            fetchAPI.fetchImage(this.props.imageTag, actualPage)
            .then(images => this.setState({images, page: actualPage, hits:[...hits,...images.hits]}))
            .then(()=>scrollDown())
            .catch(error => this.setState({error, status: 'resjected'}))           
          }

          toggleModal = () => {
            this.setState(({showModal}) =>({
              showModal: !showModal
            }));
          }

          handleImgClick = event => {
            const actImage = event.target.dataset.source;
            if(event.target.nodeName === 'IMG') {
                this.setState(({largeimg}) =>({
                  largeimg : actImage,
                }))
            }
            console.log(this.state.largeimg); 
          }

  render() {
    const {error, status, hits, showModal, largeimg} = this.state;

    if(status === 'idle') {
      return <div>Введите, что искать</div>
    }

    if(status === 'pending') {
      return (
        <div>
            Загружаем...
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />
        </div>
      )
    }

    if(status === 'rejected') {
      return <h1>{error.message}</h1>
    }

    if(status === 'resolved') {
      return  (
        <div>
          <ul className={styles.ImageGallery}>
            {hits.length === 0
              ? 'Ничего не найдено'
              : hits.map(({id, webformatURL, largeImageURL}) =>(
              <ImageGalleryItem 
                key = {id}
                webimg = {webformatURL}     
                largeimg = {largeImageURL}  
                onClick = {this.toggleModal}  
                onImgClick={this.handleImgClick}       
              />
            ))
            }
          </ul>
          {hits.length > 0 && <Button 
            onButtonClick={this.moreImages}
          />}
          {showModal &&  
            <Modal 
              onClose={this.toggleModal}
              largeimg={largeimg}
              onImgClick={this.handleImgClick}>
            </Modal>}
        </div>
      )
    }  
  }
}

ImageGallery.defaultProps = {
  imagesTag: '',
  images: null,
  error: null,
  status: 'idle',
  hits: [],
  page: 1,
  showModal: false,
  largeimg: null,
}

ImageGallery.propTypes={
  imageTag: PropTypes.string,
  images: PropTypes.array,
  error: PropTypes.string,
  status: PropTypes.string,
  hits: PropTypes.array,
  page:  PropTypes.number,
  showModal: PropTypes.bool,
  largeimg: PropTypes.string,
}
