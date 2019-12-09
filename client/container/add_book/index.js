import React, {Component} from 'react';
import './style.scss';

class AddBook extends Component {
  render(){
    return (
     <div className='add-book-container'>
       <div className='add-book-left'>
         <span><i className='fas fa-plus-circle add-button'></i></span>
       </div>
       <div className='add-book-right'>
         <div className='field'>
           <label>Book name:</label>
           <input type='text' onChange={()=>{}} />
         </div>
         <div className='field'>
           <label>Genre:</label>
           <input type='text' onChange={()=>{}} />
         </div>
         <div className='field'>
           <label>Author:</label>
           <select className='select-option'>
             <option>William Shakespeare</option>
             <option>Samuel Beckett</option>
             <option>William Peter Blatty</option>
           </select>
         </div>
       </div>         
     </div> 
    );
  }
}

export default AddBook;