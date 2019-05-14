import React from 'react';
import './App.css';
import Header from './container/header';
import Banner from './container/banner.js';
import Electronic from './container/electronic/electronic.js';
import Clothes  from './container/clothes/index';
import Cart  from './container/cart/index';
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Clothes />
      <Electronic />
      <Cart />
    </div>
  );
}

export default App;
