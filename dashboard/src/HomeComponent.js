import React from 'react';

const Home = () => (
  <div>
    <section>
      <div className="row">
        <div className="module col-sm-12 mb-5 p-5 shadow">
          <h3>Your Dashboard</h3>
          <div id="partyName">Party Name - BRIDE/GROOM NAME HERE</div>
          <div id="partyDate">Party Date</div>
          <div id="partyLocation">Party Location</div>
        </div> 
      </div>  
    </section>
    
    <section>
      <div className="row">
        <div className="module col-sm-12 mb-5 p-5 shadow">
          <h3>Current Attendees</h3>
          <div id="attendees">List of Attendees</div>
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


export default Home

