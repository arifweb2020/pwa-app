import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import {BrowserRouter as Router , Route } from 'react-router-dom'
import Home from './Home'
import About from './about';
import User from './User';

function App() {
  return (
    <div className="App">
      
      <Router>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
  <Link className="navbar-brand" to="/">PWA-APP</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/user-list">User List</Link>
      </li>    
    </ul>
  </div>  
</nav>

<Route exact path="/" component={Home} />
<Route exact path="/about" component={About} />
<Route exact path="/user-list" component={User} />

</Router>   
        
    </div>
  );
}

export default App;
