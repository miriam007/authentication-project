import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button, Checkbox } from 'react-bootstrap';
import PropTypes from 'prop-types';

class TutorForm extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            body: [
                {name: ''},
                {aboutMe: ''},
                {teachingStyle: ''},
                {strengths: ''},
                {contactMe: ''}
            ]
        }
    };
    handleSubmit(event){
        event.preventDefault();
        this.props.onFormSubmit({
            title: this.state.title,
            body: [
                {name: this.state.name},
                {aboutMe: this.state.aboutMe},
                {teachingStyle: this.state.teachingStyle},
                {strengths: this.state.strengths},
                {contactMe: this.state.contactMe}
            ]
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>

                <FormGroup controlId="formHorizontal">
                {/* <col smOffset={2} sm={10}> */}
                    <ControlLabel>What class or classes can you help with? <br></br>Select all that apply.</ControlLabel>
                    {/* <FormControl componentClass="select" placeholder="Choose your class"> */}
                    
                        <Checkbox value="intro">Intro to Web</Checkbox>
                        <Checkbox value="js2">JavaScript Intermediate</Checkbox>
                        <Checkbox value="js3">JavaScript Advanced</Checkbox>
                        <Checkbox value="net2">C# .NET Intermediate</Checkbox>
                        <Checkbox value="net3">C# .NET Advanced</Checkbox>
                        <Checkbox value="ux2">UX/UI Intermediate</Checkbox>
                        <Checkbox value="ux3">UX/UI Advanced</Checkbox>
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
                            placeholder="What ways have you found it helpful to teach?" 
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
                            placeholder="How would you like students to communicate with you?" 
                            type="text"
                            name="contactMe"
                            onChange={e=>
                                {this.setState({[e.target.name]: e.target.value})}
                            }
                            value={this.state.contactMe}
                        />
                    </FormGroup>
                    
                    <Button type="submit" className="submitFormButton" onClick={this.handleSubmit}>Save</Button>
            </FormGroup>
            </form>
        )
    }

}

TutorForm.propTypes={
    onFormSubmit: PropTypes.func.isRequired
};

export default TutorForm;