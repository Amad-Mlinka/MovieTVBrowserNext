import React from 'react'

import mediaStyles from "../../styles/Media.module.scss"
import placeholder from "../../public/placeholder.png"
import { Button, Rating } from '@material-ui/core'
import Image from 'next/image'

const Media = (props) => {
  const imageUrl=`https://image.tmdb.org/t/p/original/${props.image}`
    return (
        <>
            <div className={mediaStyles.media}>
              <div className={mediaStyles.mediaContainer}>
                <div className={mediaStyles.mediaImageContainer}>
                  <img className={mediaStyles.mediaImage} src={`${imageUrl|| placeholder}`} height="200" width="150" />
                </div>
                <div className={mediaStyles.mediaOverlay}>
                  <div className={mediaStyles.mediaRating}>
                    <Rating value={props.rating}></Rating>
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
                  <span className={mediaStyles.mediaYearText}> {props.year}</span>
                </div>
              </div>
            </div>
        </>
    )
}

export default Media
