import React, { Component } from "react";

class Secret extends Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  componentDidMount() {
    let token =localStorage.getItem("token");

    fetch("/api/secret",{
      headers:{
        "Authorization":token
      }

    }).then((res) => {
      return res.text();
    }).then((data) => {
      this.setState({
        message: data
      });
    });
  }

  render() {
    return (
      <h1>{this.state.message}</h1>
    );
  }
}

export default Secret;
