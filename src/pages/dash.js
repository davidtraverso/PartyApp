import React, { Component }  from 'react';
import './dashboard/Dashboard.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Nav from './dashboard/components/NavComponent';
import Header from './dashboard/components/HeaderComponent';
import Main from './home/App';
import Footer from './dashboard/components/FooterComponent';
import Home from './dashboard/components/HomeComponent';
import Account from './dashboard/components/AccountComponent';
import Itinerary from './dashboard/components/ItineraryComponent';
import Attendees from './dashboard/components/AttendeesComponent';
import Locations from './dashboard/components/LocationsComponent';
import Messages from './dashboard/components/MessagesComponent';

class Dashboard extends Component {
  render(){
    return (
      <Router>
        <div className="app">
          <Nav />
          
          
          <Header />
          <div className="py-5">
              <div className="container">
                    <Route exact={true} path="/dash" component={Home} />
                    <Route path="/account" component={Account} />
                    <Route path="/itinerary" component={Itinerary} />
                    <Route path="/attendees" component={Attendees} />
                    <Route path="/locations" component={Locations} />
                    <Route path="/messages" component={Messages} />
              </div>
            </div> 
            
          <Footer />
              
          
        </div>
        </Router>
    
    )
  }
 }


export default Dashboard;