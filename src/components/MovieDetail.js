import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import '../styles/MovieDetail.css'

class MovieDetail extends Component{
    render(){
        let id = this.props.match.params.movieID
        let movie = this.props.movies.find(m => m.id == id)
        return(
            <div className="movie">
                 <h3 className="movie-title">{movie.title} ({movie.year})</h3>
                <img className="movie-img" src={movie.img}></img>
                <p className="movie-plot">{movie.descrShort}</p>  
            </div>
        )
    }
}

export default MovieDetail