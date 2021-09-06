/*Imports */
import Slider from "react-slick";
import { useEffect, useRef } from 'react';
import Media from "./Media"
import useSWR from "swr";

/*Material components*/
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

/*Icons*/

/*Import Plugins*/

/*Styles*/
import mediaListStyles from '../../styles/MediaList/MediaList.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/*Interfaces */
import { Movie } from '../../interfaces/movieListInterface';
import { data } from "jquery";
import Loading from "../loading/Loading";
import fetcher from "../fetcher/Fetcher";


interface propsInterface {
    mediaType: string,
    heading: string,
    subHeading: string,
    media: Movie[] | null | undefined,
    overlay: boolean
}




export const MovieMediaList = ({ media, heading, subHeading, overlay }: propsInterface) => {
    const sliderRef = useRef<any>(<Slider />)

    const slidePrev = () => {
        sliderRef.current.slickPrev();
    }
    const slideNext = () => {
        sliderRef.current.slickNext();
    }

    const settings = {
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
              slidesToShow: media!=null ? (media.length - 1 < 8 ? media.length : 8) : 0,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 1860,
            settings: {
              slidesToShow: media!=null ? ( media.length - 1 < 6 ? media.length : 6) : 0,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 1424,
            settings: {
              slidesToShow: media!=null ? ( media.length - 1 < 5 ? media.length : 5) : 0,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: media!=null ? ( media.length - 1 < 4 ? media.length : 4) : 0,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 920,
            settings: {
              slidesToShow: media!=null ? ( media.length - 1 < 3 ? media.length : 3) : 0,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: media!=null ? ( media.length - 1 < 2 ? media.length : 2) : 0,
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
                        <Slider {...settings} ref={sliderRef}>
                            { media &&
                                media.map((movie: Movie) => (
                                    <Media key={movie.id} movie={movie} overlay={overlay} />
                                )
                                )}


                        </Slider>
                    }


                </div>
            </div>
        </>

    )


}

