/*Imports */
import React, { useContext, useEffect } from 'react'
import Image from 'next/image';
import ActorList from '../../components/actorList/ActorList';
import { SRLWrapper } from "simple-react-lightbox";
import ReactPlayer from 'react-player'
import useSWR from 'swr';
import Fetcher from '../../components/fetcher/Fetcher';

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
import { NextSeo } from 'next-seo';
import { Movie, MovieListData } from '../../interfaces/movieListInterface';
import Media from '../../components/mediaList/Media';
import MiniMedia from '../../components/mediaList/MiniMedia';




interface propsInterface {
    movieData: MovieData,
    movieReviews: Reviews,
    movieImages: Images,
    movieSuggestions: MovieListData
}


const Details = (props: propsInterface) => {


    const movie = props.movieData.data.movie
    const actors = movie.cast
    const similar = props.movieSuggestions.data.movies

    const { data: reviews, error: reviewsError } = useSWR(`https://imdb-api.com/en/API/Reviews/k_l8gfe3i4/${movie.imdb_code}`, Fetcher)


    const trailer = movie.yt_trailer_code

    console.log(similar)
    if (reviews) console.log(reviews)
    console.log(actors)




    return (
        <>
            <NextSeo
                title={`Movie Details - ${movie.title}`}
                description={movie.title}
            />

            <div className={movieDetailsStyles.container} >

                <div className={movieDetailsStyles.movieInfo}>
                    <div className={` ${movieDetailsStyles.basicInfo}`}>
                        <div className={` ${movieDetailsStyles.imageDetailsContainer}`}>

                            {/*First Column */}
                            {/*Image */}
                            <div className={`${movieDetailsStyles.infoColumn} ${movieDetailsStyles.imageContainer}`}>
                                <div className={movieDetailsStyles.image}>
                                    <Image priority alt={movie.title + " poster"} src={movie.medium_cover_image} width="1000 " height="1500" layout="intrinsic"></Image>
                                </div>
                            </div>

                            {/*Second Column */}

                            <div className={`${movieDetailsStyles.infoColumn} ${movieDetailsStyles.details}`}>
                                {/*Title */}
                                <div className={`${movieDetailsStyles.heading} ${movieDetailsStyles.mainTitle} ${movieDetailsStyles.detailsText} `}>
                                    <span>{movie.title}</span>
                                </div>

                                {/*Year */}
                                <div className={`${movieDetailsStyles.detailsText} ${movieDetailsStyles.year} `}>
                                    <span>{movie.year}</span>
                                </div>

                                {/*Rating */}
                                <div className={movieDetailsStyles.rating}>
                                    <Rating readOnly value={movie.rating / 2} precision={0.2} size="large" />
                                    <span className={`${movieDetailsStyles.detailsText} ${movieDetailsStyles.ratingText}`} >{movie.rating / 2}</span>
                                </div>

                                {/*Genres */}
                                <div className={movieDetailsStyles.genres}>
                                    <ul className={movieDetailsStyles.genresList}>
                                        {movie.genres && movie.genres.map((genre: string, i: number) => (
                                            <li key={i} className={`${movieDetailsStyles.detailsText} ${movieDetailsStyles.genreListItem} `}>
                                                {genre}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/*Trailer */}
                                <div className={`${movieDetailsStyles.movieMediaTrailerContainer}`}>

                                    <h1 className={`${movieDetailsStyles.subheading} ${movieDetailsStyles.detailsText} `}>
                                        Trailer
                                    </h1>
                                    {trailer.length != 0 ?

                                        <ReactPlayer width="auto" height="auto" url={`https://www.youtube.com/watch?v=${movie.yt_trailer_code}`} />
                                        :
                                        <h1 className={`${movieDetailsStyles.errorText} ${movieDetailsStyles.detailsText} `}>No trailer</h1>
                                    }
                                </div>
                            </div>
                        </div>

                        {/*Third Column */}
                        <div className={`${movieDetailsStyles.infoColumn} ${movieDetailsStyles.movieMedia}`}>
                            {/*Similar movies */}
                            <div className={`${movieDetailsStyles.movieMediaContainer}`}>
                                <div className={`${movieDetailsStyles.movieMediaHeading}`}>
                                    <h1 className={`${movieDetailsStyles.subheading} ${movieDetailsStyles.detailsText} `}>Similar movies</h1>
                                </div>
                                <div className={`${movieDetailsStyles.movieSimilar}`}>
                                    {similar && similar.length != 0 &&
                                        similar.slice(0, 9).map((movie: Movie, i: number) => (
                                            <div key={i} className={`${movieDetailsStyles.movieSimilarItem}`}>
                                                <MiniMedia movie={movie} overlay={false} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Second row */}
                    {/*Synopsis */}
                    <div className={movieDetailsStyles.synopsis}>
                        <h1 className={`${movieDetailsStyles.detailsText} ${movieDetailsStyles.synopsisTitle} ${movieDetailsStyles.detailsText}`} >Synopsis</h1>
                        <span className={`${movieDetailsStyles.detailsText} ${movieDetailsStyles.synopsisText} ${movieDetailsStyles.detailsText}`} >{movie.description_full}</span>
                    </div>
                    <div className={movieDetailsStyles.images}>

                        <SRLWrapper>
                            <div className={movieDetailsStyles.imagesList}>
                                <div className={movieDetailsStyles.imagesListItemContainer}>
                                    <div className={movieDetailsStyles.imagesListItem}>
                                        <Image src={movie.large_screenshot_image1} layout={"fill"} objectFit={"contain"}></Image>
                                    </div>
                                </div>
                                <div className={movieDetailsStyles.imagesListItemContainer}>
                                    <div className={movieDetailsStyles.imagesListItem}>
                                        <Image src={movie.large_screenshot_image2} layout={"fill"} objectFit={"contain"}></Image>
                                    </div>
                                </div>
                                <div className={movieDetailsStyles.imagesListItemContainer}>
                                    <div className={movieDetailsStyles.imagesListItem}>
                                        <Image src={movie.large_screenshot_image3} layout={"fill"} objectFit={"contain"}></Image>
                                    </div>
                                </div>

                            </div>
                        </SRLWrapper>

                    </div>

                    {/*Fourth row */}
                    {/*Actors/reviews */}
                    <div className={` ${movieDetailsStyles.otherInfo}`}>

                        {actors && <div className={movieDetailsStyles.actors}>
                            <ActorList actors={actors} />

                        </div>}
                        {reviews && <div className={movieDetailsStyles.review}>
                            <ReviewList reviews={reviews.items} />

                        </div>}
                    </div>



                </div>

            </div>
        </>

    )


}



export const getServerSideProps = async (context: any) => {
    const id = context.query.id;
    const movieRes = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`)
    const movieData = await movieRes.json();

    const imdbId = movieData.data.movie.imdb_code



    const movieSuggestionsRes = await fetch(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`)
    const movieSuggestions = await movieSuggestionsRes.json();



    /*const movieImagesRes = await fetch(`https://imdb-api.com/en/API/Images/k_l8gfe3i4/${imdbId}`)
    const movieImages = await movieImagesRes.json();

    const movieReviewsRes = await fetch(`https://imdb-api.com/en/API/Reviews/k_l8gfe3i4/${imdbId}`)
    const movieReviews = await movieReviewsRes.json();*/



    console.log(movieData.data.movie.imdb_code)


    return {
        props:
        {
            movieData,
            /*movieReviews,
            movieImages,*/
            movieSuggestions
        }
    }
}




export default Details
