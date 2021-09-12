import React, { useRef } from 'react'
import Review from './Review'
import reviewListStyles from "../../styles/ReviewList/ReviewList.module.scss"

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { reviewInterface } from '../../interfaces/reviewInterface';
import Carousel, { ResponsiveType } from 'react-multi-carousel';
import { responsiveSettings } from '../slider/SliderSettings';
import 'react-multi-carousel/lib/styles.css';
import { localeInterface } from '../../interfaces/localeInterface';

interface propInterface {
  reviews: reviewInterface[] | null | undefined;
  locale:localeInterface
}


const ReviewList = ({reviews,locale}: propInterface) => {

  return (
    <>{
      <div className={reviewListStyles.reviewList} >
        <div className={reviewListStyles.content}>
          <div className={reviewListStyles.header}>
            <div className={reviewListStyles.headerContainer}>
              <div className={reviewListStyles.heading}>
                <span>{locale.reviewsTitle}</span>
              </div>
              <div className={reviewListStyles.subHeading}>
                <span>{locale.reviewSub}</span>
              </div>
            </div>
          </div>
          {reviews ?


            reviews.map((review: reviewInterface, i: number) => {
              if (review.content != "" && review.rate != "")
                return (
                  <Review key={i} review={review} />
                )
              else return null
            })

            :
            <h1 className={reviewListStyles.errorText}>No Review Data</h1>
          }


        </div>
      </div>
    }
    </>

  )
}

export default ReviewList
