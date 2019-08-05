import React, {Component} from 'react';
import {Container} from '@material-ui/core';

class PartyType extends Component {
    continue = event => {
        event.preventDefault()
        this.props.nextStep();
    }

    render() {
        const {values, handleChange} = this.props; 
        
        return(
            <div>
              

                  <div id="paper" className="container p-5 text-center shadow-lg">  
                      <h1>What type of party are you planning?</h1>

                      <div className="p-5">
                      <input className="btn btn-outline-light input-item pink"
                        type="button"
                        value="bachelorette"
                        onClick={handleChange('type')}
                      />
                      <input className="btn btn-outline-light input-item blue"
                        type="button"
                        value="bachelor"
                        onClick={handleChange('type')}
                      />
                      <input className="btn btn-outline-light input-item neutral"
                        type="button"
                        value="joint"
                        onClick={handleChange('type')}
                      />
                    </div>
                    

                    {/* Navigation Buttons */}
                    <input className="w-100 btn btn-lg btn-outline-light submit-item rounded-0"
                      type="button"
                      label="Continue"
                      value="Continue"
                      onClick={this.continue}
                    />
                    </div>
                    
               
            </div>
        );
    }
}

export default PartyType