import React, { Component } from 'react';
import { Route , Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { nominalTypeHack } from 'prop-types';
import StudentForm from './StudentForm';
import TutorForm from './TutorForm';
import Profile from './Profile';
import ChooseRole from './ChooseRole';

//this message isn't showing up
class Welcome extends Component {
    constructor(){
        super();
        this.state={
            userId:"",
            studentForms:[],
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
        // fetch("/api/users").then((res)=>{
        //             return res.text();
        //         }).then((welcome)=>{
        //             this.setState({
        //                 welcome: welcome
        //             });
        //         });
      }
    //changed api from welcome and changed index.js from welcome
    componentDidMount(){
        fetch("/api/userId").then((res)=>{
            return res.text();
        }).then((userId)=>{
            this.setState({
                userId: userId
            });
            console.log(this.state.userId)
        });
        fetch("/api/student").then((res)=>{
            return res.json();
        }).then((studentForms)=>{
            this.setState({
                studentForms: studentForms
            });
            console.log(this.state.studentForms)
        });
    }
    handleStudentClick(e){
       this.setState({studentClick: true}) 
    }
    handleTutorClick(e){
        this.setState({tutorClick: true})
    }
    handleStudentFormSubmit(studentData){
        //alert('Profile information saved.')
        console.log(studentData)
    }
    // handleTutorFormSubmit(tutorData){
    //     console.log(tutorData)
    // }
    render(){
        let whatToShow='';
        const studentForms = this.state.studentForms;
        if(this.state.studentForm === []){
            whatToShow = <ChooseRole/>
        }
        studentForms.map((form, index)=>{
            if (form.userId === this.state.userId){
                whatToShow=<Profile/>
            } 
        })
        
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
            {/* <h1>Please choose your role</h1>
            
                <Link to={'/StudentForm'}>
                    <Button type="submit">
                        Sign up as a Student
                    </Button> 
                </Link>
                <Route path="/studentform" component={StudentForm}/>
            {' '}
                <Link to={'/TutorForm'}>
                    <Button type="submit">
                    Sign up as a Tutor
                    </Button>
                </Link>
                <Route path="/tutorform" component={TutorForm}/> */}
            {whatToShow}
            </div>
        )
    }
}

export default Welcome;