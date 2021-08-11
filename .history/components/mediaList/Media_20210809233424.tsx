import React from 'react'

import mediaStyles from "../../styles/Media.module.scss"
import placeholder from "../../public/placeholder.png"
import { Button, Link, Rating } from '@material-ui/core'

const Media = (props) => {
  const imageUrl = `https://image.tmdb.org/t/p/w720/${props.image}`
  const placeholderUrl = "placeholder.png"
  return (
    <>
      <div className={mediaStyles.media}>
        <Link href={`/movies/${props.id}`}>
          <div className={mediaStyles.mediaContainer}>
            <div className={mediaStyles.mediaImageContainer}>
              <img className={mediaStyles.mediaImage} src={`${props.image ? imageUrl : placeholderUrl}`} width="200" height="300" />
            </div>
            <div className={mediaStyles.mediaOverlay}>
              <div className={mediaStyles.mediaRating}>
                <Rating readOnly value={props.rating}></Rating>
                <span className={`${mediaStyles.mediaRatingText} ${mediaStyles.mediaOverlayItem}`}> {props.rating}/5</span>
              </div>
              <div className={`${mediaStyles.mediaGenre} ${mediaStyles.mediaOverlayItem}`}>
                <span className={`${mediaStyles.mediaGenreText}`}> Drama</span>
              </div>
              <div className={`${mediaStyles.mediaDetails} ${mediaStyles.mediaOverlayItem}`}>
                <Button variant="contained" color="success">
                  Details
                </Button>
              </div>
            </div>

          </div>
          <div className={mediaStyles.mediaInfo}>
            <div className={mediaStyles.mediaTitle}>
              <span className={mediaStyles.mediaTitleText}> {props.title}</span>
            </div>
            <div className={mediaStyles.mediaYear}>
              <span className={mediaStyles.mediaYearText}> {props.year.substring(0, 4)}</span>
            </div>
          </div>
        </Link>


      </div>

    </>
  )
}

export default Media
