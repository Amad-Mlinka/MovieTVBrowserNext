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
          <div className={homeStyles.media} >
                <div className={homeStyles.media-container-preview}>
                    <div className={homeStyles.media-over}>
                        <img className={homeStyles.media-img-preview} src={media.poster_path != null ? IMAGE_API + media.poster_path : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/488px-No-Image-Placeholder.svg.png"} alt="" />
                        <div className={homeStyles.media-details-preview}>
                            <div className={homeStyles.rating-container}>

                                <p className={homeStyles.rating-preview}>
                                    <ThumbUpAltIcon />
                                    {media.vote_average}/10
                                </p>

                            </div>
                            <div className={homeStyles.genre-preview}>
                              
                            </div>
                            <div className={homeStyles.details-btn-container}>
                                <input type="button" className={homeStyles.details-btn} value="View Details" />
                            </div>
                        </div>
                    </div>
                    <div className={homeStyles.media-title-preview}>
                        <h3>{media.title}</h3>
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
