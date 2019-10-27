import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import MovieDetails from '../pages/MovieDetails';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path='/' component={HomePage} />
          <Route path='/details/:idMovie' component={MovieDetails} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
