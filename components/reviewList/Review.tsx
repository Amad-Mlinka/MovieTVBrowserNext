import { Rating } from '@material-ui/core'
import React, { useState } from 'react'
import { reviewInterface } from '../../interfaces/reviewInterface'
import reviewStyles from "../../styles/ReviewList/Review.module.scss"


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
                            {props.review.username}

                        </div>
                        <div className={`${reviewStyles.reviewDetails} ${reviewStyles.reviewRating}`}>
                            <Rating readOnly value={Number.parseInt(props.review.rate) / 2} precision={.5} size={"small"} />
                            {Number.parseInt(props.review.rate) / 2}
                        </div>
                    </div>


                    <div className={`${reviewStyles.reviewDetails} ${reviewStyles.reviewDate}`}>
                        <span>{props.review.date}</span>

                    </div>
                </div>
                <div className={reviewStyles.reviewContent}>
                    {props.review.content}
                </div>
            </div>

        </div >

    )
}

export default Review
