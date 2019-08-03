import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      addClass: false
    };
  }

  toggle() {
    this.setState({addClass: !this.state.addClass});
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
    let overClass = ["null"];
    if(this.state.addClass) {
      overClass.push('overlay active')
    }
    return (
      <div
        className="modal fade"
        id="loginModule"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="loginModuleLabel"
        aria-hidden="true"
        data-backdrop="false"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title" id="exampleModalLabel">
                Let's Party Plan!
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.toggle.bind(this)}>
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
                <div className="form-group d-flex justify-content-between">
                  <button type="button" name="Submit" className="btn button" onClick={this.handleLogin}>
                    Log In
                  </button>
                  <Link to="/signup" name="sign-up" className="btn button m-0" onClick={this.toggle.bind(this)}>
                    Sign Up
                  </Link>
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
