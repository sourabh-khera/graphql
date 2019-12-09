import React from 'react';
import './style.scss';

const renderBookInfo = () => {
 return (
   <div className='info-container'>
     <h4 className='book-heading'>Hamlet</h4>
     <div className='book-details'>Drama</div>
     <div className='book-details'>Samuel Beckett</div>
     <div className='book-details'>All books by this author</div>
     <ul className='book-details'>
       <li>Hamlet</li>
       <li>Waiting For Godot</li>
     </ul>
   </div>
 )
};

export default renderBookInfo;