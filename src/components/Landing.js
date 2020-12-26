import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import '../styles/Landing.css'

class Landing extends Component {
    constructor(){
        super()
        this.state = {
            users: [
                { name:"Tom", bgColor:"#282c34" },
                { name:"Julia", bgColor:"#61dafb" }
            ]
        }
    }

    render(){
        return(<div>
            <h1 className="title">WHO'S WARCHING ?</h1>
            <div className="users-container">
                {this.state.users.map(user => {
                    return( 
                        <Link to="/catalog">
                        <div className="user" style={{backgroundColor: user.bgColor}}>{user.name}</div> 
                        </Link>
                    )
                })}
            </div>
        </div>)
    }
}

export default Landing