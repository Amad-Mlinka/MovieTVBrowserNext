import Head from 'next/head'

import homeStyles from '../styles/Home.module.scss'
import MediaList from "../components/mediaList/MediaList"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export const getStaticProps = async () => {
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.apiKey}>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
  const data = await res.json();

  return {
      props: { ninjas: data }
  }
}



export default function Home({ninjas}) {
  console.log(process.env.apiKey)
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
          <MediaList />
        </div>
        <div className="tvRecommendations">
          <div className="recommendationHeader">
            <span>Movie Recommendations</span>
          </div>
          <div className="recommendationSubHeader">
            <span>Based on your searches</span>
          </div>
          <MediaList />
        </div>
        <div className="tvRecommendations">
          <div className="recommendationHeader">
            <span>Movie Recommendations</span>
          </div>
          <div className="recommendationSubHeader">
            <span>Based on your searches</span>
          </div>
          <MediaList />
        </div>
      </div>
    </>

  )
}
