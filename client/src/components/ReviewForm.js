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

    componentDidMount() {
        fetch('/api/review').then((res)=> {
            return res.text()
        }).then((userId)=>{
            this.setState({userId: userId})
        });
    }
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
        
                <FormGroup className="FormLeft" controlId="formControlsSelect">
                    <ControlLabel>What class was your tutoring session for?</ControlLabel>
                        <FormControl 
                        componentClass="select" 
                        placeholder="Choose your class" 
                        >
                        <option value="select">select</option>
                        <option value="Intro to Web">Intro to Web</option>
                        <option value="JavaScript Intermediate">JavaScript Intermediate</option>
                        <option value="JavaScript Advanced">JavaScript Advanced</option>
                        <option value="C# .NET Intermediate">C# .NET Intermediate</option>
                        <option value="C# .NET Advanced">C# .NET Advanced</option>
                        <option value="UX/UI Intermediate">UX/UI Intermediate</option>
                        <option value="UX/UI Advanced">UX/UI Advanced</option>
                        </FormControl>
                </FormGroup>
                
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Write a review</ControlLabel>
                        <FormControl 
                            componentClass="textarea" 
                            placeholder="How was your tutoring session? Did you find the tutor helpful answering your questions and explaining concepts? Would you work with the tutor again?" 
                            type="text"
                            name="review"
                            onChange={e=>
                                {this.setState({[e.target.name]: e.target.value})}
                            }
                            value={this.state.review}
                        />
                </FormGroup>
                
                <Button type="submit" onClick={this.handleSubmit}>Submit Review</Button>

                <Button type="button" onClick={this.handleDelete}>Delete</Button>
            </form>
        )
    }

}
ReviewForm.propTypes={
    onFormSubmit: PropTypes.func.isRequired
};

export default ReviewForm;