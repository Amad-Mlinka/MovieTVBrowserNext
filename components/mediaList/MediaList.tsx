/*Imports */
//import Slider from "react-slick";
import Carousel, { ResponsiveType } from 'react-multi-carousel';
import React, { useRef } from 'react';
import Media from "./Media"

/*Material components*/
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

/*Icons*/

/*Import Plugins*/

/*Styles*/
import mediaListStyles from '../../styles/MediaList/MediaList.module.scss'

import 'react-multi-carousel/lib/styles.css';

/*Interfaces */
import { Movie } from '../../interfaces/movieListInterface';
import { responsiveSettings } from '../slider/SliderSettings';


interface propsInterface {
  heading: string,
  subHeading: string,
  media: Movie[] | null | undefined,
  overlay: boolean
}


export const MovieMediaList = ({ media, heading, subHeading, overlay }: propsInterface) => {

  const movies=media ? media : []

  const responsive: ResponsiveType = responsiveSettings(movies.length)
  const sliderRef = useRef<any>(<Carousel responsive={responsive} > </Carousel>)




  return (
    <>
      <div className={mediaListStyles.mediaList} >
        <div className={mediaListStyles.content}>
          <div className={mediaListStyles.header}>
            <div className={mediaListStyles.headerContainer}>
              <div className={mediaListStyles.heading}>
                <span>{heading}</span>
              </div>
              <div className={mediaListStyles.subHeading}>
                <span>{subHeading}</span>
              </div>
            </div>

            <div className={`${mediaListStyles.arrowsContainer}`}>
              <div className={`${mediaListStyles.arrowsContainer}`}>
                <div className={`${mediaListStyles.arrow} ${mediaListStyles.arrowLeft}`} onClick={() => sliderRef.current.previous()}><ChevronLeftIcon /></div>
                <div className={`${mediaListStyles.arrow} ${mediaListStyles.arrowRight}`} onClick={() => sliderRef.current.next()}><ChevronRightIcon /></div>
              </div>
            </div>


          </div>
          <Carousel ref={sliderRef} responsive={responsive} swipeable={true} draggable={true} infinite={true} arrows={false}>
            {media &&
              media.map((movie: Movie) => (
                <Media key={movie.id} movie={movie} overlay={overlay} />
              )
              )

            }
          </Carousel>



        </div>
      </div>
    </>

  )


}

