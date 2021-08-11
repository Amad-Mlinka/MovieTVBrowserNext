import Head from 'next/head'
import Image from 'next/image'
import homeStyles from '../styles/Home.module.scss'
import placeholder from "../public/placeholder.png"
//import { Button, Rating } from '@materialui/core'


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
          <div className={homeStyles.media} >
                <div className={homeStyles.mediaContainerPreview}>
                    <div className={homeStyles.mediaOver}>
                        <Image className={homeStyles.mediaImgPreview}  src={placeholder} alt="" />
                        <div className={homeStyles.mediaDetailsPreview}>
                            <div className={homeStyles.ratingContainer}>

                                <p className={homeStyles.ratingPreview}>
                                    
                                   
                                </p>

                            </div>
                            <div className={homeStyles.genrePreview}>
                              
                            </div>
                            <div className={homeStyles.detailsBtnContainer}>
                                <input type="button" className={homeStyles.detailsBtn} value="View Details" />
                            </div>
                        </div>
                    </div>
                    <div className={homeStyles.mediaTitlePreview}>
                    
                    </div>
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
