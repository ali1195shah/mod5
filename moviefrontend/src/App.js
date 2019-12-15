import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import MovieDisplay from './components/MovieDisplay'
import './App.css'

export class App extends Component {

  state = {
    movies: []
  }

  componentDidMount = async() => {
    let allMovies = await fetch('http://localhost:3000/movies')
    let movies = await allMovies.json()
      this.setState({
        movies
      })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <MovieDisplay allmovies={ this.state.movies }/>

      </div>
    );
  }
}

export default App;



// src="https://finalfantasyxv.square-enix-games.com//public/video/ffxv-reclaim-your-throne-bg.webm" type="video/webm">