import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';


export class Navbar extends Component {
    render() {
        return (
            <div>
              <div className="topnav">
                <a className="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
              </div>  
            </div>
        );
    }
}

export default Navbar;
