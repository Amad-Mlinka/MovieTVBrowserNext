import React from 'react'

import mediaStyles from "../../styles/Media.module.scss"
import placeholder from "../../public/placeholder.png"
import { Button, Rating } from '@material-ui/core'
import Image from 'next/image'

const Media = () => {
    return (
        <>
            <div className={mediaStyles.media}>
              <div className={mediaStyles.mediaContainer}>
                <div className={mediaStyles.mediaImageContainer}>
                  <Image className={mediaStyles.mediaImage} src={placeholder} height="200" width="150" />
                </div>
                <div className={mediaStyles.mediaOverlay}>
                  <div className={mediaStyles.mediaRating}>
                    <Rating value={3}></Rating>
                    <span className={`${mediaStyles.mediaRatingText} ${mediaStyles.mediaOverlayItem}`}> 3/5</span>
                  </div>
                  <div className={`${mediaStyles.mediaGenre} ${mediaStyles.mediaOverlayItem}`}>
                    <span className={`${mediaStyles.mediaGenreText}`}> Drama</span>
                  </div>
                  <div className={`${mediaStyles.mediaDetails} ${mediaStyles.mediaOverlayItem}`}>
                    <Button variant="contained" color="success">
                      Success
                    </Button>
                  </div>
                </div>
              </div>
              <div className={mediaStyles.mediaInfo}>
                <div className={mediaStyles.mediaTitle}>
                  <span className={mediaStyles.mediaTitleText}> Placeholder Movie</span>
                </div>
                <div className={mediaStyles.mediaYear}>
                  <span className={mediaStyles.mediaYearText}> Placeholder Year</span>
                </div>
              </div>
            </div>
        </>
    )
}

export default Media
