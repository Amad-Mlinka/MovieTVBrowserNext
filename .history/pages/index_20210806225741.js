import Head from 'next/head'

import homeStyles from '../styles/Home.module.scss'
import Media from "../components/media/Media"



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
          <div className={homeStyles.mediaList}>
            <Media rating={3} title={"The Avengers"} year={"1982"}/>
            <Media rating={3} title={"The Avengers"} year={"1982"}/>
            <Media rating={3} title={"The Avengers"} year={"1982"}/>
            <Media rating={3} title={"The Avengers"} year={"1982"}/>
            <Media rating={3} title={"The Avengers"} year={"1982"}/>
            <Media rating={3} title={"The Avengers"} year={"1982"}/>
            <Media rating={3} title={"The Avengers"} year={"1982"}/>
            <Media rating={3} title={"The Avengers"} year={"1982"}/>
            <Media rating={3} title={"The Avengers"} year={"1982"}/>
            <Media rating={3} title={"The Avengers"} year={"1982"}/>
            <Media rating={3} title={"The Avengers"} year={"1982"}/>
            <Media rating={3} title={"The Avengers"} year={"1982"}/>
            <Media rating={3} title={"The Avengers"} year={"1982"}/>
          </div>
        </div>
        <div className="tvRecommendations">
          <div className="recommendationHeader">
            <span>Movie Recommendations</span>
          </div>
          <div className="recommendationSubHeader">
            <span>Based on your searches</span>
          </div>
        </div>
      </div>
    </>

  )
}
