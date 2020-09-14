import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';

import { Navbar } from './components/navbar/Navbar';
import Pokemons from './components/Pokemons';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Provider store={store}>
        <Pokemons/>
      </Provider>
    </div>
  );
}

export default App;
