import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Movie from './Movie'

class Rented extends Component {

    render(){
        return(
            <div className="rented">
                <p>Rented:</p>
                <div className="movies-container">
                    {this.props.movies.map(m => {
                        if(m.isRented && m.title.toLowerCase().includes(this.props.searchText.toLowerCase()) ){
                            return( 
                                <Movie movie={m} rented="unrent" rentMovie={this.props.rentMovie} updateBudget={this.props.updateBudget} budget={this.props.budget}/>
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
}

export default Rented