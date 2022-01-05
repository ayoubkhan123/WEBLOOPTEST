import React from 'react'
import "./Cards.css";
import Img1 from "../../Assets/hero2.dd351f01.gif"
import Img2 from "../../Assets/hero3.3e6d7d4f.gif"
import Img3 from "../../Assets/hero4.dc80de94.gif"
import Img4 from "../../Assets/link.gif"

function Card() {
    return (
        <div className="Card">
        <div className="child-card">
        <h1>Who let the SOLTHzz <br/> out!?</h1>
        <h2>Join the SOLTHZ Gang</h2>
        </div>

            <div className="main-cards">
            <div className="card-div">
            <img src={Img1}/>
            </div>
            <div className="card-div">
            <img src={Img2}/>
            </div>
            <div className="card-div">
            <img src={Img3}/>
            </div>
            <div className="card-div">
            <img src={Img4}/>
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
