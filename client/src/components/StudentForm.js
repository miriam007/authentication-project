import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class StudentForm extends Component {
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
        fetch("/api/student").then((res)=>{
            return res.json();
        }).then((studentForms)=>{
            this.setState({
                studentForms: studentForms
            });
            console.log(this.state.studentForms)
        });
    }
    handleSubmit(event){
        alert('Profile information saved.')
        event.preventDefault();
        const userId=this.state.userId;
        const level = this.state.level;
        const name = this.state.name;
        const aboutMe = this.state.aboutMe;
        const learningStyle = this.state.learningStyle;
        const strengths = this.state.strengths;
        const weaknesses = this.state.weaknesses;
        let options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ userId, level, name, aboutMe, learningStyle, strengths, weaknesses })
        }
        fetch("/api/student", options).then((res)=>{
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
    // handleSubmit(event){
    //     event.preventDefault();
    //     this.props.onFormSubmit({
    //             level: this.state.level,
    //             name: this.state.name,
    //             aboutMe: this.state.aboutMe,
    //             learningStyle: this.state.learningStyle,
    //             strengths: this.state.strengths,
    //             weaknesses: this.state.weaknesses
    //     })
    // }
    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
            
            <FormGroup controlId="formControlsSelect">
                <ControlLabel>What class was are you in?</ControlLabel>
                    <FormControl onChange={this.handleLevelChange} componentClass="select" placeholder="Choose your class">
                        <option value="select">select</option>
                        <option value="intro">Intro to Web</option>
                        <option value="js2">JavaScript Intermediate</option>
                        <option value="js3">JavaScript Advanced</option>
                        <option value="net2">C# .NET Intermediate</option>
                        <option value="net3">C# .NET Advanced</option>
                        <option value="ux2">UX/UI Intermediate</option>
                        <option value="ux3">UX/UI Advanced</option>
                    </FormControl>
            </FormGroup>
    {/* this form group might need to be deleted or at the top */}
             <FormGroup className="form">

             <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Name</ControlLabel>
                    <FormControl 
                        componentClass="textarea" 
                        placeholder="Name" 
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
                    <ControlLabel>Learning Style</ControlLabel>
                        <FormControl 
                            componentClass="textarea" 
                            placeholder="How do you learn best?" 
                            type="text"
                            name="learningStyle"
                            onChange={e=>
                                {this.setState({[e.target.name]: e.target.value})}
                            }
                            value={this.state.learningStyle}
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
                    <ControlLabel>Weaknesses</ControlLabel>
                        <FormControl 
                            componentClass="textarea" 
                            placeholder="What do you want to work on?" 
                            type="text"
                            name="weaknesses"
                            onChange={e=>
                                {this.setState({[e.target.name]: e.target.value})}
                            }
                            value={this.state.weaknesses}
                        />
                </FormGroup>
                    
                <Button type="submit" className="submitFormButton">Save</Button>
            </FormGroup>
            </form>
        )
    }

}

StudentForm.propTypes={
    onFormSubmit: PropTypes.func.isRequired
};

export default StudentForm;