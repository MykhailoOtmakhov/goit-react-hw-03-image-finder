import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import ImageGallery from './components/ImageGallery/ImageGallery';
// import Modal from './components/Modal/Modal';
import Searchbar from './components/Searchbar/Searchbar'
// import ImageApi from './ImageApi';
// import ImageApiService from './ImageApiService';

export default class App extends Component {
  state = {
    imagesTag: '',
    // page: 1,
    // images: null,
    // loading: false,
    // showModal: false,
  }
 
  // toggleModal = () => {
  //   this.setState(state =>({showModal: !state.showModal}));
  // }

  handleFormSubmit = imageTag =>{
    this.setState({imageTag})
    console.log(imageTag);
  }

  render(){
    // const {showModal} = this.state;

    return(
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imageTag={this.state.imageTag} />
        {/* <ImageApi imageTag={this.state.imageTag}/> */}
        {/* <Modal 
          onClose={this.toggleModal}
          >
        </Modal> */}
        <ToastContainer autoClose={2500}/>
      </div> 
    )
  }
}





// import React, { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
// import Modal from './components/Modal/Modal';
// import Searchbar from './components/Searchbar/Searchbar'
// import ImageApi from './ImageApi';
// // import ImageApiService from './ImageApiService';

// export default class App extends Component {
//   state = {
//     image: ' ',
//     loading: false,
//     showModal: false,
//   }

//   componentDidMount(){
//     this.setState({loading: true})
//     fetch(`https://pixabay.com/api/?q=${this.state.imageTag}&page=1&key=19192524-a42a2a32afb109ad508e945f7&image_type=photo&orientation=horizontal&per_page=12`)
//     .then(res => res.json())
//     .then(image => this.setState({image}))
//     .finally(()=>this.setState({loading: false}));
//   }

//   toggleModal = () => {
//     this.setState(state =>({showModal: !state.showModal}));
//   }

//   handleFormSubmit = imageTag =>{
//     this.setState({imageTag})
//     console.log(imageTag);
//   }

//   render(){
//     // const {showModal} = this.state;

//     return(
//       <div>
//         <Searchbar onSubmit={this.handleFormSubmit} />
//         <ImageApi imageTag={this.state.imageTag}/>
//         {/* <Modal onClose={this.toggleModal}>
//         </Modal> */}
//         <ToastContainer />
//       </div>
      
//     )
//   }
// }
