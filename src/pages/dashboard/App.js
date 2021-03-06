import React, { Component }  from 'react';
import './Dashboard.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './components/HomeComponent';
import Account from './components/AccountComponent';
import Itinerary from './components/ItineraryComponent';
import Attendees from './components/AttendeesComponent';
import Locations from './components/LocationsComponent';
import Messages from './components/MessagesComponent';

class App extends Component {
  render(){
    return (
      <Router>
        <div id="page" className="wrapper">
          <button type="button" id="sidebarCollapse" className="btn btn-link">
              <i className="fas fa-bars"></i>
          </button>
          <nav id="sidebar">
            <a className="navbar-brand" href="/">Coordin8</a>	
               <ul className="list-unstyled components">
                  <li><Link className="text-white" to="/">Dashboard</Link></li>
                  <li><Link className="text-white" to="/account">My Account</Link></li>
                  <li><Link className="text-white" to="/itinerary">Itinerary</Link></li>
                  <li><Link className="text-white" to="/attendees">Attendees</Link></li>
                  <li><Link className="text-white" to="/locations">Locations</Link></li>
                  <li><Link className="text-white" to="/messages">Messages</Link></li>
                </ul>
            </nav>
          
          <main>
          <nav className="d-flex justify-content-between">
            <a id="logo" className="navbar-brand">Coordin8</a>
            <ul id="sub-menu" className="list-inline">
              <li className="list-inline-item">
              <button type="button" data-toggle="modal" data-target="#" className="btn text-light">User</button>
              </li>
              <li className="list-inline-item">
                |
              </li>
              <li className="list-inline-item">
              <button type="button" data-toggle="modal" data-target="#" className="btn text-light">Log Out</button>
              </li>
              
            </ul>
          
              <div className="collapse navbar-collapse" id="navbarSupportedContent">

              </div>  
          
          </nav>
            <div className="App py-5">
              <div className="container">
                    <Route exact={true} path="/" component={Home} />
                    <Route path="/account" component={Account} />
                    <Route path="/itinerary" component={Itinerary} />
                    <Route path="/attendees" component={Attendees} />
                    <Route path="/locations" component={Locations} />
                    <Route path="/messages" component={Messages} />
              </div>
            </div>
            
            
              <footer  className="d-flex justify-content-between fixed-bottom">
                
                  <div><a id="logo" className="navbar-brand" href="/">Coordin8</a> © 2019 All rights reserved.</div>
                

                  <ul id="sub-menu" className="list-inline">
                    
                  </ul>
              </footer>
            
            
          </main>
          </div>
      <div className="overlay"></div>
    </Router>
    )
  }
 }


export default App;
