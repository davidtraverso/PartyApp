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
      
        <Login /> 
        <Nav />
        <Header />
        <Main />
        <Footer />
        
      </div>
    
     );
    }
   }

export default MainPage;