import Navbar from './Navbar';
import Home from './Home';
import Search from './Search';
import New from './New';
import Note from './Note';
import { useState } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFound from './NotFound';



function App() {
  let [name, setName] = useState("Bow");
  

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path='/new'><New/></Route>
            <Route exact path='/search'><Search name={name} setName={setName}/></Route>
            <Route exact path='/' ><Home /></Route>
            <Route exact path='/notes/:id'><Note/></Route>
            <Route path='*'><NotFound/></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
