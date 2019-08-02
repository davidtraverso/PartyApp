import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Geosuggest from 'react-geosuggest';

class LeadDetails extends Component {
    // Function to go to next form
    continue = event => {
        event.preventDefault()
        this.props.nextStep();
    }
    // Function to go back to previous form
    back = event => {
        event.preventDefault()
        this.props.prevStep();
    }
    
    render() {
        const {values, handleChange} = this.props;

        return(
            <div>
              <p>LeadDetails Form</p>
              <Container maxWidth="md">
                  <div id="paper" className="container p-5 text-center shadow-lg">  
                       
                        <h1>Tell us about yourself:</h1>

                        <label className="control-label sr-only">Your name:</label>
                        <input type="text" 
                          onChange={handleChange('uName')}
                          placeholder="Your Name"
                          defaultValue={values.uName}
                          className="d-block w-100"
                         />
                       
                        <label className="control-label sr-only">Your email:</label>
                        <input type="text"
                          onChange={handleChange('uEmail')}
                          placeholder="Your Email"
                          defaultValue={values.uEmail}
                          className="d-block w-100"
                         />
                     
                        <label className="control-label sr-only">Your phone:</label>
                        <input type="text"
                          onChange={handleChange('uPhone')}
                          placeholder="Your Phone Number"
                          defaultValue={values.uPhone}
                          className="d-block w-100"
                         />
                     
                        <label for="residence" className="control-label"><h5>Your city of residence:</h5></label>
                        <Geosuggest />
                        
                        <label className="control-label"><h5>How do you know {values.bride}:</h5></label>
                        <input type="text"
                          onChange={handleChange('uBio')}
                          placeholder="Relationship?"
                          defaultValue={values.uBio}
                          className="d-block w-100"
                         />
                   {/* Navigation Buttons */}
                   <input className="w-25 btn btn-lg btn-outline-light submit-item rounded-0"
                      type="button"
                      label="Back"
                      value="Back"
                      onClick={this.back}
                    />
                    <input className="w-25 btn btn-lg btn-outline-light submit-item rounded-0"
                      type="button"
                      label="Continue"
                      value="Continue"
                      onClick={this.continue}
                    />
                    </div>
                   
                    
                    
                </Container>
            </div>
        );
    }
}

export default LeadDetails


