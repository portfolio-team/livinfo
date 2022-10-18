import ReactDOM from 'react-dom';
import List from './list';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List />, div);
  ReactDOM.unmountComponentAtNode(div);
});