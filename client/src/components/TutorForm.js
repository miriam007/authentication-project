import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { FormGroup, FormControl, ControlLabel, Button, Checkbox } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Checkboxes from '../components/Checkboxes';

const classCatalog= [
    { code: 'intro', name: 'Intro to Web' },
    { code: 'jsInt', name: 'Javascript Intermediate' },
    { code: 'jsAdv', name: 'Javascript Advanced' },
    { code: 'netInt', name: 'C# .NET Intermediate' },
    { code: 'netAdv', name: 'C# .NET Advanced' },
]

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
            contactMe: '',
            selectedClasses: [],
        };
        this.handleLevelChange=this.handleLevelChange.bind(this);
    };

    componentDidMount(){
        fetch("/api/userId").then((res)=>{
            return res.text();
        }).then((userId)=>{
            this.setState({
                userId: userId,
            });
            console.log(this.state.userId)
        });
        fetch("/api/tutor").then((res)=>{
            return res.json();
        }).then((tutorForms)=>{
            const tutor= tutorForms[0];
            this.setState({
                userId: tutor.userId,
                level: tutor.level,
                name: tutor.name,
                aboutMe: tutor.aboutMe,
                teachingStyle: tutor.teachingStyle,
                strengths: tutor.strengths,
                contactMe: tutor.contactMe,
                selectedClasses: tutor.level,
            });
        });
    }
   
    handleSubmit(event){
        alert('Profile information saved.')
        event.preventDefault();
            const userId= this.state.userId;
            const level= this.state.selectedClasses;
            const name= this.state.name;
            const aboutMe= this.state.aboutMe;
            const teachingStyle= this.state.teachingStyle;
            const strengths= this.state.strengths;
            const contactMe= this.state.contactMe;

    // TODO: check if it is a new or current user.  if it is new,
    // call POST /api/tutor to create the tutor record.  if is an
    // existing user, call PUT /api/tutor/:userId to update. You'll
    // need to build the url..., something like '/api/tutor/' + userId
    
    // call POST (to create) or PUT (to update)
            let options = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ userId, level, name, aboutMe, teachingStyle, strengths, contactMe })
            }
            fetch("/api/tutor", options).then((res)=>{
                return res.json()
            }).then((res)=>{
                console.log(res)
                this.props.history.push('/TutorProfile');
            }).catch((err)=>{
                console.log(err)
            })
    }
    
    handleLevelChange(e){
        this.setState({level:e.target.value})
    }

    //this adds and takes away classes in the array selectedClasses
    onClassSelected =(classCode) => {
        const currentlySelectedClasses = this.state.selectedClasses;
        let newSelectedClasses;
        //if the class is already in the array, remove it
        if (currentlySelectedClasses.includes(classCode)) {
            newSelectedClasses= currentlySelectedClasses.filter((code)=> code !== classCode
            );
        } else {
            //if the classes isn't in the array, add it
            newSelectedClasses= [...currentlySelectedClasses, classCode];
        }
        this.setState({
            selectedClasses: newSelectedClasses,
        });
        console.log('selectedClasses', newSelectedClasses);
    };
    //checks to see if the class is in the array selectedClasses
    isClassSelected=(classCode)=> {
        return this.state.selectedClasses.includes(classCode);
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <Checkboxes
                    classCatalog={classCatalog}
                    isClassSelected={this.isClassSelected}
                    onClassSelected={this.onClassSelected}
                />

                {/* <FormGroup controlId="formHorizontal">
                {/* <col smOffset={2} sm={10}> */}
                    <ControlLabel>What class or classes can you help with? <br/>Select all that apply.</ControlLabel>
        
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
                    
                    {/* <Link to={'/TutorProfile'}><Button type="submit" className="submitFormButton">Save</Button></Link> */}
                    <Button type="submit" className="submitFormButton">Save</Button>
            </FormGroup>
            </form>
        )
    }

}

TutorForm.propTypes={
    onFormSubmit: PropTypes.func.isRequired
};

export default withRouter(TutorForm);