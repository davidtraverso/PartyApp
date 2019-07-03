import React, { Component }  from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './HomeComponent';
import Account from './AccountComponent';
import Itinerary from './ItineraryComponent';
import Attendees from './AttendeesComponent';
import Locations from './LocationsComponent';
import Messages from './MessagesComponent';

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
          <nav className="d-flex justify-content-between navbar navbar-expand-lg navbar-light">
            <div id="logo" className="navbar-brand">Coordin8</div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          
              <div className="collapse navbar-collapse" id="navbarSupportedContent">

              </div>  
          
          </nav>
            <div className="App">
              <div className="container">
                 
                    <Route exact={true} path="/" component={Home} />
                    <Route path="/account" component={Account} />
                    <Route path="/itinerary" component={Itinerary} />
                    <Route path="/attendees" component={Attendees} />
                    <Route path="/locations" component={Locations} />
                    <Route path="/messages" component={Messages} />
              </div>
            </div>
            
            <div className="d-flex justify-content-between fixed-bottom">
              <footer>
                <div>
                  <a id="logo" className="navbar-brand" href="/">Coordin8</a>
                </div>

                  <ul id="sub-menu" className="list-inline">
                    
                  </ul>
              </footer>
            </div>
            
          </main>
          </div>
      <div className="overlay"></div>
    </Router>
    )
  }
 }


export default App;
