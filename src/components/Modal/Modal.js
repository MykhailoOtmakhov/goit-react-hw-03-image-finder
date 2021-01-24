import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Modal extends Component {
    static propTypes = {
        prop: PropTypes
    }

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

    render() {
        return (
            <div className="Overlay">
              <div className="Modal"
                    >
                <img src="" alt="" />
              </div>
            </div>
        )
    }
}

