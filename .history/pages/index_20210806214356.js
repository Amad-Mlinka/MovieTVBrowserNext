import Head from 'next/head'
import Image from 'next/image'
import homeStyles from '../styles/Home.module.scss'
import placeholder from "../public/placeholder.png"
import { Button, Rating } from '@material-ui/core'


export default function Home() {
  return (
    <>
      <header className={homeStyles.header}>
        <div className={homeStyles.heading}>
          Home
        </div>
        <div className={homeStyles.buffer}></div>
      </header>
      <div className={homeStyles.content}>
        <div className="movieRecommendations">
          <div className="recommendationHeader">
            <span>Movie Recommendations</span>
          </div>
          <div className="recommendationSubHeader">
            <span>Based on your searches</span>
          </div>
          <div className={homeStyles.mediaList}>
            <div className={homeStyles.media}>
              <div className={homeStyles.mediaContainer}>
                <Image src={placeholder} height="200" width="150" />
                <div className={homeStyles.mediaOverlay}>
                  <div className={homeStyles.mediaRating}>
                    <span className={homeStyles.mediaRatingText}> Placeholder Movie</span>
                  </div>
                  <div className={homeStyles.mediaGenre}>
                    <span className={homeStyles.mediaGenreText}> Placeholder Movie</span>
                  </div>
                  <div className={homeStyles.mediaDetails}>
                    <Button color="success">"Details"</Button>
                  </div>

                </div>
              </div>
              <div className={homeStyles.mediaTitle}>
                <span className={homeStyles.mediaTitleText}> Placeholder Movie</span>
              </div>
              <div className={homeStyles.mediaYear}>
                <span className={homeStyles.mediaYearText}> Placeholder Year</span>
              </div>
            </div>
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
