import React, { Component } from 'react';
import Sentence from './components/Sentence';

import './App.css';

class App extends Component {
  render() {
    return (
        <Sentence time={ 500 } sentences={ ["Trzeba z żywymi naprzód iść, po życie sięgać nowe...",  "A nie w uwiędłych laurów liść z uporem stroić głowę."] }/>
    );
  }
}

export default App;
