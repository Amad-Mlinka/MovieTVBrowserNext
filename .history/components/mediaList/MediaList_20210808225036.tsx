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
        slidesToShow: 6,
        slidesToScroll: 1,
        variableWidth: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 3560,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1860,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1424,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
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
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    };
    return (
        <>
            <div className={mediaListStyles.mediaList} >
                <div className={mediaListStyles.content}>
                    <div className={mediaListStyles.header}>
                        <div className={mediaListStyles.headerContainer}>
                            <div className={mediaListStyles.heading}>
                                <span>Movie Recommendations</span>
                            </div>
                            <div className={mediaListStyles.spacer}>
                                -
                            </div>
                            <div className={mediaListStyles.subHeading}>
                                <span>Based on your searches</span>
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
                        {props.mediamap((media) => (
                            <Media key={props.mediaid} className={mediaListStyles.mediaItem} id={props.mediaid} image={props.mediaposter_path} rating={props.mediavote_average / 5} title={props.mediatitle} year={props.mediarelease_date} />
                        ))}


                    </Slider>
                </div>
            </div>
        </>

    )
}



export default MediaList
