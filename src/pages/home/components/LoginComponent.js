import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  // handleChange for inputs
  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // Login AJAX request
  handleLogin = e => {
    e.preventDefault();
    console.log('You tried to login! Noice!');
    const url = `http://localhost:3005/login`;

    axios
      .post(url, {
        email: this.state.email,
        password: this.state.password
      })
      .then(function(response) {
        console.log('You are in the database!');
        console.log(`Successful login!: ${JSON.stringify(response)}`);
      })
      .catch(function(error) {
        console.log(`Unsuccessful login: ${error}`);
      });

      
  };
  // Signup request

  render() {
    return (
      <div
        className="modal fade"
        id="loginModule"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="loginModuleLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title" id="exampleModalLabel">
                Let's Party Plan!
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="#" method="POST" name="Login">
                <div className="form-group field">
                  <label id="username-label" className="control-label sr-only">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    className="form-control"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group field">
                  <label id="password-label" className="control-label sr-only">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <button type="button" name="Submit" className="btn button" onClick={this.handleLogin}>
                    Log In
                  </button>
                  <button type="button" name="sign-up" className="btn button">
                    Sign Up
                  </button>
                </div>
              </form>
              <p>
                <a href="#" className="text-white">
                  Reset Password?
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
