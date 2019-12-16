import React, { Component } from 'react';
import MovieDisplay from '../components/MovieDisplay'

export class MovieContainer extends Component {
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
            <div>
                <MovieDisplay allmovies={ this.state.movies } />
            </div>
        );
    }
}

export default MovieContainer;
