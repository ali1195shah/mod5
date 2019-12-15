import React, { Component } from 'react';
import Movie from './Movie.js'


export class MovieDisplay extends Component {
    render() {
        const allMovie = this.props.allmovies.map(flim => <Movie movie={flim} key={flim.id}/>)
        return (
            <div>
                { allMovie }
            </div>
        );
    }
}

export default MovieDisplay;
