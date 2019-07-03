import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class PartyDate extends Component {
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

    // Function to select the date
    
    
    render() {
        const {values, handleChange, handleDate} = this.props;
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const d = values.startDate;

        return(
            <div>
              <p>PartyDate Form - Start Date: {d.getMonth()}/{d.getDate()}/{d.getFullYear()} </p>
              
              <p>Current state of 'month': {values.month}</p>
              <Container maxWidth="md">
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
                            
                                
                                    {months.map(month => (
                                    <GridListTile key={month} cols={1}>
                                        <input className="btn btn-outline-light submit-item rounded-0"
                                         type="button"
                                         value={month}
                                         onClick={handleChange('month')} />
                                    </GridListTile>
                                    ))}
                                
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

export default PartyDate