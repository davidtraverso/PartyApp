import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

class Nav extends Component {
  render() {
    
   return (
    <Router>
      	<div id="sidebar">
            <a className="navbar-brand" href="/">Coordin8</a>	
            <ul className="list-unstyled components">
                  <li><Link className="text-white" to="/">Dashboard</Link></li>
                  <li><Link className="text-white" to="/account">My Account</Link></li>
                  <li><Link className="text-white" to="/itinerary">Itinerary</Link></li>
                  <li><Link className="text-white" to="/attendees">Attendees</Link></li>
                  <li><Link className="text-white" to="/locations">Locations</Link></li>
                  <li><Link className="text-white" to="/messages">Messages</Link></li>
                </ul>
        </div>
  </Router>
   );
  }
 }
 

export default Nav;

