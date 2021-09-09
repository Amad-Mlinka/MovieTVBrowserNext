import React, { useRef } from 'react'
import Review from './Review'
import reviewListStyles from "../../styles/ReviewList/ReviewList.module.scss"

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { reviewInterface } from '../../interfaces/reviewInterface';
import Carousel, { ResponsiveType } from 'react-multi-carousel';
import { responsiveSettings } from '../slider/SliderSettings';
import 'react-multi-carousel/lib/styles.css';

interface propInterface {
  reviews: reviewInterface[] | null | undefined;
}


const ReviewList = (props: propInterface) => {
  const reviews = props.reviews ? props.reviews : []


  const responsive:ResponsiveType = responsiveSettings(reviews.length,"reviews")
  const sliderRef = useRef<any>(<Carousel responsive={responsive} > </Carousel>)

  return (
    <>{
      <div className={reviewListStyles.reviewList} >
        <div className={reviewListStyles.content}>
          <div className={reviewListStyles.header}>
            <div className={reviewListStyles.headerContainer}>
              <div className={reviewListStyles.heading}>
                <span>Reviews</span>
              </div>
              <div className={reviewListStyles.subHeading}>
                <span>For this movie</span>
              </div>
            </div>

            <div className={`${reviewListStyles.arrowsContainer}`}>
              <div className={`${reviewListStyles.arrow} ${reviewListStyles.arrowLeft}`} onClick={() => sliderRef.current.previous()} ><ChevronLeftIcon /></div>
              <div className={`${reviewListStyles.arrow} ${reviewListStyles.arrowLeft}`} onClick={() => sliderRef.current.next()} ><ChevronRightIcon /></div>
            </div>


          </div>
          {reviews ?
            <Carousel ref={sliderRef} responsive={responsive} swipeable={false} draggable={false} infinite={true} arrows={false}>
              {
                reviews.map((review: reviewInterface, i: number) => {
                  if (review.content != "" && review.rate != "")
                    return (
                      <Review key={i} review={review} />
                    )
                  else return null
                })
              }
            </Carousel> :
            <h1 className={reviewListStyles.errorText}>No Review Data</h1>
          }


        </div>
      </div>
    }
    </>

  )
}

export default ReviewList
