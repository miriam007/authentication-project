import React, {Component} from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class ReviewForm extends Component {
    constructor(){
        super();
        
        this.state = {
            userId:'',
            level:'',
            review: ''
        }
        this.handleLevelChange=this.handleLevelChange.bind(this);
    };

    componentDidMount() {
        fetch('/api/userId').then((res)=> {
            return res.text()
        }).then((userId)=>{
            this.setState({userId: userId})
        });
        fetch('/api/review').then((res)=>{
            return res.json();
        }).then((reviewForms)=>{
            this.setState({
                reviewForms: reviewForms
            });
            console.log(this.state.reviewForms)
        });
    }

    handleSubmit(event){
        alert('Review submitted.')
        event.preventDefault();
        const userId=this.state.userId;
        const level= this.state.level;
        const review=this.state.review;
        let options ={
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ userId, level, review })
        }
        fetch('./api/review', options).then((res)=>{
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
        
                <FormGroup className="FormLeft" controlId="formControlsSelect">
                    <ControlLabel>What class was your tutoring session for?</ControlLabel>
                        <FormControl 
                        onChange={this.handleLevelChange}
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
                            placeholder="How was your tutoring session? Did you find the tutor helpful answering your questions and explaining concepts? Would you work with this tutor again?" 
                            type="text"
                            name="review"
                            onChange={e=>
                                {this.setState({[e.target.name]: e.target.value})}
                            }
                            value={this.state.review}
                        />
                </FormGroup>
                
                <Button type="submit">Submit Review</Button>

                <Button type="button">Delete</Button>
            </form>
        )
    }

}
ReviewForm.propTypes={
    onFormSubmit: PropTypes.func.isRequired
};

export default ReviewForm;