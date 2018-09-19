import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component {
  render() {
    return (
      <div>
        <MoviePoster / >
        <h1> Hello this is a movie</h1>
      </div>
    )
  }
}

class MoviePoster extends Component {
  render() {
      return(
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR36-esdyVUQLJVePVzWbl2E5vLJ9X3KMmofDBp4s5OUs-KUwGU" />
      )
  }
}

export default App;
