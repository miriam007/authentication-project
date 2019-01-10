import React, { Component } from 'react';
import { Route , Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import StudentForm from './StudentForm';
import TutorForm from './TutorForm';

//this message isn't showing up
class Welcome extends Component {
    constructor(){
        super();
        this.state={
            welcome:""
        };
        this.onClick=this.onClick.bind(this)
    }
    onClick(event) {
        event.preventDefault();
        this.props.onClick({
            
        });
        fetch("/api/users").then((res)=>{
                    return res.text();
                }).then((welcome)=>{
                    this.setState({
                        welcome: welcome
                    });
                });
      }
    //changed api from welcome and changed index.js from welcome
    // componentDidMount(){
    //     fetch("/api/users").then((res)=>{
    //         return res.text();
    //     }).then((welcome)=>{
    //         this.setState({
    //             welcome: welcome
    //         });
    //     });
    // }
    render(){
        return(
            <div>
            <h1>Please choose your role</h1>
            
                <Link to={'/studentform'}>
                
                    <Button type="submit"><Route path="/studentform" component={StudentForm}/>Sign up as a Student</Button>
                </Link>
                {/* <Route path="/studentform" component={StudentForm}/> */}
            {' '}
            
                <Link to={'/tutorform'}>
                    <Button type="submit"><Route path="/tutorform" component={TutorForm}/>Sign up as a Tutor</Button>
                </Link>
                {/* <Route path="/tutorform" component={TutorForm}/> */}
    
            </div>
        )
    }
}

export default Welcome;