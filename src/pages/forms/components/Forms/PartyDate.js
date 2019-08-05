import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class PartyDate extends Component {
  // Function to go to next form
  continue = event => {
    event.preventDefault();
    this.props.nextStep();
  };
  // Function to go back to previous form
  back = event => {
    event.preventDefault();
    this.props.prevStep();
  };


  render() {
    const { values, handleChange, handleDate } = this.props;
    const today = new Date(); // For future use populating the month 
    const thisMonth = today.getMonth(); // January = 0, July = 6
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    const d = values.startDate;

        return(
            <div>
              
                  <div id="paper" className="container p-5 text-center shadow-lg"> 
                       
                            <h1>When is it going down?</h1>
                            <div className="datepicker">
                            <DatePicker
                            inline
                            selected={values.startDate}
                            onChange={handleDate}
                            />
                            </div>
                            <p>Not sure of all the details yet?
                            It's cool. We'll help you figure that out later.
                            </p>
                            
                                
                                    {months.map((month, index) => (
                                    <GridListTile key={index} cols={1}>
                                        <input name={index} className="btn btn-outline-light submit-item rounded-0"
                                         type="button"
                                         value={month}
                                         onClick={handleChange('month')} />
                                    </GridListTile>
                                    ))}
                                
                         {/* Navigation Buttons */}
                         <div>
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
                    </div>
  
            </div>
        );
    }
  
  }
    

export default PartyDate;
