import { Rating } from '@material-ui/core'
import React, { useState } from 'react'
import { reviewInterface } from '../../interfaces/mediaInterface'
import reviewStyles from "../../styles/Review.module.scss"


interface propInterface {
    review: reviewInterface
}

const Review = (props: propInterface) => {
    const [open, setOpen] = useState(false)
    return (
        <div className={`${reviewStyles.review} ${open ? reviewStyles.open : ""}`} onClick={() => setOpen(!open)}>
            <div className={reviewStyles.reviewContainer}>
                <div className={reviewStyles.reviewDetails}>
                    <div className={reviewStyles.reviewHeader}>
                        <div className={`${reviewStyles.reviewDetails} ${reviewStyles.reviewAuthor}`}>
                            {props.review.author}

                        </div>
                        <div className={`${reviewStyles.reviewDetails} ${reviewStyles.reviewRating}`}>
                            <Rating readOnly value={props.review.author_details.rating/2} precision={.5} size={"small"} />
                            {props.review.author_details.rating /2}
                        </div>
                    </div>


                    <div className={`${reviewStyles.reviewDetails} ${reviewStyles.reviewDate}`}>
                        <span>{props.review.created_at.slice(0, 10)}</span>

                    </div>
                </div>
                <div className={reviewStyles.reviewContent}>
                    {props.review.content}
                </div>
            </div>
        </div>
    )
}

export default Review
