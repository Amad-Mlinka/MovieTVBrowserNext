import Head from 'next/head'
import Image from 'next/image'
import homeStyles from '../styles/Home.module.scss'
import placeholder from "../public/placeholder.png"

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
                <Image className={homeStyles.mediaImg} src="" alt="" />
                <div className={homeStyles.rating}>

                </div>
                <div className={homeStyles.mediaGenre}>

                </div>
                <div className={homeStyles.mediaDetailsButton}>

                </div>

              </div>
              <div className={homeStyles.mediaTitle}>

              </div>
              <div className={homeStyles.mediaYear}>

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
