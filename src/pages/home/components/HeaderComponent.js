import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
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
      overClass.push('overlay active')
    }
   return (
     <div>
        <div id="mainNav" className="fixed-top py-2">
            <div className="d-flex justify-content-between">
      
              <a id="logo" className="navbar-brand" href="/">Coordin8</a>


            <ul id="sub-menu" className="list-inline">
              <li className="list-inline-item"><Link to="/signup" className="btn text-light">Start Planning</Link></li>
              <li className="list-inline-item text-light">|</li>
              <li className="list-inline-item"><Link to="/dash" className="btn text-light">Dashboard</Link></li>
              <li className="list-inline-item text-light">|</li>
              <li className="list-inline-item"><button type="button" data-toggle="modal" data-target="#loginModule" className="btn text-light" onClick={this.toggle.bind(this)}>Login</button></li>
            </ul>
            </div>
        </div>
        <div className={overClass.join(' ')}></div>
     </div>
   );
  }
 }
 

export default Header;

