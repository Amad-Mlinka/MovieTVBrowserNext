import Head from 'next/head'

import homeStyles from '../../styles/Home.module.scss'
import Media from "./Media"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";



const MediaList = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
      };
    return (
        <div className={homeStyles.mediaList}>
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
    )
}

export default MediaList
