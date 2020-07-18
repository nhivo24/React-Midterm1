import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from "./components/TopMenu";
import Rom from "./components/Rom";
import AddRom from "./components/AddRom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
  <Router>
    <div className="App">
    <TopMenu/>
      <switch>        
         <Route path="/rom" exact component={Rom} />
         <Route path="/AddRom" exact component={AddRom} />         
      </switch>
    </div>
  </Router> 
  );
}

export default App;
