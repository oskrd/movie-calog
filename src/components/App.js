import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MovieDetails from '../pages/MovieDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={HomePage} />
          <Route path='/details' component={MovieDetails} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
