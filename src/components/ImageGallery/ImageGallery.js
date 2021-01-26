import { Component } from 'react';
// import PropTypes from 'prop-types';
// import ImageGallery from './components/ImageGallery/ImageGallery'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner";
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import styles from './ImageGallery.module.css'
import Button from '../Button/Button';
// import imageAPI from './ImageApiService';
// import ImageApiService from './ImageApiService';

export default class ImageGallery extends Component {
      state ={
        images: null,
        error: null,
        status: 'idle',
        page: 1,
    }
      componentDidUpdate(prevProps, prevState){
        const prevName = prevProps.imageTag;
        const nextName = this.props.imageTag;

        if(prevName !== nextName){
          this.setState({status: 'pending'});

          fetch(`https://pixabay.com/api/?q=${nextName}&page=${this.state.page}&key=19192524-a42a2a32afb109ad508e945f7&image_type=photo&orientation=horizontal&per_page=12`)
          .then(res => {
            if(res.ok){
              return res.json();
            }

            return Promise.reject(
              new Error(`Нет такого ${nextName}`),
            );
          }) 
          .then(images => this.setState({images, status: 'resolved'}))
          .catch(error => this.setState({error, status: 'resjected'}))
        }
      }

          moreImages = () =>{
            const actualPage = this.state.page + 1;
            this.setState({            
              page: this.state.page + 1,
              images: this.state.images,
            })    

          console.log(this.state); 
          
          fetch(`https://pixabay.com/api/?q=${this.props.imageTag}&page=${actualPage}&key=19192524-a42a2a32afb109ad508e945f7&image_type=photo&orientation=horizontal&per_page=12`)
          .then(res => {
            if(res.ok){
              return res.json();
            }

            return Promise.reject(
              new Error(`Нет такого ${this.props.imageTag}`),
            );
          }) 
          .then(images => this.setState({images, status: 'resolved'}))
          .catch(error => this.setState({error, status: 'resjected'}))
        }

  render() {
    const {images, error, status} = this.state;

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
            {images.hits.map(({id, webformatURL, largeImageURL}) =>(
              <ImageGalleryItem 
                key = {id}
                webimg = {webformatURL}
                largeimg = {largeImageURL}
              />
            ))}
          </ul>
          <Button 
            onButtonClick={this.moreImages}
          />
        </div>
      )
    }  
  }
}

// return(
//   <div>
//     {/* <p>{this.props.imagesTag}</p> */}
//     {this.state.images && <div>{this.state.images.total}</div>}
//   </div>
// )
// }





    // state ={
    //     image: null,
    //     error: null,
    //     status: 'idle',
    //     page: 1,
    // }
    // componentDidUpdate(prevProps, prevState){
    //     if(prevProps.imageTag !== this.props.imageTag){
    //         this.setState({status: 'pending'});

    //         ImageApiService.fetchImage(this.props.imageTag)
    //         .then(image => this.setState({ image, status: 'resolved' }))
    //         .catch(error => this.setState({error, status: 'rejected'}));
    //     }
    // }


    // moreImages = ({image, page}) =>{
    //     console.log(this.state.page );
    //     this.setState({            
    //         page: this.state.page + 1,
    //         image: this.state.image,
    //       })
    //       ImageApiService.fetchImage(this.props.image)
    //         .then(image => this.setState({ image, page, status: 'resolved' }))
    //         .catch(error => this.setState({error, status: 'rejected'}));

    //     }


//     render() {
//         const { image, error, status} = this.state;

//         if(status === 'idle') {
//             return <div>Введите, что искать</div>
//         }

//         if(status === 'pending') {
//             return (
//                 <div>
//                     Загружаем...
//                     <Loader
//                         type="Puff"
//                         color="#00BFFF"
//                         height={100}
//                         width={100}
//                         timeout={3000} //3 secs
//                     />
//                 </div>
//             )
//         }

//         if(status === 'rejected') {
//             return <h1>{error.message}</h1>
//         }

//         if(status === 'resolved') {
//             return  (
//                 <>
//                 <ImageGallery 
//                     image={this.state.image}
//                     page={this.state.page}/>
//                 <Button 
//                     onButtonClick={this.moreImages}
//                 />
//                 </>
//             )
//         }
//     }
// }








// import React  from 'react';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import styles from './ImageGallery.module.css'

//  function ImageGallery ({image: {hits}}) {
//     return (
//       <div>
//         <ul className={styles.ImageGallery}>
//         {hits.map(({id, webformatURL, largeImageURL}) =>(
//           <ImageGalleryItem 
//             key = {id}
//             webimg = {webformatURL}
//             largeimg = {largeImageURL} 
//           />
//           )
//         )}
//         </ul>
//       </div>
//     )
//   }

//   export default ImageGallery

