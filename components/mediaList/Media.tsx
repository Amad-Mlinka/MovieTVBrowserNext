/*Imports */
import Image from "next/image"

/*Material components*/
import { Button, Link, Rating } from '@material-ui/core'

/*Icons*/

/*Import Plugins*/

/*Styles*/
import mediaStyles from "../../styles/MediaList/Media.module.scss"
import { genreInterface } from "../../interfaces/mediaInterface"

/*Interfaces */
interface mediaInterface {
  id: number,
  rating: number,
  title: string,
  year: string,
  image: string,
  overlay: boolean,
  type: string,
  genres: genreInterface[]
}



const Media = (props: mediaInterface) => {
  console.log(props.genres && props.genres)
  const imageUrl = `https://image.tmdb.org/t/p/original/${props.image}`
  const placeholderUrl = "/placeholder.png"
  return (
    <>
      <div className={mediaStyles.media}>
        <Link href={`/${props.type}/details?id=${props.id}`}>
          <div className={mediaStyles.mediaContainer}>
            <div className={mediaStyles.mediaImageContainer}>
              <Image className={mediaStyles.mediaImage} alt="Media image" src={`${props.image ? imageUrl : placeholderUrl}`} width="200" height="300" />
            </div>
            {props.overlay &&
              <div className={mediaStyles.mediaOverlay}>
                <div className={mediaStyles.mediaRating}>
                  <Rating readOnly value={props.rating} precision={0.1}></Rating>
                  <span className={`${mediaStyles.mediaRatingText} ${mediaStyles.mediaOverlayItem}`}> {props.rating}/5</span>
                </div>
                <div className={`${mediaStyles.mediaGenre} ${mediaStyles.mediaOverlayItem}`}>

                  {props.genres.slice(0,3).map((genre: genreInterface,i:number) => (
                    <span key={i} className={`${mediaStyles.mediaGenreText}`}>{genre.name} </span>
                  ))}

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
