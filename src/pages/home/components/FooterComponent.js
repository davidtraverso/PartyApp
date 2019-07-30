import React, { Component } from 'react';


class Footer extends Component {
  render() {
    
   return (
    
      	<footer>
            <section className="marketing-text  text-white py-3">
                <div className="container-fluid text-center">
                    <ul  className="nav navbar-nav navbar-expand-md nav-pills nav-fill py-3">
                        <li className="nav-item"><a href="#" target="_blank" className="text-light">Privacy Notice</a></li>
                        <li className="nav-item"><a href="#" className="text-light">Internet Privacy Policy</a></li>
                        <li className="nav-item"><a href="#" className="text-light">Terms of Use</a></li>
                        <li className="nav-item"><a href="#" className="text-light">Site Map</a></li>  
                    </ul> 
                    
                    <h3 className="text-main">Coordin8</h3>
                    <p>&copy; <span id="date-year"><script>document.getElementById('date-year').appendChild(document.createTextNode(new Date().getFullYear()))</script></span> All rights reserved.</p> 
                    

                </div>
            </section>
        </footer>
  
   );
  }
 }
 

export default Footer;

