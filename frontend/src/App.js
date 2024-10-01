// src/App.js
import React from 'react';
import Header from './components/Header';
import Cart from './components/Cart';
import TryOn from './components/TryOn';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Cart />
      <TryOn />
    </div>
  );
}

export default App;

