import React from 'react';
import './Team.css'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Team = (props) => {
    const{strTeam,strTeamBanner,intFormedYear,idTeam}= props.team||{}


    return (
    
        <div className="col-md-3 my-3">
        <Card>
        <img src={strTeamBanner} alt=""/>
            <Card.Body>
                <div className="text-center">
                    <Card.Title>
                    <h3>Team:{strTeam}</h3>
            <p>Founded:{intFormedYear}</p>
                    </Card.Title>
                    
                    <Link to ={`/team/${idTeam}`}>
                 <button className="btn-danger">Explore >> </button>
                 </Link>  
        
                </div>
            </Card.Body>
        </Card>
        </div>
        
        
    );
};

export default Team;