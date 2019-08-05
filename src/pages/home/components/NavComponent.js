import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
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
                <li><a href="#" className="text-white"  onClick={this.toggle.bind(this)}>About Coordin8</a></li>
                <li><Link to="/signup" href="#" className="text-white" onClick={this.toggle.bind(this)}>Get Started</Link></li>
                <li><AnchorLink href="#how" className="text-white"  onClick={this.toggle.bind(this)}>How You Ask?</AnchorLink></li>
                <li><a href="#" className="text-white"  onClick={this.toggle.bind(this)}>Contact</a></li>
            </ul>

            <ul className="list-unstyled CTAs">
                <li><a href="#"><img src="assets/icon_appstore.png" width="200" height="64" alt="" className="img-fluid"/></a></li>
                <li><a href="#"><img src="assets/icon_googleplay.png" width="200" height="64" alt="" className="img-fluid"/></a>
                </li>
            </ul>
        </div>
        <div className={overClass.join(' ')}></div>
    </div>
   );
  }
 }
 

export default Nav;

