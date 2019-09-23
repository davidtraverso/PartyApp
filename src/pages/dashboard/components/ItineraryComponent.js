import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class Itinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: '',
      newLocation: '',
      newTime: '',
      startDate: new Date()
    };

    this.handleDate = this.handleDate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Let's load the users data as soon as the page loads!
  componentDidMount() {
    console.log('run componentDidMount()');
    let url = 'http://localhost:3005/app/itinerary';

    // Express the GET request
    const getRequest = async () => {
      const getResponse = await fetch(url);
      console.log(getResponse);
      const getJSON = await getResponse.json();
      // Test results
      console.log('API data:');
      console.log(getJSON);

      // Need to convert this Array of objects into an array of arrays

      // const todo = Object.keys(todolist).map(i => todolist[i]);
      var arrayOfObjects = getJSON;
      var arrayContainer = [];
      var result = arrayOfObjects.map(function(eventObject) {
        arrayContainer.push(Object.values(eventObject));
      });

      console.log(result);

      // Add to component's state
      this.setState({
        todos: arrayContainer
      });
    };

    // Invoke it!
    getRequest();
  }

  // DatePicker handle - ** Need to clean up date format to standardize with SQL format **
  handleDate(date) {
    this.setState({
      startDate: date
    });
    console.log(this.state.startDate);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const newTodo = [
      'eventID',
      this.state.newTodo,
      this.state.startDate.toDateString(),
      this.state.startDate.toLocaleTimeString(),
      'partyID',
      this.state.newLocation
    ];
    // Concatenate new todo with state data received on mount
    const todos = [...this.state.todos, newTodo];

    // Instead of Concatenating, need to actually POST to DB right here:
    // Send a PUT request to the database

    const postRequest = async () => {
      let url = 'http://localhost:3005/app/itinerary';
      console.log('newTodo: ');
      console.log(JSON.stringify(newTodo));

      const postResponse = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
          'Content-type': 'application/json'
        }
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));

      console.log('PUT request completed.');
    };
    // Invoke it
    postRequest();

    this.setState({ todos, newTodo: '', newLocation: '', newTime: '', startDate: '' });
    // console.log(newTodo)
  };

  render() {
    // const todolist = this.state.todos;
    const todolist = this.state.todos.map((todo, index) => (
      <li key={index}>
        <ul className="list-inline">
          <li className="list-inline-item w-25">{todo[1]}</li>
          <li className="list-inline-item w-25">{todo[3]}</li>
          <li className="list-inline-item w-25">{todo[2]}</li>
          <li className="list-inline-item">{todo[5]}</li>
        </ul>
      </li>
    ));

    function deleteTodo(index) {
      console.log(index);
    }

    return (
      <div className="App">
        <section>
          <div className="row">
            <div className="module col-sm-12 mb-5 p-5 shadow">
              <h3>Your Current Itinerary</h3>
              <div className="todo-content py-5">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item w-25">Name</li>
                  <li className="list-inline-item w-25">Time</li>
                  <li className="list-inline-item w-25">Date</li>
                  <li className="list-inline-item">Location</li>
                </ul>
                <ul className="list-unstyled">{todolist}</ul>
              </div>
            </div>
          </div>
        </section>

        <form onSubmit={this.handleSubmit} className="input-group input-group-lg">
          <input
            className="todo-input"
            autoComplete="off"
            type="text"
            name="newTodo"
            placeholder="Event (Dinner, Outtings, etc)"
            value={this.state.newTodo}
            onChange={this.handleChange}
          />
          <input
            className="todo-input"
            autoComplete="off"
            type="text"
            name="newLocation"
            placeholder="Location"
            value={this.state.newLocation}
            onChange={this.handleChange}
          />

          {/* <input
                 className="todo-input"
                 autoComplete="off"
                 type="text"
                 name="newTime"
                 placeholder="Time"
                  value= {this.state.newTime}  
                 onChange={this.handleChange}
                 
              />    */}

          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleDate}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="time"
          />

          <button type="submit" className="btn btn-lg btn-outline-light submit-item rounded-0">
            ADD EVENT
          </button>
        </form>
      </div>
    );
  }
}

export default Itinerary;
