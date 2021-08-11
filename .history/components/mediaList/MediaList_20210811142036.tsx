import Head from 'next/head'

import mediaListStyles from '../../styles/MediaList.module.scss'
import Media from "./Media"



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { useEffect, useRef } from 'react';
import { keys } from 'ts-transformer-keys';



import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { movieInterface, tvInterface } from '../../interfaces/mediaInterface';


enum mediaType {
    movie = "movie",
    tv = "tv"
}

interface mediaListInterface {
    mediaType: mediaType,
    heading: string,
    subHeading: string,
    media: (movieInterface | tvInterface)[]
}
//mediaType="movie" media={movies.results} heading="Movies" subHeading="Discover new Movies picked just for you" 

const MediaList = ({ mediaType, media, heading, subHeading }: mediaListInterface) => {
    type K1 = keyof mediaListInterface;
    console.log(typeof K1)
    const sliderRef = useRef(null)

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
                    slidesToShow: 6,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1424,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
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
        ]
    };
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
                            <div className={`${mediaListStyles.arrow} ${mediaListStyles.arrowLeft}`} onClick={() => slidePrev()} ><ChevronLeftIcon /></div>
                            <div className={`${mediaListStyles.arrow} ${mediaListStyles.arrowLeft}`} onClick={() => slideNext()} ><ChevronRightIcon /></div>
                        </div>


                    </div>
                    {
                        mediaType == "movie" && <Slider {...settings} ref={sliderRef}>
                            {media.map((media) => (
                                <Media key={media.id} className={mediaListStyles.mediaItem} id={media.id} image={media.poster_path} rating={Math.round((media.vote_average / 2) * 10) / 10} title={media.title} year={media.release_date} />
                            ))}


                        </Slider>
                    }
                    {
                        mediaType == "tv" && <Slider {...settings} ref={sliderRef}>
                            {media.map((media) => (
                                <Media key={media.id} className={mediaListStyles.mediaItem} id={media.id} image={media.poster_path} rating={Math.round((media.vote_average / 2) * 10) / 10} title={media.name} year={media.first_air_date} />
                            ))}


                        </Slider>
                    }


                </div>
            </div>
        </>

    )
}



export default MediaList
