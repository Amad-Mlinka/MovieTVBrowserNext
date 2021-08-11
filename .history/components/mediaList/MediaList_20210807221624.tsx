import Head from 'next/head'

import homeStyles from '../../styles/Home.module.scss'
import Media from "./Media"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { useEffect } from 'react';




const MediaList = ({ media }) => {
    console.log(media)

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
            <div className={homeStyles.mediaList} >
            <Slider {...settings}>
                {media.map((media) => (
                    <Media key={media.id} className={homeStyles.mediaItem} rating={media.vote_average/5} title={media.title} year={media.release_date} />
                ))}
                
                    <Media className={homeStyles.mediaItem} rating={3} title={"The Avengers"} year={"1982"} />
                    <Media className={homeStyles.mediaItem} rating={3} title={"The Avengers"} year={"1982"} />
                    <Media className={homeStyles.mediaItem} rating={3} title={"The Avengers"} year={"1982"} />
                    <Media className={homeStyles.mediaItem} rating={3} title={"The Avengers"} year={"1982"} />
                    <Media className={homeStyles.mediaItem} rating={3} title={"The Avengers"} year={"1982"} />
                    <Media className={homeStyles.mediaItem} rating={3} title={"The Avengers"} year={"1982"} />
                    <Media className={homeStyles.mediaItem} rating={3} title={"The Avengers"} year={"1982"} />
                    <Media className={homeStyles.mediaItem} rating={3} title={"The Avengers"} year={"1982"} />
                    <Media className={homeStyles.mediaItem} rating={3} title={"The Avengers"} year={"1982"} />
                    <Media className={homeStyles.mediaItem} rating={3} title={"The Avengers"} year={"1982"} />
                    <Media className={homeStyles.mediaItem} rating={3} title={"The Avengers"} year={"1982"} />
                    <Media className={homeStyles.mediaItem} rating={3} title={"The Avengers"} year={"1982"} />
                    <Media className={homeStyles.mediaItem} rating={3} title={"The Avengers"} year={"1982"} />
                    <Media className={homeStyles.mediaItem} rating={3} title={"The Avengers"} year={"1982"} />
                </Slider>

            </div>
        </>

    )
}



export default MediaList
