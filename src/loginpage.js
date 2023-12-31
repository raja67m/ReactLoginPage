import React, { Component } from 'react';

import './loginpage.css';



class Login extends Component {

  constructor(props) {

    super(props);

    this.state = {

      email: '',

      password: '',

      emailError: '',

      passwordError: '',

    };

  }



  validateEmail = () => {

    const { email } = this.state;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



    if (!emailRegex.test(email)) {

      this.setState({ emailError: 'Please enter a valid email address' });

    } else {

      this.setState({ emailError: '' });

    }

  };



  validatePassword = () => {

    const { password } = this.state;



    if (password.length < 8) {

      this.setState({ passwordError: 'Password must be at least 8 characters long' });

    } else {

      this.setState({ passwordError: '' });

    }

  };



  handleChange = (e) => {

    this.setState({ [e.target.name]: e.target.value });

  };



  handleSubmit = (e) => {

    e.preventDefault();



    this.validateEmail();

    this.validatePassword();



    if (!this.state.emailError && !this.state.passwordError) {

      // Add your login logic here

      console.log('Login clicked with:', this.state.email, this.state.password);

    }

  };



  render() {

    return (

      <div className="login-container">

        <form onSubmit={this.handleSubmit} className="login-form">

          <h2>Login</h2>

          <label htmlFor="email">Email:</label>

          <input

            type="text"

          className='getValue'

            name="email"

            value={this.state.email}

            onBlur={this.validateEmail}

            onChange={this.handleChange}

          />

          <div className="error-message">{this.state.emailError}</div>



          <label htmlFor="password">Password:</label>

          <input

            type="password"

            className='getValue'

            name="password"

            value={this.state.password}

            onBlur={this.validatePassword}

            onChange={this.handleChange}

          />

          <div className="error-message">{this.state.passwordError}</div>



          <button className="LoginButton" type="submit">Login</button>

        </form>

      </div>

    );

  }

}

export default Login;