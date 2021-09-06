/*Imports */
import React, { useRef } from 'react'
import Slider from "react-slick";
import Actor from './Actor';
import { settings } from "../slider/SliderSettings";

/*Material components*/
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

/*Icons*/

/*Import Plugins*/

/*Styles*/
import actorListStyles from '../../styles/ActorList/ActorList.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { actorInterface } from '../../interfaces/movieInterface';


/*Interfaces */

interface actorListProps {
    actors: actorInterface[] | null | undefined
}


const ActorList = (props: actorListProps) => {
    const actors =props.actors
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
              slidesToShow: actors!=null ? (actors.length - 1 < 8 ? actors.length : 8) : 0,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 1860,
            settings: {
              slidesToShow: actors!=null ? ( actors.length - 1 < 6 ? actors.length : 6) : 0,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 1424,
            settings: {
              slidesToShow: actors!=null ? ( actors.length - 1 < 5 ? actors.length : 5) : 0,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: actors!=null ? ( actors.length - 1 < 4 ? actors.length : 4) : 0,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 920,
            settings: {
              slidesToShow: actors!=null ? ( actors.length - 1 < 3 ? actors.length : 3) : 0,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: actors!=null ? ( actors.length - 1 < 2 ? actors.length : 2) : 0,
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
            <div className={actorListStyles.actorList} >
                <div className={actorListStyles.content}>
                    <div className={actorListStyles.header}>
                        <div className={actorListStyles.headerContainer}>
                            <div className={actorListStyles.heading}>
                                <span>Actors</span>
                            </div>
                            <div className={actorListStyles.subHeading}>
                                <span>In this movie</span>
                            </div>
                        </div>

                        <div className={`${actorListStyles.arrowsContainer}`}>
                            <div className={`${actorListStyles.arrow} ${actorListStyles.arrowLeft}`} onClick={() => {if(actors) slidePrev()}} ><ChevronLeftIcon /></div>
                            <div className={`${actorListStyles.arrow} ${actorListStyles.arrowLeft}`} onClick={() => {if(actors) slideNext()}} ><ChevronRightIcon /></div>
                        </div>


                    </div>

                    {
                      actors ?
                        <Slider {...settings} ref={sliderRef}>
                            {actors &&
                                actors.map((actor: actorInterface) => 
                                    (
                                        <Actor key={actor.imdb_code} {...actor} />

                                    )
                                )
                            }

                        </Slider>
                        : <h1 className={actorListStyles.errorText}>No Cast Data</h1>
                    }

                </div>
            </div>
        </>
    )
}

export default ActorList
