import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGallery from './components/ImageGallery/ImageGallery'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from "react-loader-spinner";
import Button from './components/Button/Button';
// import imageAPI from './ImageApiService';
import ImageApiService from './ImageApiService';

export default class ImageApi extends Component {
    state ={
        image: null,
        error: null,
        status: 'idle',
        page: 1,
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.imageTag !== this.props.imageTag){
            this.setState({status: 'pending'});

            ImageApiService.fetchImage(this.props.imageTag)
            .then(image => this.setState({ image, status: 'resolved' }))
            .catch(error => this.setState({error, status: 'rejected'}));
        }
    }


    // moreImages = () =>{
    //     // console.log(prevState.page);
    //     this.setState({            
    //         page: this.props.page + 1,
    //       })
    //     }


    render() {
        const { image, error, status} = this.state;

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
                <>
                <ImageGallery image={image}/>
                <Button 
                    // onClick={this.moreImages}
                />
                </>
            )
        }
    }
}
