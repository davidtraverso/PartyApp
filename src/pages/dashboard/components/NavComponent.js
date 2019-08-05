import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {
      constructor(props) {
            super(props);
            this.state = {addClass: false}
          }

          toggle() {
            this.setState({addClass: !this.state.addClass});
          }

  render() {
      let boxClass = ["null"];
      let overClass = ["null"];
      if(this.state.addClass) {
        boxClass.push('mCustomScrollbar _mCS_1 mCS-autoHide mCS_no_scrollbar active');
        overClass.push('overlay active')
      }

   return (
      <div>
   
          <button type="button" id="sidebarCollapse" className="btn btn-link" onClick={this.toggle.bind(this)}>
              <i className="fas fa-bars"></i>
          </button>
      	<div id="sidebar" className={boxClass.join(' ')}>
            <a className="navbar-brand" href="/">Coordin8</a>	
            <ul className="list-unstyled components">
                  <li><Link onClick={this.toggle.bind(this)} className="text-white" to="/dash">Dashboard</Link></li>
                  <li><Link onClick={this.toggle.bind(this)} className="text-white" to="/account">My Account</Link></li>
                  <li><Link onClick={this.toggle.bind(this)} className="text-white" to="/itinerary">Itinerary</Link></li>
                  <li><Link onClick={this.toggle.bind(this)}className="text-white" to="/attendees">Attendees</Link></li>
                  <li><Link onClick={this.toggle.bind(this)} className="text-white" to="/locations">Locations</Link></li>
                  <li><Link onClick={this.toggle.bind(this)} className="text-white" to="/messages">Messages</Link></li>
                </ul>
        </div>
        <div className={overClass.join(' ')}></div>
    </div>
   );
  }

 

 }
 

export default Nav;

