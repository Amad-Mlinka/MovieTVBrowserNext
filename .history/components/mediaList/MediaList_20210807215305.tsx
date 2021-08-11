import Head from 'next/head'

import homeStyles from '../../styles/Home.module.scss'
import Media from "./Media"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { useEffect } from 'react';


export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data)

    return {
        props: { ninjas: data }
    }
}

const MediaList = (props) => {
    console.log(props);

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
        ]
    };
    return (
        <>
            <div className={homeStyles.mediaList} onClick={async () => {
                
                console.log(props)
            }}>
                <Slider {...settings}>
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
