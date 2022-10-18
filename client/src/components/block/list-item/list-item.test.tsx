import ReactDOM from 'react-dom';
import ListItem from './list-item';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});