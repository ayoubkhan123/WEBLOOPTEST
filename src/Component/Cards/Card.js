import React from 'react'
import "./Cards.css";

function Card() {
    return (
        <div className="Card">
        <div className="child-card">
        <h1>Who let the SOLTHzz <br/> out!?</h1>
        <h2>Join the SOLTHZ Gang</h2>
        </div>

            <div className="main-cards">
            <div className="card-div">
            <img src="http://nigeria.alshumaal.com/static/media/hero1.a13e15c7.gif"/>
            </div>
            <div className="card-div">
            <img src="http://nigeria.alshumaal.com/static/media/hero2.dd351f01.gif"/>
            </div>
            <div className="card-div">
            <img src="http://nigeria.alshumaal.com/static/media/hero3.3e6d7d4f.gif"/>
            </div>
            <div className="card-div">
            <img src="http://nigeria.alshumaal.com/static/media/hero4.dc80de94.gif"/>
            </div>
            


            </div>
            <div className="mint-button">
            <a className="button2">MINT NOW!</a>

            </div>


            <div className="numbers">
            <div className="main-num">
            <h2>9999 <br/> <span>SLOTHz</span></h2>
            <h2>156 <br/> <span>TRAITS</span></h2>
            <h2>10 <br/> <span>CUMMUNITY PRIZES</span></h2>
            <h2>20 <br/> <span>EXCLUSIVE SLOTHz</span></h2>
            </div>
           



            </div>



        </div>
    )
}

export default Card;
