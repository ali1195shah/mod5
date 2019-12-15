// import React, { Component } from 'react';

// export class Movie extends Component {
//     render() {
        
//         return (
            // <div id={this.props.key}>
            //     <div className="movie_card" id="bright">
            //     <div className="info_section">
            //         <div className="movie_header">
            //         <img className="locandina" src={this.props.movie.poster_img}/>
            //         <h1>Bright</h1>
            //         <h4>2017, David Ayer</h4>
            //         <span className="minutes">117 min</span>
            //         <p className="type">Action, Crime, Fantasy</p>
            //         </div>
            //         <div className="movie_desc">
            //         <p className="text">
            //             Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for. 
            //         </p>
            //         </div>
            //         <div className="movie_social">
            //         <ul>
            //             <li><i className="material-icons">share</i></li>
            //             <li><i className="material-icons"></i></li>
            //             <li><i className="material-icons">chat_bubble</i></li>
            //         </ul>
            //         </div>
            //     </div>
            //     <div className="blur_back bright_back">

            //     </div>
            //     </div>
            // </div>
//         );
//     }
// }

// export default Movie;




import React from 'react';
import './Movie.scss'

const Movie = (props) => {
    // const image = props.movie.poster_img
    return (
        <div id={props.id}>
                <div className="movie_card" id="bright">
                <div className="info_section">
                    <div className="movie_header">
                    <img className="locandina" src={props.movie.poster_img} alt={props.movie.title}/>
                    <h3>{props.movie.title}</h3>
                    <h4>{props.movie.year}, {props.movie.director}</h4>
                    <span className="minutes">{props.movie.runtime}</span>
                    <p className="type">{props.movie.genre}</p>
                    </div>
                    <div className="movie_desc">
                    <p className="text">{props.movie.plot}</p>
                    </div>
                    <div className="movie_social">
                    <ul>
                        <li><i className="material-icons">share</i></li>
                        <li><i className="material-icons"></i></li>
                        <li><i className="material-icons">chat_bubble</i></li>
                    </ul>
                    </div>
                </div>
                <div className="blur_back bright_back" >
                    <img alt={props.movie.title} src={props.movie.poster_img} style={{width: '70%', height: '350px'}}/>
                </div>
                </div>
            </div>
    );
}

export default Movie;
