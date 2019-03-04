import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Sentence from './components/Sentence'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it('correct sentence timing sequence', () => {
//  const div = document.createElement('div');
//   ReactDOM.render(<Sentence />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
