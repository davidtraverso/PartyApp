import React, { Component }  from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'


class App extends Component {
  render(){
    return (
      <div>

      <section className="masthead text-center d-flex">
            <div className="container my-auto">
            <div className="row">
              <div className="col-lg-10 mx-auto">
              <h1 className="text-main">Coordin8</h1>
              <hr/>
              </div>
              <div className="col-lg-8 mx-auto text-white">
              <p className="text-faded mb-5">Finally an app to keep the party going!</p>
              <AnchorLink className="down-arrow js-scroll-trigger mx-auto" href="#about">Learn More</AnchorLink>
              </div>
            </div>
            </div>
          </section>

		  <section id="about" className="bg-white marketing-text large-space">
				<div className="container-fluid large-space">
					<div className="row featurette large-space">
					  <div className="col-md-7 px-5 my-auto">
					  <h2 className="featurette-heading">What is <span className="text-main">Coordin8</span></h2>
						<p className="lead">Party planning app that is the central hub to set an itinerary, provide event locations and communicate directly with your attendees. </p>
						<AnchorLink className="btn btn-lg btn-outline-dark rounded-pill" href="#how" role="button">HOW?</AnchorLink>
					  </div>
					  <div className="col-md-5 p-0">
						<img className="featurette-image img-fluid mx-auto img-responsive" src="assets/mock-ups.jpg" alt="Kid with thumb up - image"/>
					  </div>
					</div>
				</div>	
			</section>

          <section id="how" className="marketing-text large-space">
				<div className="container-fluid large-space">
					<div className="row large-space text-center">
					  <div className="col-md-3 p-0 banners lights  shadow">
						  <div className="banners-inner bg-neutral p-5">
							  <h3 className="mx-auto">1</h3>
								<p className="lead">Download the app from the app store!</p>
							  <i className="icons fas fa-cloud-download-alt fa-5x"></i>
						  </div>
					  </div>
					  <div className="col-md-3 p-0 banners bridal  shadow">
						  <div className="banners-inner bg-pink p-5">
							  <h3 className="mx-auto">2</h3>
								<p className="lead">Start planning your party and itinerary.</p>
							  <i className="icons fas fa-tasks fa-5x"></i>
						  </div>
					  </div>
						 <div className="col-md-3 p-0 banners groomsmen  shadow">
							 <div className="banners-inner bg-blue  p-5">
							  <h3 className="mx-auto">3</h3>
								<p className="lead">Let us notify your attendees and the guest of honor. </p>
								 <i className="icons fas fa-envelope-open fa-5x"></i>
								
							 </div>
					  </div>
						 <div className="col-md-3 p-0 banners joint  shadow">
							 <div className="banners-inner bg-joint p-5">
							  <h3 className="mx-auto">4</h3>
								<p className="lead">Use the app to track, communicate and plan with all!</p>
								 <i className="icons fas fa-users fa-5x"></i>
							 </div>
					  </div>
					</div>
				</div>	
			</section>

      
      </div>
    )
  }
 }


export default App;
