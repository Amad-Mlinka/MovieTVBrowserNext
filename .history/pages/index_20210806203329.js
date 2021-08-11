import Head from 'next/head'
import Image from 'next/image'
import homeStyles from '../styles/Home.module.scss'
import placeholder from "../public/placeholder.png"
import { Button,Rating } from '@material-ui/core'


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
              <div className={homeStyles.mediaImage}>
                <Image className={homeStyles.mediaImg} src={placeholder} alt="placeholder" width="150" height="200" />
                <div className={homeStyles.imageOverlay}>
                  <div className={`${homeStyles.rating} ${homeStyles.imageOverlayItem}`}>
                    <Rating read-only value="3"/>
                    3/5
                  </div>
                  <div className={`${homeStyles.mediaGenre} ${homeStyles.imageOverlayItem}`}>
                    Action
                    Drama
                  </div>
                  <div className={`${homeStyles.mediaDetailsButton}  ${homeStyles.imageOverlayItem}`}>
                    <Button variant="contained" color="success">Details</Button>
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
