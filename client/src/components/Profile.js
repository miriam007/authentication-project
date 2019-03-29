import React, { Component } from 'react';
// import { render } from 'react-dom';
// import PropTypes from 'prop-types';
// import StudentForm from './StudentForm';
// import TutorForm from './TutorForm';

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
            fetch('/api/currentStudent')
            .then((res)=> res.json())
            .then((data)=> {
                this.setState(data)
            })
        }
            
        
    render(){
        let props=this.props;
        return(
            <div>
                <h1>Student Profile</h1>
                <h2>Name: {this.state.name}</h2>
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