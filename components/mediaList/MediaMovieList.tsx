/*Imports */
import Slider from "react-slick";
import { useEffect, useRef } from 'react';
import Media from "./Media"

/*Material components*/
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

/*Icons*/

/*Import Plugins*/

/*Styles*/
import mediaListStyles from '../../styles/MediaList.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/*Interfaces */
import { movieInterface} from '../../interfaces/mediaInterface';


interface movieListInterface {
    mediaType: string,
    heading: string,
    subHeading: string,
    media: movieInterface[],
    overlay:boolean
}


 export const MediaList = ({ mediaType, media, heading, subHeading, overlay }: movieListInterface) => {
    const sliderRef = useRef<any>(<Slider/>)

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
                            <div className={`${mediaListStyles.arrow} ${mediaListStyles.arrowLeft}`} onClick={() => {slideNext(); console.log(sliderRef)}} ><ChevronRightIcon /></div>
                        </div>


                    </div>
                    {
                        mediaType == "movie" && <Slider {...settings} ref={sliderRef}>
                            {media.map((media: movieInterface) => (
                                <Media key={media.id} overlay={overlay} id={media.id} image={media.poster_path} rating={Math.round((media.vote_average / 2) * 10) / 10} title={media.title} year={media.release_date} />
                            ))}


                        </Slider>
                    }


                </div>
            </div>
        </>

    )
}



export default MediaList
