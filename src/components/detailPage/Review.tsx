import React from 'react';
import ReviewBox from './ReviewBox';
import ReviewPagenation from './ReviewPagenation';
import ReviewTitle from './ReviewTitle';

const Review = () => {
    return (
        <div className="review_cointainer">
            <ReviewTitle/>
            <ReviewBox />
            <ReviewPagenation/>
        </div>
    )
}

export default Review;
