import React from 'react';

const Home = () => (
  <div>
    <section>
      <div className="row">
        <div className="module col-sm-12 mb-5 p-5 shadow">
          <h3>Your Dashboard</h3>
          <p>Event Information Here</p>
        </div> 
      </div>  
    </section>
    
    <section>
      <div className="row">
        <div className="module col-sm-12 mb-5 p-5 shadow">
          <h3>Current Attendees</h3>
        </div> 
      </div>  
    </section>
    <section>
      <div className="row">
          <div className="col-sm-4 ">
            <div className=" module background-highlight mr-1 p-5 shadow"><h3>Current Budget</h3></div>
            </div>
          <div className="col-sm-8 ">
            <div className="module mr-1 p-5 shadow"><h3>Itinerary Snapshot</h3></div>
          </div>  
      </div>
    </section>
  </div>
);


export default Home

