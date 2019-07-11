
import React, {Component} from 'react'


  class Itinerary extends Component {   
    constructor(props) {
         super(props);
         this.state = {
             todos: [],
             newTodo: ''   
         }
         
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
     
      this.setState({[event.target.name]: event.target.value })
      
   };
  
   handleSubmit = (event) => {
    event.preventDefault();
    const todos = [...this.state.todos, this.state.newTodo];
    
    
    this.setState({todos, newTodo: ''});
    // console.log(newTodo)
    
  }
  
    render() {

      const TodoItem = ({text}) => (
        <li>{text}</li>
      )

      // this.handleSubmit = this.handleSubmit.bind(this);
      const todolist = this.state.todos.map((todo, index) => (
        <TodoItem key={index} text={todo} />
        ));
  
      // function deleteTodo(index){
      //   console.log(index)
      // }
  
      return ( 

        <div className="App">

        <section>
              <div className="row">
                <div className="module col-sm-12 mb-5 p-5 shadow">
                  <h3>Your Current Itinerary</h3>
                  <div className="todo-content">
                      <ul className="list-unstyled">
                          {todolist}
                      </ul>
                  </div>
                </div> 
              </div>
        </section>
          
          <form onSubmit={this.handleSubmit}>
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

            <input
                 className="todo-input"
                 autoComplete="off"
                 type="text"
                 name="newTime"
                 placeholder="Time"
                  value= {this.state.newTime}  
                 onChange={this.handleChange}
                 
              />   

          <input 
              className="todo-input"
              autoComplete="off"
              type="text" 
              id="datepicker"
              name="newDate"
              placeholder="Date"
              value= {this.state.newTime}  
              onChange={this.handleChange}
              />  
  
            <button type="submit" className="save-button">ADD EVENT</button>
          </form>
  
          
        </div>
      );
    }
  }


export default Itinerary

