import React ,{useState , useEffect} from 'react';
import Team from '../Team/Team';




const Home= () => {
    const [teams,setTeams]= useState([]);

   useEffect(() => {
    fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
    .then (res=> res.json())
    .then(data=>{
        setTeams(data.teams)
       // console.log(data)
       // const id= data.map(team=>team.idTeam)
       // console.log(id);
    })
    .catch(error=>console.log(error))
    
     },[])
   
    return (
        <div className="container mt-5">
        <div className="row">

     {
        
        teams.map(team=> <Team team={team} key={team.alpha3Code} ></Team>)

        }
        </div>
        </div>
    );
};

export default Home;