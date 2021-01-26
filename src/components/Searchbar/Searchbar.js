import React, { Component } from 'react'
import styles from './Searchbar.module.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import PropTypes from 'prop-types'

export default class Searchbar extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
  state ={
    imageTag: '',
    // page: 1,  
  }

  handleTagChange = evt => {
    this.setState({ imageTag: evt.currentTarget.value.toLowerCase()
    })
  }

  handleSubmit = evt => {
    evt.preventDefault();
    if(this.state.imageTag.trim() === ''){
      toast('Enter some word!')
      return;
    }

    this.props.onSubmit(this.state.imageTag);
    this.setState({imageTag: ''})
  }

  render() {
    return (
      <header className={styles.Searchbar}>
        <form 
          className={styles.SearchForm}
          onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.imageTag}
            onChange={this.handleTagChange}
          />
        </form>
      </header>
    )
  }
}



// import React, { Component } from 'react'
// import styles from './Searchbar.module.css'
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// // import PropTypes from 'prop-types'

// export default class Searchbar extends Component {
//   // static propTypes = {
//   //   prop: PropTypes
//   // }
//   state ={
//     imageTag: '',
//     // page: 1,  
//   }

//   handleTagChange = evt => {
//     this.setState({ imageTag: evt.currentTarget.value.toLowerCase()
//     })
//   }

//   handleSubmit = evt => {
//     evt.preventDefault();
//     if(this.state.imageTag.trim() === ''){
//       toast('Enter some word!')
//       return;
//     }

//     this.props.onSubmit(this.state.imageTag);
//     this.setState({imageTag: ''})
//   }

//   render() {
//     return (
//       <header className={styles.Searchbar}>
//         <form 
//           className={styles.SearchForm}
//           onSubmit={this.handleSubmit}>
//           <button type="submit" className={styles.SearchFormButton}>
//             <span className={styles.SearchFormButtonLabel}>Search</span>
//           </button>

//           <input
//             className={styles.SearchFormInput}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={this.state.imageTag}
//             onChange={this.handleTagChange}
//           />
//         </form>
//       </header>
//     )
//   }
// }
