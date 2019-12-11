import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import './style.scss';

const getBooksQuery = gql`
 {
   books {
     name,
     id
   }
 }
`;

const renderBooksList = ({ handleClick, bookAdded }) => {
  const { loading, error, data, refetch } = useQuery(getBooksQuery);
  if(loading) return <div>Loading books...</div>;
  if(error) return <div>Error in loading books..</div>;
  if(bookAdded){
    refetch();
  }
  return <div>{data && data.books.map((item, idx) => <button key={idx} onClick={() => handleClick(item.id)}className='list-button'>{item.name}</button>)}</div>;
};

export default renderBooksList;