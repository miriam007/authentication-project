import React, {Component} from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class ReviewForm extends Component {
    constructor(){
        super();
        
        this.state = {
            date: '',
            level:'',
            review: ''
        }
    };
handleSubmit(event){
    event.preventDefault();
    this.props.onFormSubmit({
        date: this.state.date,
        level:this.state.level,
        review: this.state.review
    })
}
    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
        
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>What class was your tutoring session for?</ControlLabel>
                        <FormControl componentClass="select" placeholder="Choose your class">
                            <option value="select">select</option>
                            <option value="other">Intro to Web</option>
                            <option value="other">JavaScript Intermediate</option>
                            <option value="other">JavaScript Advanced</option>
                            <option value="other">C# .NET Intermediate</option>
                            <option value="other">C# .NET Advanced</option>
                            <option value="other">UX/UI Intermediate</option>
                            <option value="other">UX/UI Advanced</option>
                        </FormControl>
                </FormGroup>
                
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Write a review</ControlLabel>
                        <FormControl 
                            componentClass="textarea" 
                            placeholder="How was your tutoring session?" 
                            type="text"
                            name="review"
                            onChange={e=>
                                {this.setState({[e.target.name]: e.target.value})}
                            }
                            value={this.state.review}
                        />
                </FormGroup>
                
                <Button type="submit" className="submitFormButton"></Button>
            </form>
        )
    }

}
ReviewForm.propTypes={
    onFormSubmit: PropTypes.func.isRequired
};

export default ReviewForm;