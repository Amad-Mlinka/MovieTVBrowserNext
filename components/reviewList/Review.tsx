import { Rating } from '@material-ui/core'
import StarIcon from '@mui/icons-material/Star';
import React, { useState } from 'react'
import { reviewInterface } from '../../interfaces/reviewInterface'
import reviewStyles from "../../styles/ReviewList/Review.module.scss"


interface propInterface {
    review: reviewInterface
}

const Review = (props: propInterface) => {

    const [open, setOpen] = useState(false)
    return (

        <div className={`${reviewStyles.review}`} onClick={() =>setOpen(!open)}>

            <div className={`${reviewStyles.reviewContainer}`}>

                <div className={`${reviewStyles.reviewHeader}`}>
                    <div className={`${reviewStyles.headerTop}`}>
                        <div className={`${reviewStyles.headerTitle}`}>
                            {props.review.title}
                        </div>
                        <div className={`${reviewStyles.headerRating}`}>
                            <StarIcon className={`${reviewStyles.starIcon}`} />
                            <span>{parseInt(props.review.rate) / 2}/5</span>
                        </div>
                    </div>

                    <div className={`${reviewStyles.headerBottom}`}>
                        <div className={`${reviewStyles.reviewData}`}>
                            <div className={`${reviewStyles.reviewUser}`}>
                                Review by {props.review.username}
                            </div >
                        </div >
                    </div >

                </div >

                <div className={`${reviewStyles.reviewContent}`}>
                    <div className={`${reviewStyles.reviewContentContainer} ${open ? reviewStyles.reviewOpen :""}`}>
                        <span className={`${reviewStyles.contentText}`}>{props.review.content}</span>
                    </div>


                </div >

                <div className={`${reviewStyles.reviewFooter}`}>
                    <hr className={`${reviewStyles.reviewSeperator}`} />
                    <div className={`${reviewStyles.footerContent}`}>
                        <span className={`${reviewStyles.reviewData}`}>{props.review.date}</span>
                        <span className={`${reviewStyles.reviewData}`}>{props.review.helpful}</span>

                    </div>

                </div >

            </div >

        </div >

    )
}

export default Review
