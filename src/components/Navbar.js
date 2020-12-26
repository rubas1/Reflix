import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import '../styles/Navbar.css'

class Navbar extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div className="navbar-container">
                <Link to="/">Home</Link>
                <Link to="/catalog">Catalog</Link>
                <p className="logo">Reflix</p>
            </div>
        )
    }
}

export default Navbar
