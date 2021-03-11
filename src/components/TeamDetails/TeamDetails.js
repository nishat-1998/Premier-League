import React ,{useEffect,useState}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF ,faTwitter,faYoutube} from '@fortawesome/free-brands-svg-icons'; 
import {useParams} from 'react-router-dom';


const TeamDetails = () => {
  const {teamId}= useParams();
    const [team,setTeam]= useState({});
    useEffect(() => {
        const url=`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then (res=> res.json())
        .then(data =>{
        setTeam(data.teams[0])
        })
  //  console.log(team);
      }, [teamId])

      const bannerStyle={
          
        height:"100px",
        width:"350px",
        marginBottom:'10px',
        paddingBottom:'10px',
        marginLeft:'500px'
        }
        const ImgStyle={
         height:"200px",
        width:"350px"
        }
        const imgStyle={
            backgroundColor:"red"
        }
        const detailsStyle={
            backgroundColor:"lightBlue"
        }
        const fontStyle={
            display:"flex",
            marginLeft:"500px",
            color:"red"
        }
    
    return (
        <div>
        <img style={bannerStyle}src={team.strTeamLogo} alt=""/>
        
            
        <div  className="container my-5">
        <div style={detailsStyle} className="row">
        <div style={imgStyle} className="col-md-6">
       
            <h5>Name:{team.strTeam}</h5>
            <h6>Founded:{team.intFormedYear}</h6>
            <p>Country:{team.strCountry}</p>
            <h6>Gander:{team.strGender}</h6>


            </div>
            
            <div className="col-md-6">
            <img style={ImgStyle} src={team.strTeamFanart3} alt=""/>
        
                </div>
                <p>Description of Team>>>>{team.strDescriptionEN}</p>
                </div>
               <h1 style={fontStyle}>
                <FontAwesomeIcon icon={faFacebookF }  />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faYoutube} /> 
            
                </h1>
               
                </div>
                </div>
                
    
    );
};
export default TeamDetails;