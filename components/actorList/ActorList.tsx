/*Imports */
import React, { useRef } from 'react'
import Slider from "react-slick";
import Actor from './Actor';

/*Material components*/
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

/*Icons*/

/*Import Plugins*/

/*Styles*/
import actorListStyles from '../../styles/ActorList.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/*Interfaces */
import { ActorP } from '../../interfaces/peopleInterface';

interface actorListProps {
    actors: ActorP[]
}


const ActorList = (props: actorListProps) => {

    const actors = props.actors
    const sliderRef = useRef<any>(<Slider />)

    const slidePrev = () => {
        sliderRef.current.slickPrev();
    }
    const slideNext = () => {
        sliderRef.current.slickNext();
    }
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 3560,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1860,
                settings: {
                    slidesToShow: actors.length-1 <= 6 ? actors.length : 6,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1424,
                settings: {
                    slidesToShow: actors.length-1 <= 5 ? actors.length :  5,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: actors.length-1 <= 4 ? actors.length :  4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: actors.length-1 <= 3 ? actors.length :  3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: actors.length-1 <= 2 ? actors.length :  2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: actors.length-1 <= 1 ? actors.length :  1,
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
                            <div className={`${actorListStyles.arrow} ${actorListStyles.arrowLeft}`} onClick={() => slidePrev()} ><ChevronLeftIcon /></div>
                            <div className={`${actorListStyles.arrow} ${actorListStyles.arrowLeft}`} onClick={() => { slideNext(); console.log(sliderRef) }} ><ChevronRightIcon /></div>
                        </div>


                    </div>

                    {
                        <Slider {...settings} ref={sliderRef}>
                            {
                                actors.map((actor: ActorP) => 
                                    (
                                        <Actor key={actor.id} {...actor} />

                                    )
                                )
                            }

                        </Slider>
                    }

                </div>
            </div>
        </>
    )
}

export default ActorList
