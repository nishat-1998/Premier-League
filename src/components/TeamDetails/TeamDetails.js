import React ,{useEffect,useState}from 'react';
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
        height:"80px",
        width:"350px"
        }
    return (
        <div>
        <img style={bannerStyle}src={team.strTeamBanner} alt=""/>
            <h5>League:{team.strLeague}</h5>
            <h6>Founded:{team.intFormedYear}</h6>
            <p>Country:{team.strCountry}</p>
            
        </div>
    );
};
export default TeamDetails;