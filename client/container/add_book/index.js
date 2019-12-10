import React, {Component} from 'react';
import { gql } from 'apollo-boost';
import axios from 'axios';
import { Query } from 'react-apollo';
import './style.scss';

class AddBook extends Component {
  state = {
    authors: [],
    bookName: '',
    genre: '',
  }
 
  handleChange = e => {
    const {name, value} = e.target;
    this.setState({[name]: value}, ()=>{
    });
  }
  async componentDidMount() {
    const getAuthors = `
    {
       authors {
         name,
         id
       }
     }
    `;
   const response = await axios.post('http://localhost:4000/graphql', {
     query: getAuthors
   });
   const { data } = response;
   this.setState({authors: data.data.authors})
  }
   
  render(){
    const { authors, bookName, genre } = this.state;
    const renderAuthors = authors.length ? authors.map((item, idx)=><option key={idx} value={item.name}>{item.name}</option>) : [];
    return (
     <div className='add-book-container'>
       <div className='add-book-left'>
         <span><i className='fas fa-plus-circle add-button'></i></span>
       </div>
       <div className='add-book-right'>
         <div className='field'>
           <div className='field-left'>
           <label>Book name:</label>             
           </div>
           <div className='field-right'>
           <input type='text' name='bookName' value={bookName} onChange={this.handleChange} />             
           </div>
         </div>
         <div className='field'>
           <div className='field-left'>
             <label>Genre:</label>             
           </div>
           <div className='field-right'>
             <input type='text' name='genre' value={genre} onChange={this.handleChange} />             
           </div>
         </div>
         <div className='field'>
           <div className='field-left'>
             <label>Author:</label>             
           </div>
           <div className='field-right'>
              <select className='select-option'>
                {renderAuthors}
              </select>
           </div>
         </div>
       </div>         
     </div> 
    );
  }
}

export default AddBook;