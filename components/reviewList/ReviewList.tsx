import React, { useRef } from 'react'
import Slider from 'react-slick'
import Review from './Review'
import reviewListStyles from "../../styles/ReviewList/ReviewList.module.scss"

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { reviewInterface } from '../../interfaces/reviewInterface';

interface propInterface {
  reviews: reviewInterface[] | null | undefined;
}


const ReviewList = (props: propInterface) => {
  const reviews=props.reviews
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
          slidesToShow: reviews!=null ? (reviews.length - 1 < 8 ? reviews.length : 8) : 0,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1860,
        settings: {
          slidesToShow: reviews!=null ? ( reviews.length - 1 < 6 ? reviews.length : 6) : 0,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: reviews!=null ? ( reviews.length - 1 < 5 ? reviews.length : 5) : 0,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: reviews!=null ? ( reviews.length - 1 < 4 ? reviews.length : 4) : 0,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: reviews!=null ? ( reviews.length - 1 < 3 ? reviews.length : 3) : 0,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: reviews!=null ? ( reviews.length - 1 < 2 ? reviews.length : 2) : 0,
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
              <div className={`${reviewListStyles.arrow} ${reviewListStyles.arrowLeft}`} onClick={() => slidePrev()} ><ChevronLeftIcon /></div>
              <div className={`${reviewListStyles.arrow} ${reviewListStyles.arrowLeft}`} onClick={() => slideNext()} ><ChevronRightIcon /></div>
            </div>


          </div>
          {reviews ? 
            <Slider {...settings} ref={sliderRef}>
              {
                reviews.map((review: reviewInterface, i: number) => {
                  if (review.content != "" && review.rate != "")
                    return (
                      <Review key={i} review={review} />
                    )
                    else return null
                })
              }
            </Slider>:
             <h1 className={reviewListStyles.errorText}>No Review Data</h1>
          }


        </div>
      </div>
    }
    </>

  )
}

export default ReviewList
