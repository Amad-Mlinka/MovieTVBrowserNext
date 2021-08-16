/*Imports */
import Image from "next/image"

/*Material components*/
import { Button, Link, Rating } from '@material-ui/core'

/*Icons*/

/*Import Plugins*/

/*Styles*/
import mediaStyles from "../../styles/Media.module.scss"

/*Interfaces */
interface mediaInterface {
  id: number,
  rating: number,
  title: string,
  year: string,
  image: string,
  overlay: boolean,
  type: string
}



const Media = (props: mediaInterface) => {
  const imageUrl = `https://image.tmdb.org/t/p/original/${props.image}`
  const placeholderUrl = "/placeholder.png"
  return (
    <>
      <div className={mediaStyles.media}>
        <Link href={`/${props.type}/${props.id}`}>
          <div className={mediaStyles.mediaContainer}>
            <div className={mediaStyles.mediaImageContainer}>
              <Image className={mediaStyles.mediaImage} alt="Media image" src={`${props.image ? imageUrl : placeholderUrl}`} width="200" height="300" />
            </div>
            {props.overlay &&
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
            }
          </div>
          {props.overlay &&
            <div className={mediaStyles.mediaInfo}>
              <div className={mediaStyles.mediaTitle}>
                <span className={mediaStyles.mediaTitleText}> {props.title}</span>
              </div>
              <div className={mediaStyles.mediaYear}>
                <span className={mediaStyles.mediaYearText}> {props.year ? props.year.substring(0, 4) : "Unknown"}</span>
              </div>
            </div>}
        </Link>
      </div>
    </>
  )
}

export default Media
