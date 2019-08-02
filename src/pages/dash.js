import React, { Component }  from 'react';
import './dashboard/Dashboard.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Nav from './dashboard/components/NavComponent';
import Header from './dashboard/components/HeaderComponent';
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
                 <Switch>
                    <Route exact={true} path="/dash" component={Home} />
                    <Route exact path="/account" component={Account} />
                    <Route exact path="/itinerary" component={Itinerary} />
                    <Route exact path="/attendees" component={Attendees} />
                    <Route exact path="/locations" component={Locations} />
                    <Route exact path="/messages" component={Messages} />
                  </Switch>  
              </div>
            </div> 
            
          <Footer />

        </div>
        
      </Router>
    
    )
  }
 }


export default Dashboard;