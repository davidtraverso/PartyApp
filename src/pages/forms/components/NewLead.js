import React, { Component } from 'react';
// import New Party Creation forms
import PartyType from './Forms/PartyType';
import PartyBride from './Forms/PartyBride';
import PartyName from './Forms/PartyName';
import PartyDate from './Forms/PartyDate';
import PartyLocation from './Forms/PartyLocation';
import LeadDetails from './Forms/LeadDetails';
import LeadAuthentication from './Forms/LeadAuthentication';
import PartyOptions from './Forms/PartyOptions';
import PartyInvite from './Forms/PartyInvite';
// import New User + Party Join forms
import Landing from './Forms/Landing';
import FindParty from './Forms/FindParty';

class NewLead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      type: '',
      name: '',
      bride: '',
      startDate: new Date(),
      startDay: '',
      startMonth: '',
      startYear: '',
      month: '',
      city: '',
      state: '',
      uName: '',
      uEmail: '',
      uPhone: '',
      uCity: '',
      uState: '',
      uBio: '',
      uPassword: ''
      //options
    };

    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.joinParty = this.joinParty.bind(this);
  }

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle text fields change
  handleChange = input => event => {
    this.setState({ [input]: event.target.name || event.target.value });
    // TODO: Verify that the logic of .key || .value works for PartyDate.js AND doesn't break all other forms
  };

  // Handle date picker
  handleDate(date) {
    this.setState({
      startDate: date,
      startDay: date.getDate(),
      startMonth: date.getMonth(),
      startYear: date.getFullYear()
    });
  }

  // Handle Button selections
  handleButton = input => event => {
    this.setState({
      [input]: event.target.name
    });
  };

  // Send state from 0 to 10 for Join Party
  joinParty = () => {
    this.setState({
      step: 10
    });
  };

  // Rendering Data
  render() {
    const { step } = this.state;
    const {
      type,
      name,
      bride,
      startDate,
      startDay,
      startMonth,
      startYear,
      month,
      city,
      state,
      uName,
      uEmail,
      uPhone,
      uCity,
      uState,
      uBio,
      uPassword
    } = this.state;
    const values = {
      type,
      name,
      bride,
      startDate,
      startDay,
      startMonth,
      startYear,
      month,
      city,
      state,
      uName,
      uEmail,
      uPhone,
      uCity,
      uState,
      uBio,
      uPassword
    };

    // Switch tree to render each form
    // Cases 1-7 are NEW PARTY creation.
    // Cases 10+ are NEW USER + PARTY JOIN forms.
    switch (step) {
      case 0:
        return (
          <Landing
            nextStep={this.nextStep}
            joinParty={this.joinParty}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 1:
        return (
          <PartyType
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <PartyBride
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <PartyName
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleButton={this.handleButton}
            values={values}
          />
        );
      case 4:
        return (
          <PartyDate
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleDate={this.handleDate}
            values={values}
          />
        );
      case 5:
        return (
          <PartyLocation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 6:
        return (
          <LeadDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 7:
        return (
          <LeadAuthentication
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 8:
        return (
          <PartyOptions
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 9:
        return <PartyInvite prevStep={this.prevStep} />;
      case 10:
        return <FindParty />;
    }
  }
}

export default NewLead;
