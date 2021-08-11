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




const MediaList = ({ media }) => {
    const sliderRef = useRef(null)
    console.log(sliderRef)

    const slidePrev = () => {        
        sliderRef.current.slickNext();
    }
    const slideNext = () => {
        sliderRef.current.slickNext();
    }




    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
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
                <div className={mediaListStyles.arrows}>
                    <div className={mediaListStyles.arrowsContainer}>
                    <div className={`${mediaListStyles.arrow} ${mediaListStyles.arrowLeft}`} onClick={()=>slidePrev()} ><ChevronLeftIcon /></div>
                    <div className={`${mediaListStyles.arrow} ${mediaListStyles.arrowLeft}`} onClick={()=>slideNext()} ><ChevronRightIcon /></div>
                    </div>
                </div>
                <Slider {...settings} ref={sliderRef}>
                    {media.map((media) => (
                        <Media key={media.id} className={mediaListStyles.mediaItem} id={media.id} image={media.poster_path} rating={media.vote_average / 5} title={media.title} year={media.release_date} />
                    ))}


                </Slider>

            </div>
        </>

    )
}



export default MediaList
