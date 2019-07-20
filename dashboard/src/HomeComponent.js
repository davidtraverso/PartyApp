import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {guest:[]};
  
  }

  // Let's load the party data as soon as the page loads!
  componentDidMount() {
    console.log('run componentDidMount!!!');
    let url = 'http://localhost:3005/app/main';

    // Express the GET request
    const request = async () => {
      const response = await fetch(url);
      const json = await response.json();
      // Test results
      console.log(json.length + ' rows of results');
      console.log(json);

      // Destructure incoming server response
      const { partyName, partyLocation } = json[0];

      // Function to find the bride
      const findBride = async () => {
        const bride = await json.find(row => {
          return row.role === 2;
        });

        // Test that a bride was found:
        console.log(bride.firstName + bride.lastName);
        let brideName = bride.firstName + ' ' + bride.lastName;
        
        // Set state
        this.setState({
          bride: brideName
        })
        
      };
      findBride();




      // Add to component's state
      this.setState({
        name: partyName,
        location: partyLocation
      });
    };

    
    // Invoke it!
    request();

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



    getRequest();
  }

  render() {
    return (
      <div>
        <section>
          <div className="row">
            <div className="module col-sm-12 mb-5 p-5 shadow">
              <h3>Your Dashboard</h3>
              <div id="partyName">
                {'"' + this.state.name + '"'} is celebrating {this.state.bride}
              </div>
              <div id="partyDate">Party Date</div>
              <div id="partyLocation">{this.state.location}</div>
            </div>
          </div>
        </section>

        <section>
          <div className="row">
            <div className="module col-sm-12 mb-5 p-5 shadow">
              <h3>Current Attendees</h3>
              <div id="attendees">

              <div className="row text-center py-5">

                    {this.state.guest.map((person, index) => (


                      <div className="col-sm-4 py-5" key={index}>
                        
                        <div className="card" >
                          <img src="http://lamarharrisdesigns.com/Coordin8/assets/grooms-party.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title">{person.firstName + person.lastName}</h5>
                              
                            </div>
                           
                           
                        </div>
                        
                      </div>
                      ))}

                    </div>


              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="row">
            <div className="col-sm-4 ">
              <div className=" module background-highlight mr-1 p-5 shadow">
                <h3>Current Budget</h3>
                <div id="budget">MONIES!</div>
              </div>
            </div>
            <div className="col-sm-8 ">
              <div className="module mr-1 p-5 shadow">
                <h3>Itinerary Snapshot - First Five from Itinerary</h3>
                <div id="event1">1 of 5</div>
                <div id="event2">2 of 5</div>
                <div id="event3">3 of 5</div>
                <div id="event4">4 of 5</div>
                <div id="event5">5 of 5</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
