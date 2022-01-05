import React from 'react'
import './Card.css'
import img1 from "../../Assets/Cardimgs/male-sloth.19207742 (1).png";
import img2 from "../../Assets/Cardimgs/team-kie.42819a1d.png";
import img3 from "../../Assets/Cardimgs/team-marcko.62a26dbc.png";
import img4 from "../../Assets/Cardimgs/team-rhettn.db021402.png";
import img5 from "../../Assets/Cardimgs/team-stuxnet.9742ce27.png"



const Data =[
    {
        img: img1,
        title: "@Mike"
    },
    {
        img: img2,
        title: "@Mike"
    },
    {
        img: img3,
        title: "@Mike"
    },
    {
        img: img4,
        title: "@Mike"
    },
    {
        img: img5,
        title: "@Mike"
    },
]
function cards() {

    return (
        <div className="cards-main">
        {
            Data.map((data) =>{
                return(
                    <>
                    <div className="cards">
        <img src={data.img}/>
        <div className="names">
            <h1>{data.title}</h1>
        </div>

        </div>


                    </>
                )
            })

        }
        
            
        </div>
    )
}

export default cards;
