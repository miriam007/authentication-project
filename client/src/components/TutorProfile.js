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
    componentDidMount() {
        this.props.loadUserId(); 
        console.log('this.props.userId', this.props.userId);
        fetch('/api/tutor')
            .then((res) => res.json())
            .then((data) => {
                const filteredData = data.filter((tutor, index) => {
                    console.log(tutor.userId, this.props.userId)
                    if (tutor.userId === this.props.userId) {
                        return tutor
                    }
                })
                console.log('tutorprofile filtereddata', data, filteredData);
                const {
                    name,
                    level,
                    aboutMe,
                    teachingStyle,
                    strengths,
                    contactMe
                } = this.state.tutorForms[0];

                this.setState({
                    tutorForms: filteredData,
                    name: name,
                    level: level,
                    aboutMe: aboutMe,
                    teachingStyle: teachingStyle,
                    strengths: strengths,
                    contactMe: contactMe
                }, () => {
                    console.log(this.state.name)
                    console.log("mount:", this.state.tutorForms[0].name)
                });
                // const name= this.state.tutorForms[0].name;
                // const level= this.state.tutorForms[0].level;
                // const aboutMe= this.state.tutorForms[0].aboutMe;
                // const teachingStyle= this.state.tutorForms[0].teachingStyle;
                // const strengths= this.state.tutorForms[0].strengths;
                // const contactMe= this.state.tutorForms[0].contactMe;

                // console.log(aboutMe)
                // this.setState({
                //     name: name,
                //     level: level,
                //     aboutMe: aboutMe,
                //     teachingStyle: teachingStyle,
                //     strengths: strengths,
                //     contactMe: contactMe
                // })
                // console.log(this.state.name)
                // console.log("mount:", this.state.tutorForms[0].name)
            })

    }
    render() {
        let props = this.props;
        return (
            <div>
                <h1>Tutor Profile</h1>
                <div>Name: {this.state.name}</div>
                <div>Level: {this.state.level}</div>
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