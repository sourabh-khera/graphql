import React , { Component } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import BookList from '../../component/book_list';
import Heading from '../../component/heading';
import BookInfo from '../../component/book_info';
import AddBook from '../add_book';

import './style.scss';

class BooksLibrary extends Component {
  
  state = {id: undefined}

  handleBookClick = id => {
    this.setState({id});
  }
  render() {
    const { id } = this.state;
    const showInfo = id ? <BookInfo bookId={id} /> : null;
    return (
      <div className='division-container'>
        <div className='left-division'>
          <Heading />
          <BookList handleClick={this.handleBookClick}/>
          <AddBook />
        </div>
        <div className='right-division'>
          {showInfo}
        </div>
      </div>
    );
  }
}

export default BooksLibrary; 