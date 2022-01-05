import React from 'react'
import './Index.css';
import Robot from "../../Assets/robot.png";

function Mint() {
    return (
               <div className="container">
        <div className="head"><h1>MINT</h1>
        <p>You're just one transaction away from joining the SLOTHz army!</p>
        
        </div>
        <div className="content">
        <div className="time-box">
        <div className="heading">
        <h2>Mint your SLOTHz!</h2>
        
        <p>You can mint up to 20 SLOTHz at once. The price per SLOTHz is 0.045 ETH.</p>
        <p>4289 / 9999 SLOTHz minted</p>
        <div className="incre">
        <button className="decre">-</button>
       <span><h1>0</h1></span> 
        <button className="incres">+</button>
        </div>
        <div className="button5">
        <button>Connect to Wallet</button>
        <p>Make sure you are using the Metamask/Coinbase in-app browser or have Metamask installed on your browse</p>

        </div>
       
        
        </div>

        </div>
        <div className="photo">
        <img src={Robot}/>
        </div>



        </div>

            
     </div>
    )
}

export default Mint;
