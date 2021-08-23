import React, { useRef } from 'react'
import Slider from 'react-slick'
import { reviewInterface } from '../../interfaces/mediaInterface' 
import Review from './Review'
import reviewListStyles from "../../styles/ReviewList.module.scss"

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

interface propInterface {
  reviews: reviewInterface[]
}


const ReviewList = (props: propInterface) => {
  const sliderRef = useRef<any>(<Slider />)

  const slidePrev = () => {
    sliderRef.current.slickPrev();
  }
  const slideNext = () => {
    sliderRef.current.slickNext();
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 3560,
        settings: {
          slidesToShow: props.reviews.length - 1 < 8 ? props.reviews.length : 8,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1860,
        settings: {
          slidesToShow: props.reviews.length - 1 < 6 ? props.reviews.length : 6,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: props.reviews.length - 1 < 5 ? props.reviews.length : 5,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: props.reviews.length - 1 < 4 ? props.reviews.length : 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: props.reviews.length - 1 < 3 ? props.reviews.length : 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: props.reviews.length - 1 < 2 ? props.reviews.length : 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (
    <>
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
              <div className={`${reviewListStyles.arrow} ${reviewListStyles.arrowLeft}`} onClick={() => slidePrev()} ><ChevronLeftIcon /></div>
              <div className={`${reviewListStyles.arrow} ${reviewListStyles.arrowLeft}`} onClick={() => slideNext()} ><ChevronRightIcon /></div>
            </div>


          </div>
          {
            <Slider {...settings} ref={sliderRef}>
              {
                props.reviews.map((review: reviewInterface) => (
                  <Review key={review.id} review={review} />
                ))
              }
            </Slider>
          }


        </div>
      </div>

    </>

  )
}

export default ReviewList
