import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormGroup, ControlLabel, FormControl, Button, Radio } from "react-bootstrap";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSignUp({
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <FormGroup>
          <ControlLabel>Email</ControlLabel>
          <FormControl
            type="email"
            name="username"
            onChange={e => {
              this.setState({[e.target.name]: e.target.value});
            }}
            placeholder="Enter Email"
            value={this.state.username}
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            name="password"
            onChange={e => {
              this.setState({[e.target.name]: e.target.value});
            }}
            placeholder="Enter Password"
            value={this.state.password}
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            type="password"
            name="confirmPassword"
            onChange={e => {
              this.setState({[e.target.name]: e.target.value});
            }}
            placeholder="Confirm Password"
            value={this.state.confirmPassword}
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Choose your role</ControlLabel>{' '}
          <Radio 
            name="radioGroup" 
            value="tutor" 
            checked={this.state.selectedOption === "tutor"} 
            onChange={this.handleOptionChange} 
            inline>
            Tutor
          </Radio>{' '}
          <Radio 
            name="radioGroup" 
            value="student" 
            checked={this.state.selectedOption === "student"} 
            onChange={this.handleOptionChange} 
            inline>
            Student
          </Radio>
        </FormGroup>

        <Button type="submit">
         Sign Up!
       </Button>
      </form>
    );
  }
}

SignUp.propTypes = {
  onSignUp: PropTypes.func.isRequired
};

export default SignUp;
