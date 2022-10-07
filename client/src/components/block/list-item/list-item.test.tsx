import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from './ListItem';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});