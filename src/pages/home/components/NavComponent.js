import React, { Component } from 'react';


class Nav extends Component {
  render() {
    
   return (
    
      	<div id="sidebar">
            <a className="navbar-brand" href="/">Coordin8</a>	
            <ul className="list-unstyled components">
                <li><a href="#" className="text-white">About Coordin8</a></li>
                <li><a href="#" className="text-white">Get Started</a></li>
                <li><a href="#" className="text-white">How You Ask?</a> </li>
                <li><a href="#" className="text-white">Contact</a></li>
            </ul>

            <ul className="list-unstyled CTAs">
                <li><a href="#"><img src="assets/icon_appstore.png" width="200" height="64" alt="" className="img-fluid"/></a></li>
                <li><a href="#"><img src="assets/icon_googleplay.png" width="200" height="64" alt="" className="img-fluid"/></a>
                </li>
            </ul>
        </div>
  
   );
  }
 }
 

export default Nav;

