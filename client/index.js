import { render } from 'react-dom';
import React from 'react';
import BooksLibrary from './container/books_library';

const app = document.getElementById('root');

render(
  <BooksLibrary />,
	app
);