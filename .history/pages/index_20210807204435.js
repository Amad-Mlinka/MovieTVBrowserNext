import Head from 'next/head'

import homeStyles from '../styles/Home.module.scss'
import MediaList from "../components/mediaList/MediaList"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";



export default function Home() {
  return (
    <>
      <header className={homeStyles.header}>
        <div className={homeStyles.heading}>
          Home
        </div>

      </header>
      <div className={homeStyles.buffer}></div>
      <div className={homeStyles.content}>
        <div className="movieRecommendations">
          <div className="recommendationHeader">
            <span>Movie Recommendations</span>
          </div>
          <div className="recommendationSubHeader">
            <span>Based on your searches</span>
          </div>
          <MediaList/>
        </div>
        <div className="tvRecommendations">
          <div className="recommendationHeader">
            <span>Movie Recommendations</span>
          </div>
          <div className="recommendationSubHeader">
            <span>Based on your searches</span>
          </div>
          <MediaList/>
        </div>
      </div>
    </>

  )
}
