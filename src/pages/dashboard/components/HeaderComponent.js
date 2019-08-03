import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    
   return (
    <nav id="mainNav" className="d-flex py-2 justify-content-between">
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
   );
  }
 }
 

export default Header;

