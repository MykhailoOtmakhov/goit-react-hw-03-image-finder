import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.css'

function Button ({onButtonClick}){
    return (
        <button
            className={styles.Button}
            onClick={onButtonClick}>
            More...
        </button>              
    )
}

Button.protoTypes={
    onButtonClick: PropTypes.func,
}

export default Button
    
