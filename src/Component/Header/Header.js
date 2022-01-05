import React from 'react';
import "./Header.css";
import logo from "../../Assets/logo.png";
import {BrowserRouter as Router, routes, route, Routes, Route, Link} from "react-router-dom";
    


function Header() {
    return (
        <div className="Header">
        <div className="nav-logo">
        <div className="row">
        <img src={logo}/>
        <div className="text">
        <h1>SOLTHZ</h1>
        <h2>Aku Datusing</h2>
        </div>
        </div>


        <div className="router">
        <Router>
        <nav>
        <Link className="Links" to="/">Home</Link>
        <Link className="Links" to="/">Mint</Link>
        <Link className="Links" to="/">Stats</Link>
        <Link className="Links" to="/">Roadmap</Link>
        <Link className="Links" to="/">Team</Link>
        <Link className="Links" to="/">FAQ</Link>
        </nav>
        </Router>
        







        </div>
        <div className="button">
        <button>Connent to Wallet</button>
        </div>
        <div className="main-icon"><i class="fas fa-bars"></i></div>





        </div>
      


            
        </div>
    )
}

export default Header;
