import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
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
              <p>PartyDate Form</p>
              <div>Start Date: {d.getMonth()}/{d.getDate()}/{d.getFullYear()} </div>
              <p>Current state of 'month': {values.month}</p>
                <Container maxWidth="sm">
                    <Paper>
                        <Container maxWidth="xl">
                            <h3>When is it going down?</h3>
                            <div className="datepicker">
                            <DatePicker
                            inline
                            selected={values.startDate}
                            onChange={handleDate}
                            />
                            </div>
                            <h5>Not sure of all the details yet?<br/>
                            It's cool. We'll help you figure that out later.<br/>
                            </h5>
                            <Container maxWidth="xl">
                                <GridList cellHeight={20} cols={4}>
                                    {months.map(month => (
                                    <GridListTile key={month} cols={1}>
                                        <input 
                                         type="button"
                                         value={month}
                                         onClick={handleChange('month')} />
                                    </GridListTile>
                                    ))}
                                </GridList>
                            </Container>

                        </Container>
                    </Paper>
                    <br/>
                    
                    {/* Navigation Buttons */}
                    <input
                      type="button"
                      label="Back"
                      value="Back"
                      onClick={this.back}
                    />
                    <input
                      type="button"
                      label="Continue"
                      value="Continue"
                      onClick={this.continue}
                    />
                </Container>
            </div>
        );
    }
}

export default PartyDate