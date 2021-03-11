import React from 'react';
import { Link } from 'react-router-dom';

const Team = (props) => {
    const{strTeam,strTeamBanner,intFormedYear,idTeam}= props.team||{}
const bannerStyle={
height:"250px",
width:"500px"
}

    return (
        <div>
            <img style={bannerStyle}src={strTeamBanner} alt=""/>
            <h3>Team:{strTeam}</h3>
            <p>Founded:{intFormedYear}</p> 
             <Link to ={`/team/${idTeam}`}>
                 <button>Explore >> </button>
                 </Link>  
                 
                         </div>
    );
};

export default Team;