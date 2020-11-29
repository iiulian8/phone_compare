import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./style.css";
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Checkout from './Pages/Checkout';
import About from './Pages/About';
import Navigation from './CommonComp/Navigation';
import Footer from './CommonComp/Footer';
import SearchBar from './Pages/SearchBar';
import { contextBasket } from './Contexts/Basket';

const App = (props) => {
  const [basket, updateBasket] = useState([]);

  return (

    <BrowserRouter>

      <Navigation />

      <Switch>

        <Route path='/' exact component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Contact' component={Contact} />

        <contextBasket.Provider value={[basket, updateBasket]}>
          <Route path='/Checkout' component={Checkout} />
          <Route path='/Comparison' component={SearchBar} />
        </contextBasket.Provider>

      </Switch>

      <Footer />
    </BrowserRouter>
  );

}

export default App;

