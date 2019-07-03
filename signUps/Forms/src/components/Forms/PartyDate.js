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

  // Function to select the date

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

    function convertMonthToInt (m) {
        let monthInt = months.findIndex(m)
        handleChange()
    }    
    const d = values.startDate;

    return (
      <div>
        <p>PartyDate Form</p>
        <div>
          Start Date: {d.getMonth()}/{d.getDate()}/{d.getFullYear()}{' '}
        </div>
        <p>Current state of 'month': {values.month}</p>
        <Container maxWidth="sm">
          <div id="paper" className="container text-center">
            <Container maxWidth="xl">
              <h3>When is it going down?</h3>
              <div className="datepicker">
                <DatePicker inline selected={values.startDate} onChange={handleDate} />
              </div>
              <h5>
                Not sure of all the details yet?
                <br />
                It's cool. We'll help you figure that out later.
                <br />
              </h5>
              <Container maxWidth="xl">
                <GridList cellHeight={20} cols={4}>
                  {months.map(month => (
                    <GridListTile key={month} cols={1}>
                      <input
                        type="button"
                        name={`${months.findIndex(month)}`}
                        value={month}
                        onClick={handleChange('month')}
                      />
                    </GridListTile>
                  ))}
                </GridList>
              </Container>
            </Container>
          </div>
          <br />

          {/* Navigation Buttons */}
          <input type="button" label="Back" value="Back" onClick={this.back} />
          <input type="button" label="Continue" value="Continue" onClick={this.continue} />
        </Container>
      </div>
    );
  }
}

export default PartyDate;
