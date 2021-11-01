import React from 'react';
import './App.css';
import Home from './Container/Home';
import Movie from './Container/Movie';
import { Router } from '@reach/router'
import { GlobalStyle } from './components/styles/GlobalStyle'
import { Header } from './components/Navigation/Header/Header';
import { NotFound } from './components/NotFound/NotFound';

const App = () => {
  return (
    <div className="App">
        <GlobalStyle />
        <Header />
        <Router>
          <Home path="/"/>
          <Movie path="/:movieId"/>
          <NotFound default/>
        </Router>
    </div>
  );
}


export default App;
