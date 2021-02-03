import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from '../Modal/Modal.module.css'

class Modal extends Component {

    componentDidMount(){
        window.addEventListener('keydown', this.handleEsc)
    }

    componentWillUnmount(){
        window.removeEventListener('keydown', this.handleEsc)
    }

    handleEsc = e =>{
        if (e.code === 'Escape'){
            this.props.onClose();
        }
    }

    handleBackdropClick = event => {
        if(event.currentTarget === event.target) {
            this.props.onClose();
        }
    }

    render() {
        return (
            <div 
                className={styles.Overlay}
                onClick={this.handleBackdropClick}
            >
              <div className={styles.Modal}>
                <img 
                    src={this.props.largeimg} 
                    // 
                    alt="" 
                    className=""/>
              </div>
            </div>
        )
    }
}

Modal.propTypes={
    onClose: PropTypes.func,
    onImgClick: PropTypes.func,
    largeimg: PropTypes.string,
}

export default Modal
