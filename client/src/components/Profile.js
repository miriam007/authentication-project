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
            fetch("/api/userId").then((res)=>{
                return res.text();
            }).then((userId)=>{
                this.setState({
                    userId: userId
                });
            });
            fetch('/api/student')
            .then((res)=> res.json())
            .then((data)=>{
                data.filter((user, index)=>{
                    if(this.state.userId !== ""){
                        console.log(user.userId === this.state.userId)
                    }
                    
                })
                console.log(this.state.userId)
                console.log("data:", data)
            })
        }
    render(){
        let props=this.props;
        return(
            <div>
                
                Profile
            </div>
        )
    }
};

export default Profile;