import Head from 'next/head'

import mediaListStyles from '../../styles/MediaList.module.scss'
import Media from "./Media"
import { LeftArrow, RightArrow } from '../arrows/Arrows';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { useEffect, useRef } from 'react';
import $ from "jquery"


import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';




const MediaList = (props) => {
    const sliderRef = useRef(null)
    console.log(sliderRef)

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
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: false,
        arrows: false,
        /*responsive: [
            {
                breakpoint: 3560,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1860,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1424,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
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
        ]*/
    };
    return (
        <>
            <div className={mediaListStyles.mediaList} >
                <div className={mediaListStyles.content}>
                    <div className={mediaListStyles.header}>
                        <div className={mediaListStyles.headerContainer}>
                            <div className={mediaListStyles.heading}>
                                <span>{props.heading}</span>
                            </div>
                            <div className={mediaListStyles.subHeading}>
                                <span>{props.subHeading}</span>
                            </div>
                        </div>

                        <div className={mediaListStyles.arrows}>
                            <div className={mediaListStyles.arrowsContainer}>
                                <div className={`${mediaListStyles.arrow} ${mediaListStyles.arrowLeft}`} onClick={() => slidePrev()} ><ChevronLeftIcon /></div>
                                <div className={`${mediaListStyles.arrow} ${mediaListStyles.arrowLeft}`} onClick={() => slideNext()} ><ChevronRightIcon /></div>
                            </div>
                        </div>

                    </div>


                    <Slider {...settings} ref={sliderRef}>
                        {props.media.map((media) => (
                            <Media key={media.id} className={mediaListStyles.mediaItem} id={media.id} image={media.poster_path} rating={Math.round((media.vote_average / 2)*10)/10} title={props.mediaType === "movie" ? media.title : media.name} year={props.mediaType === "movie" ? media.release_date : media.first_air_date} />
                        ))}


                    </Slider>
                </div>
            </div>
        </>

    )
}



export default MediaList
