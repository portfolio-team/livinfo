// import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});