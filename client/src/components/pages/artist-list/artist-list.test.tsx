import React from 'react';
import ReactDOM from 'react-dom';
import ArtistList from './ArtistList';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ArtistList />, div);
  ReactDOM.unmountComponentAtNode(div);
});