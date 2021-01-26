// import React, { Component } from 'react'
// // import PropTypes from 'prop-types'
// import styles from './Button.module.css'

// export default class Button extends Component {

//     render() {
//         return (
//             <button
//                 className={styles.Button}
//                 onClick={onButtonClick}>
//                 More...
//             </button>              
            
//         )
//     }
// }


import React, { Component } from 'react'
// import PropTypes from 'prop-types'
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

export default Button
    
