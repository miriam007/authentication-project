import React, { Component } from 'react';
import { Route , Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { nominalTypeHack } from 'prop-types';
import StudentForm from './StudentForm';
import TutorForm from './TutorForm';
import Profile from './Profile';
import TutorProfile from './TutorProfile';
import ChooseRole from './ChooseRole';
import DisplayProfile from './DisplayProfile';
import ProfileContainer from '../containers/ProfileContainer';
import TutorProfileContainer from '../containers/TutorProfileContainer';

class Welcome extends Component {
    constructor(){
        super();
        this.state={
            userId:"",
            studentForms:[],
            tutorForms: [],
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
        console.log('props', this.props);
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
        fetch("/api/tutor").then((res)=>{
            return res.json();
        }).then((tutorForms)=>{
            this.setState({
                tutorForms: tutorForms
            });
            console.log(this.state.tutorForms)
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
    handleTutorFormSubmit(tutorData){
        console.log(tutorData)
    }
    render(){
        let whatToShow='';
        const studentForms = this.state.studentForms;
        const tutorForms=this.state.tutorForms;
        console.log('**********************')
        console.log(studentForms, this.state)
        console.log('**********************')
 
        // if(this.state.studentForms === []){
        //     whatToShow = <ChooseRole/>
        // }
        const studentForm = studentForms.filter((form) => form.userId === this.state.userId);
        const tutorForm = tutorForms.filter((form) => form.userId === this.state.userId);
        
        
        if (studentForm.length > 0) {
            console.log('studentForm');
            whatToShow = <ProfileContainer/>
        } else if (tutorForm.length > 0) {
            console.log('tutorContainer');
            whatToShow = <TutorProfileContainer/>
        } else {
            console.log('chooseRole');
            whatToShow = <ChooseRole />
        }

        // studentForms.map((form, index)=>{
        //     if (form.userId === this.state.userId){
        //         whatToShow=<Profile/>
        //     } else if (form.userId !== this.state.userId){
        //         whatToShow = <ChooseRole/>
        //     }
        // })
        // tutorForms.map((form, index)=>{
        //     if (form.userId == this.state.userId) 
        //     {
        //         whatToShow=<TutorProfile/>
        //     } else if (form.userId !== this.state.userId){
        //         whatToShow= <ChooseRole/>
        //     }
        // })
        
        return(
            <div>
        
            {whatToShow}
            {/* <DisplayProfile/> */}
            </div>
        )
    }
}

export default Welcome;