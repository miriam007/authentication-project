import React from 'react';
import PropTypes from 'prop-types';
import Review from "./Review"

const ReviewList= ({ reviews, deleteReview }) =>{


const postReviews =reviews.map(review => (
    <Review
        key={review._id}
        id={review._id}
        title={review.title}
        body={review.body}
        onDelete={ deleteReview }
    />
));

return (
    <div>
        <h1>Tutor Reviews</h1>
        { postReviews }
    </div>
);
);
postReviews.propTypes= {
    deleteReview: PropTypes.func.isRequired,
    reviews: PropTypes.array.isRequired,
};

export default ReviewList;