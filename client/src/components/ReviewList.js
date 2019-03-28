import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReviewForm from "./ReviewForm"

class ReviewList extends Component {
    constructor(){
        super();

        this.state= {
            userId: '',
            level: '',
            review: '',
            reviewForms: [{ level: 'test', review: 'awesome'}]
        }
    };
    
    componentDidMount(){
        this.props.loadUserId();
        fetch('/api/review')
        .then((res)=> res.json())
        .then((data)=>{
            const filteredData =data.filter(
                (review, index)=>{
                    console.log(review.userId)
                    if (review.userId === this.props.userId) {
                        return review
                    }
                })
                this.setState({ reviewForms: filteredData })
                // const level=this.state.reviewForms[0].level;
                // const review=this.state.reviewForms[0].review;
                // console.log(review)
                // this.setState({
                //     level: level,
                //     review: review
                // })
        })
    }
    render(){
        return(
            <div>
                <h1>Reviews</h1>
                {this.state.reviewForms.map((form, i) => {
                    return <React.Fragment>
                        <h3>Level: {form.level}</h3>
                        <div>Review: {form.review}</div>
                    </React.Fragment>
                })}
            </div>
        )
    }
};

export default ReviewList;