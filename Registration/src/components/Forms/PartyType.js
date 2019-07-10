import React, {Component} from 'react';
import {Container} from '@material-ui/core';

class PartyType extends Component {
    continue = event => {
        event.preventDefault()
        this.props.nextStep();
    }

    render() {
        const {
          values, 
          // handleChange
        } = this.props; 
        
        return(
          <div>
            <p>PartyType Form - PartyType current state is : {values.type}</p>
            <Container maxWidth="md">
              <div id="paper" className="container p-5 text-center shadow-lg">  
                <h1>Attendee Registration</h1>

                <div className="p-5">
                  <form>
                    <label>
                      Name:
                      <input type="text" name="name" />
                    </label>
                    <label>
                      Username:
                      <input type="text" name="username" />
                    </label>  
                    <label>
                      Password:
                      <input type="password" name="password" />
                    </label>
                    <label>
                      Phone Number:
                      <input type="text" name="phone number" />
                    </label>
                    <label>
                      Email:
                      <input type="text" name="email" />
                    </label>
                    <label>
                      City, State:
                      <input type="text" name="location" />
                    </label>
                    <input type="submit" value="Submit" />
                    </form>
                </div>
                  
                {/* Navigation Buttons */}
                <input className="w-100 btn btn-lg btn-outline-light submit-item rounded-0"
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

export default PartyType