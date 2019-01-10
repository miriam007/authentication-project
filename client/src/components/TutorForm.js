import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class TutorForm extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            body: [
                {AboutMe: ''},
                {TeachingStyle: ''},
                {Strengths: ''},
                {ContactMe: ''}
            ]
        }
    };
    handleSubmit(event){
        event.preventDefault();
        this.props.onFormSubmit({
            title: this.state.title,
            body: [
                {AboutMe: this.state.AboutMe},
                {TeachingStyle: this.state.TeachingStyle},
                {Strenghts: this.state.Strenghts},
                {ContactMe: this.state.ContactMe}
            ]
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>

                <FormGroup controlId="formControlsSelectMultiple">
                    <ControlLabel>What class or classes can you help with?</ControlLabel>
                    <FormControl componentClass="select" placeholder="Choose your class">
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
     {/* this form group might need to be at the top or deleted */}
                <FormGroup className="form">
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>About Me</ControlLabel>
                        <FormControl 
                            componentClass="textarea" 
                            placeholder="Tell us about yourself." 
                            type="text"
                            name="body"
                            onChange={e=>
                                {this.setState({[e.target.name]: e.target.value})}
                            }
                            value={this.state.AboutMe}
                        />
                    </FormGroup>
                    
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Teaching Style</ControlLabel>
                        <FormControl 
                            componentClass="textarea" 
                            placeholder="What ways have you found it helpful to learn?" 
                            type="text"
                            name="body"
                            onChange={e=>
                                {this.setState({[e.target.name]: e.target.value})}
                            }
                            value={this.state.TeachingStyle}
                        />
                    </FormGroup>
                    
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Strenghts</ControlLabel>
                        <FormControl 
                            componentClass="textarea" 
                            placeholder="What areas do you excel in?" 
                            type="text"
                            name="body"
                            onChange={e=>
                                {this.setState({[e.target.name]: e.target.value})}
                            }
                            value={this.state.Strengths}
                        />
                    </FormGroup>
                    
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Contact Me</ControlLabel>
                        <FormControl 
                            componentClass="textarea" 
                            placeholder="How would you like students to communicate with you?" 
                            type="text"
                            name="body"
                            onChange={e=>
                                {this.setState({[e.target.name]: e.target.value})}
                            }
                            value={this.state.ContactMe}
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