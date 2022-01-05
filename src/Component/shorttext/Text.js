import React from 'react';
import './text.css';
import img2 from "../../Assets/Cardimgs/team-kie.42819a1d.png";
import img3 from "../../Assets/Cardimgs/team-marcko.62a26dbc.png";
import img4 from "../../Assets/Cardimgs/team-rhettn.db021402.png";
import img5 from "../../Assets/Cardimgs/team-stuxnet.9742ce27.png"




const Sdata =[
    {
        img: img3,
        title: "@Aka Datusing"
    },
    {
        img: img4,
        title: "@Mike Dane"
    },
    {
        img: img2,
        title: "@Involver"
    },
    {
        img: img5,
        title: "@Juggernaut"
    },
  
]
function Text() {
    return (
        <div className="Container">
        <div className="Content">
        <h2 className="head">Team</h2>
        <p className="paraa1">This is the group of crazy nerds that made SLOTHz a reality! Each of us is a key component in order to give you guys the NFT art you deserve. Each of us is here for the long run, we’re aiming to bring SLOTHz to the <br/>next level.</p>
        </div>

        <div className="cards-main6">
        {
            Sdata.map((data) =>{
                return(
                    <>
                    <div className="cards4">
        <img src={data.img}/>
        <div className="names4">
            <h1>{data.title}</h1>
        </div>

        </div>


                    </>
                )
            })

        }

      

        </div>
        <div className="paragraphy">
            <p>We need you! If you feel you can bring something to the table please send us a DM.</p>
        </div>
       





        </div>
    )
}

export default Text;
