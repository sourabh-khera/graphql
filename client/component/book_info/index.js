import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import './style.scss';

const getBookDetails = gql`
  query Book($bookId: ID!) { 
    book(id: $bookId){
      id,
      name,
      genre,
      author {
        name
        books {
          name
        }
      }
    }
  }
`;
const renderBookInfo = ({bookId}) => {
 const { loading , error, data } = useQuery(getBookDetails, { variables: { bookId }});
//  console.log(data, "data----", error, "error-----")
 if(loading) return <div>Loading book details...</div>;
 if(error) return <div>Error in loading book details..</div>;
 if(data && data.book){
  return (
    <div className='info-container'>
     <h4 className='book-heading'>{data.book.name}</h4>
     <div className='book-details'>{data.book.genre}</div>
     <div className='book-details'>{data.book.author.name}</div>
     <div className='book-details'>All books by this author</div>
     <ul className='book-details'>
       {
        data.book.author.books.map((item, idx) => <li key={idx}>{item.name}</li>)
       }
     </ul>
    </div>
  )
 } else {
   return null;
 }
};

export default renderBookInfo;