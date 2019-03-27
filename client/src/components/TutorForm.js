import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { FormGroup, FormControl, ControlLabel, Button, Checkbox } from 'react-bootstrap';
import PropTypes from 'prop-types';

class TutorForm extends Component {
    constructor(){
        super();
        
        this.state = {
            userId: '',
            tutorForms: [],
            level: [],
            name: '',
            aboutMe: '',
            teachingStyle: '',
            strengths: '',
            contactMe: ''
        }
        this.handleLevelChange=this.handleLevelChange.bind(this);
    };

    componentDidMount(){
        fetch("/api/userId").then((res)=>{
            return res.text();
        }).then((userId)=>{
            this.setState({
                userId: userId
            });
            console.log(this.state.userId)
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
   
    handleSubmit(event){
        alert('Profile information saved.')
        event.preventDefault();
            const userId= this.state.userId;
            const level= this.state.level;
            const name= this.state.name;
            const aboutMe= this.state.aboutMe;
            const teachingStyle= this.state.teachingStyle;
            const strengths= this.state.strengths;
            const contactMe= this.state.contactMe;
            let options = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ userId, level, name, aboutMe, teachingStyle, strengths, contactMe })
            }
            fetch("/api/tutor", options).then((res)=>{
                return res.json()
            }).then((res)=>{
                console.log(res)
            }).catch((err)=>{
                console.log(err)
            })
    }
    
    handleLevelChange(e){
        this.setState({level:e.target.value})
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>

                <FormGroup controlId="formHorizontal">
                {/* <col smOffset={2} sm={10}> */}
                    <ControlLabel>What class or classes can you help with? <br></br>Select all that apply.</ControlLabel>
                    {/* <FormControl onChange={this.handleLevelChange} componentClass="select" placeholder="Choose your class"> */}
                    
                        <Checkbox value="Intro to Web">Intro to Web</Checkbox>
                        <Checkbox value="JavaScript Intermediate">JavaScript Intermediate</Checkbox>
                        <Checkbox value="JavaScript Advanced">JavaScript Advanced</Checkbox>
                        <Checkbox value="C# .NET Intermediate">C# .NET Intermediate</Checkbox>
                        <Checkbox value="C# .NET Advanced">C# .NET Advanced</Checkbox>
                    {/* </col> */}
                    {/* </FormControl> */}
                </FormGroup>
     {/* this form group might need to be at the top or deleted */}
                <FormGroup className="form">

                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Name</ControlLabel>
                        <FormControl 
                            componentClass="textarea" 
                            placeholder="name" 
                            type="text"
                            name="name"
                            onChange={e=>
                                {this.setState({[e.target.name]: e.target.value})}
                            }
                            value={this.state.name}
                        />
                </FormGroup>

                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>About Me</ControlLabel>
                        <FormControl 
                            componentClass="textarea" 
                            placeholder="Tell us about yourself." 
                            type="text"
                            name="aboutMe"
                            onChange={e=>
                                {this.setState({[e.target.name]: e.target.value})}
                            }
                            value={this.state.aboutMe}
                        />
                    </FormGroup>
                    
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Teaching Style</ControlLabel>
                        <FormControl 
                            componentClass="textarea" 
                            placeholder="What ways have you found it helpful to teach? In person, screen sharing, reading articles, tutorials, etc." 
                            type="text"
                            name="teachingStyle"
                            onChange={e=>
                                {this.setState({[e.target.name]: e.target.value})}
                            }
                            value={this.state.teachingStyle}
                        />
                    </FormGroup>
                    
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Strengths</ControlLabel>
                        <FormControl 
                            componentClass="textarea" 
                            placeholder="What areas do you excel in?" 
                            type="text"
                            name="strengths"
                            onChange={e=>
                                {this.setState({[e.target.name]: e.target.value})}
                            }
                            value={this.state.strengths}
                        />
                    </FormGroup>
                    
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Contact Me</ControlLabel>
                        <FormControl 
                            componentClass="textarea" 
                            placeholder="How would you like students to communicate and schedule with you? Email, RocketChat, text, etc." 
                            type="text"
                            name="contactMe"
                            onChange={e=>
                                {this.setState({[e.target.name]: e.target.value})}
                            }
                            value={this.state.contactMe}
                        />
                    </FormGroup>
                    
                    <Link to={'/TutorProfile'}><Button type="submit" className="submitFormButton">Save</Button></Link>
            </FormGroup>
            </form>
        )
    }

}

TutorForm.propTypes={
    onFormSubmit: PropTypes.func.isRequired
};

export default TutorForm;