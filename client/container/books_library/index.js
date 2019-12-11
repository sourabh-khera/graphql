import React , { Component } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import BookList from '../../component/book_list';
import Heading from '../../component/heading';
import BookInfo from '../../component/book_info';
import AddBook from '../add_book';

import './style.scss';

class BooksLibrary extends Component {
  
  state = {id: undefined, bookAdded: false}

  handleBookClick = id => {
    this.setState({id});
  }

  updateBookAdded = added => {
   this.setState({bookAdded: added});
  }

  render() {
    const { id, bookAdded } = this.state;
    const showInfo = id ? <BookInfo bookId={id} /> : null;
    return (
      <div className='division-container'>
        <div className='left-division'>
          <Heading />
          <BookList handleClick={this.handleBookClick} bookAdded={bookAdded}/>
          <AddBook updateBookAdded={this.updateBookAdded}/>
        </div>
        <div className='right-division'>
          {showInfo}
        </div>
      </div>
    );
  }
}

export default BooksLibrary; 