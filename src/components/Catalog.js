import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Movie from './Movie'
import Rented from './Rented';
import '../styles/Catalog.css'

class Catalog extends Component {
    constructor(){
        super()
        this.state = {
            searchText: "",
            budget: 10
        }
    }

    updateSearchText = (event) => {
        this.setState({ searchText: event.target.value})
    }

    updateBudget = (amount) => {
        this.setState({budget: this.state.budget + amount})
    }
   
    render(){
        return(
            <div className="catalog-container">
                <h3 className='budget'>Budget: {this.state.budget}</h3>
                <input className="search" placeholder="Search" value={this.state.searchText} onChange={this.updateSearchText}></input>
                { this.props.show ? <Rented movies={this.props.movies} rentMovie={this.props.rentMovie} searchText={this.state.searchText} updateBudget={this.updateBudget} budget={this.state.budget}/> : null }
                <p>Catalog:</p>
                <div className="movies-container">
                    {this.props.movies.map(m => {
                        if(!m.isRented && m.title.toLowerCase().includes(this.state.searchText.toLowerCase())){
                            return( 
                                <Movie movie={m} rented="rent" rentMovie={this.props.rentMovie} updateBudget={this.updateBudget} budget={this.state.budget}/>
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
}

export default Catalog