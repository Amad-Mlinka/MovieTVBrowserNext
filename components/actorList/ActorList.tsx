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
