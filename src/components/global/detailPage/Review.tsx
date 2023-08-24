import React from 'react';
import ReviewBox from './ReviewBox';
import ReviewPagenation from './ReviewPagenation';
import ReviewTitle from './ReviewTitle';
import ReviewForm from './ReviewForm';

const Review = () => {
    return (
        <div className="review_cointainer">
            <ReviewTitle/>
            <ReviewForm productId={2} title={'[제제펫] 햄스터 주택 하우스'} />
            <ReviewBox />
            <ReviewPagenation/>
        </div>
    )
}

export default Review;
