import React, { Component } from 'react';
import { Route , Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import StudentForm from './StudentForm';
import TutorForm from './TutorForm';
import { nominalTypeHack } from 'prop-types';

//this message isn't showing up
class Welcome extends Component {
    constructor(){
        super();
        this.state={
            welcome:"",
            studentClick: false,
            tutorClick: false
        };
        this.onClick=this.onClick.bind(this)
        this.handleStudentClick = this.handleStudentClick.bind(this);
        this.handleTutorClick = this.handleTutorClick.bind(this);
        this.handleStudentFormSubmit=this.handleStudentFormSubmit.bind(this);
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
    componentDidMount(){
        fetch("/api/users").then((res)=>{
            return res.text();
        }).then((welcome)=>{
            this.setState({
                welcome: welcome
            });
        });
    }
    handleStudentClick(e){
       this.setState({studentClick: true}) 
    }
    handleTutorClick(e){
        this.setState({tutorClick: true})
    }
    handleStudentFormSubmit(studentData){
        console.log(studentData)
    }
    render(){
        // let showStyle=''
        // const styles ={
        //     display: "none"
        // }
        
        // if(this.state.tutorClick === false) {
        //     showStyle=styles
        // } else if (this.state.studentClick === false) {
        //     showStyle=styles
        // }
        
        return(
            <div>
            <h1>Please choose your role</h1>
            
                <Link to={'/StudentForm'}>
                    <Button type="submit">
                        Sign up as a Student
                    </Button> 
                </Link>
            {' '}
                <Link to={'/TutorForm'}>
                    <Button type="submit">
                    Sign up as a Tutor
                    </Button>
                </Link>
            
            </div>
        )
    }
}

export default Welcome;