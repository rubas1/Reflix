import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import '../styles/Movie.css'

class Movie extends Component {
    rentMovie = () => {
        let amount = 3
        if(this.props.rented === "rent"){
            amount = -3
        }
        if(this.props.budget+amount < 0){
            alert("OUT OF BUDGET")
        }else{
            this.props.updateBudget(amount)
            this.props.rentMovie(this.props.movie.id)
        }
    }

    render(){
        return(
            <div className="movie">
                <button className="rent-unrent" onClick={this.rentMovie}>{this.props.rented}</button>
                <Link to={`/details/${this.props.movie.id}`}>
                    <img className="movies-img" src={this.props.movie.img}></img>
                </Link>
            </div>
        )
    }
}

export default Movie