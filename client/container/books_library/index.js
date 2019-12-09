import React , { Component } from 'react';
import BookList from '../../component/book_list';
import Heading from '../../component/heading';
import BookInfo from '../../component/book_info';
import AddBook from '../add_book';

import './style.scss';

class BooksLibrary extends Component {
  render() {
    return (
      <div className='division-container'>
          <div className='left-division'>
            <Heading />
            <BookList />
            <AddBook />
          </div>
          <div className='right-division'>
            <BookInfo />
          </div>
      </div>
    );
  }
}

export default BooksLibrary; 