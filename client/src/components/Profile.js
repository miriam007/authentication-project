import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import StudentForm from './StudentForm';
import TutorForm from './TutorForm';

class Profile extends Component {
    
    constructor(){
        super();
        
        this.state = {
            userId: '',
            studentForms:[],
            level: '',
            name: '',
            aboutMe: '',
            learningStyle: '',
            strengths: '',
            weaknesses: ''
        }
    };
        componentDidMount(){
            this.props.loadUserId();
            // fetch("/api/userId").then((res)=>{
            //     return res.text();
            // }).then((userId)=>{
            //     this.setState({
            //         userId: userId
            //     });
            // });
            fetch('/api/student')
            .then((res)=> res.json())
            .then((data)=>{
                const filteredData = data.filter((student, index)=>{
                    console.log(student.userId)
                    if (student.userId === this.props.userId) {
                        return student
                    }
                })
                this.setState({ studentForms: filteredData })
                const name= this.state.studentForms[0].name;
                const level= this.state.studentForms[0].level;
                const aboutMe= this.state.studentForms[0].aboutMe;
                const learningStyle= this.state.studentForms[0].learningStyle;
                const strengths= this.state.studentForms[0].strengths;
                const weaknesses= this.state.studentForms[0].weaknesses;
                
                console.log(aboutMe)
                this.setState({ 
                    name: name,
                    level: level,
                    aboutMe: aboutMe,
                    learningStyle: learningStyle,
                    strengths: strengths,
                    weaknesses: weaknesses
                 })
                console.log(this.state.name)
                console.log("mount:", this.state.studentForms[0].name)
                // const filterByUserId= (data) =>{
                //     return data.userId ==this.props.userId
                // }
                // const filteredData=data.filter(filterByUserId);
                // this.setState({ studentForms: filteredData }) 
            })
            
        }
    render(){
        let props=this.props;
        return(
            <div>
                <h1>Profile</h1>
                <div>Name: {this.state.name}</div>
                <div>Level: {this.state.level}</div>
                <div>About Me: {this.state.aboutMe}</div>
                <div>Learning Style: {this.state.learningStyle}</div>
                <div>Strengths: {this.state.strengths}</div>
                <div>Weaknesses: {this.state.weaknesses}</div>
            </div>
        )
    }
};

export default Profile;