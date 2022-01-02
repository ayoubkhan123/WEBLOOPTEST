import React from 'react'
import './Card.css'



const Data =[
    {
        img: "http://nigeria.alshumaal.com/static/media/male-sloth.19207742.png",
        title: "@Mike"
    },
    {
        img: "http://nigeria.alshumaal.com/static/media/team-rhettn.db021402.png",
        title: "@Mike"
    },
    {
        img: "http://nigeria.alshumaal.com/static/media/team-stuxnet.9742ce27.png",
        title: "@Mike"
    },
    {
        img: "http://nigeria.alshumaal.com/static/media/team-marcko.62a26dbc.png",
        title: "@Mike"
    },
    {
        img: "http://nigeria.alshumaal.com/static/media/team-kie.42819a1d.png",
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
