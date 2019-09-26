import React, { Component } from 'react';

class FindParty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parties: [],
      selectedParty: {},
      hideButton: true
    };
  }

  componentDidMount() {
    console.log("'FindParty' did mount");
    let url = 'http://localhost:3005/find';

    // Express the GET request
    const getRequest = async () => {
      const getResponse = await fetch(url);
      const getJSON = await getResponse.json();
      // Test results
      console.log('API data:');
      console.log(getJSON);

      this.setState({
        parties: getJSON
      });
    };

    // Invoke it!
    getRequest();
  }

  // Select a party
  handleSelect = e => {
    e.preventDefault();
    this.setState({
      selectedParty: this.state.parties[e.target.key],
      hideButton: false
    });
  };
  render() {
    return (
      <div>
        <div id="paper" className="container p-5 text-center shadow-lg">
          <h1>FindParty</h1>
          <select onChange={this.handleSelect}>
            {this.state.parties.map((party, i) => {
              return (
                <option key={i} value={party.party_name}>
                  {party.party_name}
                </option>
              );
            })}
          </select>
          <br />
          <br />
          <input type="button" value="Join this Party!" hidden={this.state.hideButton} />
        </div>
      </div>
    );
  }
}

export default FindParty;
