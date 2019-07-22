
import React, {Component} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

  class Itinerary extends Component {   
    constructor(props) {
         super(props);
         this.state = {
             todos: [],
             newTodo: '',
             newLocation: '',
             newTime: '',
             startDate: new Date()
         }
         
         
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
      const getJSON = await getResponse.json();
      // Test results
      console.log('API data:');
      console.log(getJSON[0]);

      // Destructure incoming server response
      const { event, location, date } = getJSON[0];
      

      // Add to component's state
      this.setState({
        newTodo: event,
        newLocation: location,
        startDate: date
      });
    };

    // Invoke it!
    getRequest();
  }
  
    handleDate(date) {
      this.setState({
        startDate: date
      });
      console.log(this.state.startDate)
    }

    handleChange(event) {
     
      this.setState({[event.target.name]: event.target.value })
      
   };
  
   handleSubmit = (event) => {
    event.preventDefault();
    const todos = [...this.state.todos, [this.state.newTodo, this.state.newLocation, this.state.startDate.toLocaleTimeString(), this.state.startDate.toDateString()]];
    
    
    this.setState({todos, newTodo: '', newLocation: '', newTime: '', startDate: ''});
    // console.log(newTodo)
    
  }
  
    render() {

      const TodoItem = ({text}) => (
          <li>{text}</li>
      )

      this.handleSubmit = this.handleSubmit.bind(this);
      // const todolist = this.state.todos; 
      const todolist = this.state.todos.map((todo, index) => (
      
            <li key={index}>
              <ul className="list-inline">
                <li className="list-inline-item w-25">{todo[0]}</li>
                <li className="list-inline-item w-25">{todo[1]}</li>
                <li className="list-inline-item">{todo[2]}</li>
                <li className="list-inline-item">{todo[3]}</li>
              </ul>
            </li>
       
        ));
  
      function deleteTodo(index){
        console.log(index)
      }
  
      return ( 

        <div className="App">

        <section>
              <div className="row">
                <div className="module col-sm-12 mb-5 p-5 shadow">
                  <h3>Your Current Itinerary</h3>
                  <div className="todo-content py-5">
                      <ul className="list-unstyled">
                          {todolist}
                      </ul>
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
                  value= {this.state.newTodo}  
                 onChange={this.handleChange}
                 
              />
            <input
                 className="todo-input"
                 autoComplete="off"
                 type="text"
                 name="newLocation"
                 placeholder="Location"
                  value= {this.state.newLocation}  
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

       
  
            <button type="submit" className="btn btn-lg btn-outline-light submit-item rounded-0">ADD EVENT</button>
          </form>
  
          
        </div>
      );
    }
  }


export default Itinerary

