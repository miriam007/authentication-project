import React, { Component } from 'react';
import ReviewList from './ReviewList';
// import { render } from 'react-dom';
// import PropTypes from 'prop-types';
import ReviewForm from './ReviewForm';


class TutorProfile extends Component {

    constructor() {
        super();

        this.state = {
            userId: '',
            tutorForms: [],
            level: '',
            name: '',
            aboutMe: '',
            teachingStyle: '',
            strengths: '',
            contactMe: ''
        }
    };

    componentDidMount(){
        fetch('/api/currentTutor')
        .then((res)=> res.json())
        .then((data)=> {
            this.setState(data)
        })
    }

    render() {
        //let props = this.props;
        return (
            <div>
                <h1>Tutor Profile</h1>
                <div>Name: {this.state.name}</div>
                <div>Levels: {this.state.level}</div>
                <div>About Me: {this.state.aboutMe}</div>
                <div>Teaching Style: {this.state.teachingStyle}</div>
                <div>Strengths: {this.state.strengths}</div>
                <div>How to contact me: {this.state.contactMe}</div>
                <ReviewForm />
                {/* <ReviewList/> */}
            </div>
        )
    }
};

export default TutorProfile;