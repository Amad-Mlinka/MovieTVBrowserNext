import Head from 'next/head'

import mediaListStyles from '../../styles/mediaList.module.scss'
import Media from "./Media"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { useEffect } from 'react';


import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';




const MediaList = ({ media }) => {
    console.log(media)

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 9,
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
                <div className="arrows">
                    <div className="arrowContainer">
                        <div className="leftArrow"><ChevronLeftIcon/></div>
                        <div className="rightArrow"><ChevronRightIcon/></div>
                    </div>
                </div>
                <Slider {...settings}>
                    {media.map((media) => (
                        <Media key={media.id} className={mediaListStyles.mediaItem} id={media.id} image={media.poster_path} rating={media.vote_average / 5} title={media.title} year={media.release_date} />
                    ))}


                </Slider>

            </div>
        </>

    )
}



export default MediaList
