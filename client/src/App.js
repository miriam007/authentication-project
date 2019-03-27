import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import SignUpSignIn from "./SignUpSignIn";
import TopNavbar from "./TopNavbar";
import Secret from "./Secret";
import Welcome from "./components/Welcome";
import StudentForm from "./components/StudentForm";
import TutorForm from "./components/TutorForm";
import ReviewForm from "./components/ReviewForm";
//import Profile from "./components/Profile";
import ProfileContainer from "./containers/ProfileContainer";
import TutorProfileContainer from "./containers/TutorProfileContainer";
import ReviewContainer from "./containers/ReviewContainer";

import { loadUserId } from './actions/index';

class App extends Component {
  constructor() {
    super();
    this.state = {
      signUpSignInError: "",
      authenticated: localStorage.getItem("token") || false
    };
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignUp(credentials) {
    const { username, password, confirmPassword } = credentials;
    if (!username.trim() || !password.trim() ) {
      this.setState({
        signUpSignInError: "Must Provide All Fields"
      });
  
    if (password.trim()!== confirmPassword.trim()) {
      this.setState({
        signUpSignInError: "Passwords do not match"
      });
    }
    } else {

      fetch("/api/users", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(credentials)
      }).then((res) => {
        return res.json();
      }).then((data) => {
        loadUserId();
        const { token } = data;
        localStorage.setItem("token", token);
        this.setState({
          signUpSignInError: "",
          token: token,
          authenticated: true
        });
      });
    }
  }

  handleSignIn(credentials) {
    // Handle Sign Up
    const { username, password } = credentials;
    console.log(credentials)
    if (!username.trim() || !password.trim() ) {
      this.setState({
        signUpSignInError: "Must Provide All Fields"
      });
    } else {

      fetch("/api/sessions", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(credentials)
      }).then((res) => {
        return res.json();
      }).then((data) => {
        const { token } = data;
        localStorage.setItem("token", token);
        this.setState({
          signUpSignInError: "",
          token: token,
          authenticated: true
        });
      });
    } 
  }

  handleSignOut() {
    localStorage.removeItem("token");
    this.setState({
      authenticated: false
    });
  }

  renderSignUpSignIn() {
    return (
          <SignUpSignIn 
            error={this.state.signUpSignInError} 
            onSignUp={this.handleSignUp} 
            onSignIn={this.handleSignIn}
          />
    );
  }

  renderApp() {
    return (
      <div>
        <Switch>
          {/* <Route exact path="/" render={() => <h1>Welcome!</h1>} /> */}
          <Route exact path="/" render={() => <Welcome/>}/>
          <Route path='/Profile' component={ProfileContainer}/>
          <Route path="/StudentForm" render={()=> <StudentForm/>}/>
          {/* <Route path="/StudentForm" component={StudentForm}/> */}
          <Route path='/TutorProfile' component={TutorProfileContainer}/>
          <Route path="/TutorForm" component={TutorForm}/>
          <Route path="/ReviewForm" component={ReviewForm}/>
          <Route path="/ReviewList" component={ReviewContainer}/>
          <Route exact path="/secret" component={Secret} />
          <Route render={() => <h1>NOT FOUND!</h1>} />
        </Switch>
      </div>
    );
  }

  render() {
    console.log(this.state.authenticated)
    let whatToShow = "";
    if (this.state.authenticated) {
      whatToShow = this.renderApp();
    } else {
      whatToShow = this.renderSignUpSignIn();
    }
       
    return (
      <BrowserRouter>
        <div className="App">
          <TopNavbar 
            showNavItems={this.state.authenticated} 
            onSignOut={this.handleSignOut} />
          {whatToShow}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
