/*Imports */
import React, { useContext, useEffect } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router'
import ActorList from '../../components/actorList/ActorList';
import { SRLWrapper } from "simple-react-lightbox";
import ReactPlayer from 'react-player'

/*Material components*/
import { Rating } from '@material-ui/core'

/*Icons*/

/*Import Plugins*/

/*Styles*/
import movieDetailsStyles from "../../styles/MovieDetail.module.scss"

/*Interfaces */

import ReviewList from '../../components/reviewList/ReviewList';
import { MovieData } from '../../interfaces/movieInterface';
import { Reviews } from '../../interfaces/reviewInterface';
import { imageInterface, Images } from '../../interfaces/imageInterface';






interface propsInterface {
    movieData: MovieData,
    movieReviews: Reviews,
    movieImages: Images
}


const Movie = (props: propsInterface) => {
    
    const movie = props.movieData.data.movie
    const actors = movie.cast
    const reviews = props.movieReviews.items
    const images = props.movieImages.items
    const trailer = movie.yt_trailer_code




    return (

        <div className={movieDetailsStyles.container} >

            <div className={movieDetailsStyles.movieInfo}>
                <div className={` ${movieDetailsStyles.basicInfo}`}>
                    <div className={` ${movieDetailsStyles.imageDetailsContainer}`}>

                        {/*First Column */}
                        <div className={`${movieDetailsStyles.infoColumn} ${movieDetailsStyles.imageContainer}`}>
                            <div className={movieDetailsStyles.image}>
                                <Image src={movie.medium_cover_image} width="1000 " height="1500" layout="intrinsic" alt="Movie poster image"></Image>
                            </div>
                        </div>

                        {/*Second Column */}
                        <div className={`${movieDetailsStyles.infoColumn} ${movieDetailsStyles.details}`}>
                            <div className={`${movieDetailsStyles.detailsText} ${movieDetailsStyles.title}`}>
                                <span>{movie.title}</span>
                            </div>
                            <div className={`${movieDetailsStyles.detailsText} ${movieDetailsStyles.year}`}>
                                <span>{movie.year}</span>
                            </div>
                            <div className={movieDetailsStyles.rating}>
                                <Rating readOnly value={movie.rating / 2} precision={0.2} size="large" />
                                <span className={`${movieDetailsStyles.detailsText} ${movieDetailsStyles.ratingText}`} >{movie.rating / 2}</span>
                            </div>
                            <div className={movieDetailsStyles.genres}>
                                <ul className={movieDetailsStyles.genresList}>
                                    {movie.genres && movie.genres.map((genre: string, i: number) => (
                                        <li key={i} className={`${movieDetailsStyles.detailsText} ${movieDetailsStyles.genreListItem} `}>
                                            {genre}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={movieDetailsStyles.synopsis}>
                                <h1 className={`${movieDetailsStyles.detailsText} ${movieDetailsStyles.synopsisTitle}`} >Synopsis</h1>
                                <span className={`${movieDetailsStyles.detailsText} ${movieDetailsStyles.synopsisText}`} >{movie.description_full}</span>
                            </div>
                            <div className={`${movieDetailsStyles.movieMediaTrailerContainer}`}>

                                <h1 className={`${movieDetailsStyles.detailsText} ${movieDetailsStyles.synopsisTitle}`}>
                                    Trailer
                                </h1>
                                {trailer.length != 0 ?

                                    <ReactPlayer width="300px" height="150px" url={`https://www.youtube.com/watch?v=${movie.yt_trailer_code}`} />
                                    :
                                    <h1 className={movieDetailsStyles.errorText}>No trailer</h1>
                                }
                            </div>
                        </div>
                    </div>

                    {/*Third Column */}
                    <div className={`${movieDetailsStyles.infoColumn} ${movieDetailsStyles.movieMedia}`}>
                        <div className={`${movieDetailsStyles.movieMediaContainer}`}>
                            <div className={`${movieDetailsStyles.movieMediaHeading}`}>
                                <div className={`${movieDetailsStyles.imagesTitle} ${movieDetailsStyles.detailsText}`}>
                                    <span>Images</span>
                                </div>
                            </div>


                            <SRLWrapper>
                                <div className={`${movieDetailsStyles.movieMediaImages}`}>
                                    {images && images.length != 0 ?
                                        images.slice(0, 9).map((image: imageInterface, i: number) => (
                                            <div key={i} className={movieDetailsStyles.movieMediaImageContainer}>
                                                <img key={image.image} className={`${movieDetailsStyles.movieMediaImage}`} alt={`${i}`} src={`${image.image}`} width={200} height={200} />
                                            </div>
                                        )) :
                                        <h1 className={movieDetailsStyles.errorText}>No images</h1>
                                    }
                                </div>
                            </SRLWrapper>
                        </div>
                    </div>
                </div>

                <div className={movieDetailsStyles.actors}>
                    <ActorList actors={actors} />

                </div>
                <div className={movieDetailsStyles.review}>
                    <ReviewList reviews={reviews} />

                </div>
                <div className={movieDetailsStyles.relatedMovies}>

                </div>




                <div className={movieDetailsStyles.relatedMovies}>

                </div>

            </div>

        </div>
    )


}



export const getServerSideProps = async (context: any) => {
    const id = context.query.id;
    const movieRes = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`)
    const movieData = await movieRes.json();

    const imdbId = movieData.data.movie.imdb_code



    const movieSuggestionsRes = await fetch(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`)
    const movieSuggestions = await movieSuggestionsRes.json();



    const movieImagesRes = await fetch(`https://imdb-api.com/en/API/Images/k_l8gfe3i4/${imdbId}`)
    const movieImages = await movieImagesRes.json();

    const movieReviewsRes = await fetch(`https://imdb-api.com/en/API/Reviews/k_l8gfe3i4/${imdbId}`)
    const movieReviews = await movieReviewsRes.json();



    console.log(movieData.data.movie.imdb_code)


    return {
        props:
        {
            movieData,
            movieReviews,
            movieImages,
            movieSuggestions
        }
    }
}




export default Movie
