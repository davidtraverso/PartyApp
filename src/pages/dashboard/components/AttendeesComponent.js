import React, { Component } from 'react';

class Attendees extends Component {

  // Let's give this component a "State"
  constructor(props) {
    super(props);
    this.state = {guest:[]};
  }

  // Let's load the users data as soon as the page loads!
  componentDidMount() {
    console.log('run componentDidMount()');
    let url = 'http://localhost:3005/app/attendees';

    // Express the GET request
    const getRequest = async () => {
      const getResponse = await fetch(url);
      const getJSON = await getResponse.json();
      // Test results
      console.log('API data:');
      console.log(getJSON);

  
      this.setState({
        guest: getJSON
      });
    };

     // Invoke it!
     getRequest();
    }


    render() {
      // Inside render but above return is where you access props passed down from the parent component, create variables to use inside the return, and basically do most of the "this is JavaScript that will design the page" stuffs.
  
      return (
  
          <div>

            <section className="module col-sm-12 mb-5 p-5 shadow">
                <h3>Party Attendees</h3>     
                  
                  <div className="row text-center py-5">

                      {this.state.guest.map((person, index) => (
                      
                      
                        <div className="col-sm-4 py-5" key={index}>
                          
                          <div className="card" >
                            <img src="http://lamarharrisdesigns.com/Coordin8/assets/grooms-party.jpg" className="card-img-top" alt="..."/>
                              <div className="card-body">
                                <h5 className="card-title">{person.firstName + person.lastName}</h5>
                                <p className="card-text">How I know the Bride/Groom</p>
                              </div>
                              <ul className="list-group list-group-flush " >
                                <li className="list-group-item">{person.location}</li>
                                <li className="list-group-item">{person.phone}</li>
                                <li className="list-group-item">{person.email}</li>
                              </ul>
                              <div className="card-body">
                                <a href="#" className="card-link"><i className="fab fa-facebook fa-2x"></i></a>
                                <a href="#" className="card-link"><i className="fab fa-instagram fa-2x"></i></a>
                              </div>
                          </div>
                          
                        </div>
                        ))}
                
                  </div>

                  

                
              </section>
          

            </div>
    );
  }
}

export default Attendees;

