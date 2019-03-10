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
        fetch('/api/reviews').then((res)=> {
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
                            <option value="intro">Intro to Web</option>
                            <option value="js2">JavaScript Intermediate</option>
                            <option value="js3">JavaScript Advanced</option>
                            <option value="net2">C# .NET Intermediate</option>
                            <option value="net3">C# .NET Advanced</option>
                            <option value="ux2">UX/UI Intermediate</option>
                            <option value="ux3">UX/UI Advanced</option>
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