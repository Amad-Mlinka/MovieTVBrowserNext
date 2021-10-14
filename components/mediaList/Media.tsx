/*Imports */
import Image from "next/image"

/*Material components*/
import { Button, Link, Rating } from '@material-ui/core'

/*Icons*/

/*Import Plugins*/

/*Styles*/
import mediaStyles from "../../styles/MediaList/Media.module.scss"
import { Movie } from "../../interfaces/movieListInterface"
import { useRouter } from "next/router"
import { localeInterface } from "../../interfaces/localeInterface"

/*Interfaces */
interface propInterface {
  movie: Movie,
  overlay: boolean,
}




const Media = (props: propInterface) => {
  const movie = props.movie
  const placeholderUrl = "/placeholder.png"
  const router = useRouter();
  const { locale } = router;
  const t: any = locale;
  const image= movie.medium_cover_image || placeholderUrl
  return (
    <>
      <div className={mediaStyles.media}>
        <Link href={`${t}/movies/details?id=${movie.id}`}>
          <div className={mediaStyles.mediaContainer}>
            <div className={mediaStyles.mediaImageContainer}>
              {<Image alt={movie.title + " image"} layout={"intrinsic"} className={mediaStyles.mediaImage} src={image} width="200" height="300" />}
            </div>
            {props.overlay &&
              <div className={mediaStyles.mediaOverlay}>
                <div className={mediaStyles.mediaRating}>
                  <Rating readOnly value={movie.rating ? movie.rating / 2 : 0} precision={0.1}></Rating>
                  <span className={`${mediaStyles.mediaRatingText} ${mediaStyles.mediaOverlayItem}`}> {movie.rating ? movie.rating : 0}/10</span>
                </div>
                <div className={`${mediaStyles.mediaGenre} ${mediaStyles.mediaOverlayItem}`}>

                  {movie.genres && movie.genres.slice(0, 3).map((genre: string, i: number) => (
                    <span key={i} className={`${mediaStyles.mediaGenreText}`}>{genre} </span>
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
                <span className={mediaStyles.mediaTitleText}> {movie.title}</span>
              </div>
              <div className={mediaStyles.mediaYear}>
                <span className={mediaStyles.mediaYearText}> {movie.year ? movie.year : "Unknown"}</span>
              </div>
            </div>}
        </Link>
      </div>
    </>
  )
}

export default Media
