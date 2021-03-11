import React from 'react-router-dom'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import TeamDetails from './components/TeamDetails/TeamDetails';

//import Team from './components/Team/Team';

function App() {
  return ( 
    
    <Router>
      <Header/>
      <Switch>
        <Route path="/home">
           <Home/>
           </Route>
           <Route path="/team/:teamId">
             <TeamDetails/>
              </Route>
           <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
            <NoMatch/>
          </Route>
         </Switch>
       </Router>
       
    
  );
}

export default App;
