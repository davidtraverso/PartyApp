import React, { Component } from 'react';

import Login from './home/components/LoginComponent';
import Nav from './home/components/NavComponent';
import Header from './home/components/HeaderComponent';
import Main from './home/App';
import Footer from './home/components/FooterComponent';

//Functional Component 
class MainPage extends Component {
    render() {
     return (
      <div>
         <div id="hero"></div>
        <Login /> 
        <Nav />
        <button type="button" id="sidebarCollapse" className="btn btn-link">
            <i className="fas fa-bars"></i>
        </button>
        <div className="overlay"></div>
        <Header />
        <Main />
        <Footer />
      </div>
    
     );
    }
   }

export default MainPage;