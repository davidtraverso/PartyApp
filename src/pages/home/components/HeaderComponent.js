import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    
   return (
    <div id="mainNav" className="fixed-top">
      	<div className="d-flex justify-content-between">
	
          <a id="logo" className="navbar-brand" href="/">Coordin8</a>


        <ul id="sub-menu" className="list-inline">
          <li className="list-inline-item"><Link to="/signup" className="btn text-light">Start Planning</Link></li>
          <li className="list-inline-item text-light">|</li>
          <li className="list-inline-item"><Link to="/dash" className="btn text-light">Dashboard</Link></li>
          <li className="list-inline-item text-light">|</li>
          <li className="list-inline-item"><button type="button" data-toggle="modal" data-target="#loginModule" className="btn text-light">Login</button></li>
        </ul>
        </div>
    </div>
   );
  }
 }
 

export default Header;

