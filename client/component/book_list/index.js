import React from 'react';
import './style.scss';

const renderBooksList = () => {
  const data = ['Hamlet', 'Waiting For Godot'];
  const renderData = <div>{data.map(item => <button className='list-button'>{item}</button>)}</div>
  return (
    renderData
  );
};

export default renderBooksList;