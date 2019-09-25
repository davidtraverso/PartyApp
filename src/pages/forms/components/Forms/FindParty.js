import React, { Component } from 'react';

class FindParty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parties: []
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

  render() {
    return (
      <div>
        <div id="paper" className="container p-5 text-center shadow-lg">
          <h1>FindParty</h1>
        </div>
      </div>
    );
  }
}

export default FindParty;
