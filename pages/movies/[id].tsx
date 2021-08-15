/*Imports */
import React, { useEffect } from 'react'
import Image from "next/image"
import _, { map } from 'underscore';
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
import { movieInterface, genreInterface, videoInterface, imagesInterface, imageInterface } from '../../interfaces/mediaInterface'
import { ActorP, CrewP } from "../../interfaces/peopleInterface"





interface contextInterface {
    params: movieInterface
}
interface movieInfoInterface {
    movie: movieInterface
}

interface movieDetailsProp {
    movie: movieInterface,
    similarMovies: movieInterface[],
    movieActors: ActorP[],
    movieCrew: CrewP[],
    movieImages: imagesInterface,
    movieTrailer: videoInterface[]
}
interface dataProp {
    data: movieDetailsProp
}


const Movie = ({ data }: dataProp) => {
    const movie: movieInterface = data.movie;
    const similarMovies = data.similarMovies
    const actors = data.movieActors
    const crew = data.movieCrew
    const images = data.movieImages
    const trailer = data.movieTrailer.filter(movie => {
        return movie.type === "Trailer"
    })




    const imageWidth = 1280
    const backdropImageUrl = `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`
    const imageUrl = `https://image.tmdb.org/t/p/w${imageWidth}/${movie.poster_path}`





    return (
        <div className={movieDetailsStyles.container} >

            <div className={movieDetailsStyles.movieInfo}>
                <div className={` ${movieDetailsStyles.basicInfo}`}>
                    <div className={` ${movieDetailsStyles.imageDetailsContainer}`}>

                        {/*First Column */}
                        <div className={`${movieDetailsStyles.infoColumn} ${movieDetailsStyles.imageContainer}`}>
                            <div className={movieDetailsStyles.image}>
                                <Image src={imageUrl} width="1000 " height="1500" layout="intrinsic" alt="Movie poster image"></Image>
                            </div>
                        </div>

                        {/*Second Column */}
                        <div className={`${movieDetailsStyles.infoColumn} ${movieDetailsStyles.details}`}>
                            <div className={`${movieDetailsStyles.detailsText} ${movieDetailsStyles.title}`}>
                                <span>{movie.title}</span>
                            </div>
                            <div className={`${movieDetailsStyles.detailsText} ${movieDetailsStyles.year}`}>
                                <span>{movie.release_date.slice(0, 4)}</span>
                            </div>
                            <div className={movieDetailsStyles.rating}>
                                <Rating readOnly value={movie.vote_average / 2} precision={0.2} size="large" />
                                <span className={`${movieDetailsStyles.detailsText} ${movieDetailsStyles.ratingText}`} >{movie.vote_average / 2}</span>
                            </div>
                            <div className={movieDetailsStyles.genres}>
                                <ul className={movieDetailsStyles.genresList}>
                                    {movie.genres.map((genre: genreInterface, i:number) => (
                                        <li key={i} className={`${movieDetailsStyles.detailsText} ${movieDetailsStyles.genreListItem} `}>
                                            {genre.name}
                                        </li>
                                    ))}
                                </ul>

                            </div>
                            <div className={movieDetailsStyles.synopsis}>
                                <h1 className={`${movieDetailsStyles.detailsText} ${movieDetailsStyles.synopsisTitle}`} >Synopsis</h1>
                                <span className={`${movieDetailsStyles.detailsText} ${movieDetailsStyles.synopsisText}`} >{movie.overview}</span>
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
                                    {
                                        images.posters.slice(0, 9).map((image: imageInterface, i:number) => (
                                            <div key ={i} className={movieDetailsStyles.movieMediaImageContainer}>
                                                <img key ={i} className={`${movieDetailsStyles.movieMediaImage}`} alt={`${i}`} src={`http://image.tmdb.org/t/p/original${image.file_path}`} width={50} height={75} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </SRLWrapper>


                            <div className={`${movieDetailsStyles.movieMediaTrailerContainer}`}>

                                <div className={`${movieDetailsStyles.trailerTitle} ${movieDetailsStyles.detailsText}`}>
                                    <span>Trailer</span>
                                </div>

                                <SRLWrapper>
                                    <ReactPlayer width={200} height={100} url={`https://www.youtube.com/watch?v=${trailer[0].key}`} />
                                </SRLWrapper>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={movieDetailsStyles.actors}>
                    <ActorList actors={actors} />

                </div>
                <div className={movieDetailsStyles.review}>

                </div>
                <div className={movieDetailsStyles.relatedMovies}>

                </div>

            </div>

        </div>
    )


}

export const getStaticPaths = async () => {

    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
    const discovermoviesRes = await res.json();
    const discovermovies = discovermoviesRes.results;

    const res1 = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
    const recommendedMoviesRes = await res1.json();
    const recommendedMovies = recommendedMoviesRes.results;

    const res2 = await fetch(`
            https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
    const upcommingMoviesRes = await res2.json();
    const upcommingMovies = upcommingMoviesRes.results;

    const res3 = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
    const popularMoviesRes = await res3.json();
    const popularMovies = popularMoviesRes.results;




    const paths1 = discovermovies.map((movie: movieInterface) => {
        return {
            params: { id: movie.id.toString() }
        }
    })

    const paths2 = recommendedMovies.map((movie: movieInterface) => {
        return {
            params: { id: movie.id.toString() }
        }
    })
    const paths3 = upcommingMovies.map((movie: movieInterface) => {
        return {
            params: { id: movie.id.toString() }
        }
    })
    const paths4 = popularMovies.map((movie: movieInterface) => {
        return {
            params: { id: movie.id.toString() }
        }
    })




    var paths = [...paths1, ...paths2, ...paths3, ...paths4,]

    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async (context: contextInterface) => {
    const id = context.params.id;
    const movieRes = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.apiKey}&language=en-US`)
    const movie = await movieRes.json();

    const movieImagesRes = await fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.apiKey}&language=en-US&include_image_language=en,null`)
    const movieImages = await movieImagesRes.json();

    const similarMoviesRes = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.apiKey}&language=en-US`)
    const similarMoviesResults = await similarMoviesRes.json();
    const similarMovies = similarMoviesResults.results;

    const movieCreditsRes = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.apiKey}&language=en-US`)
    const movieCreditsResults = await movieCreditsRes.json();
    const movieActors = movieCreditsResults.cast;
    const movieCrew = movieCreditsResults.crew;

    const movieTrailerRes = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.apiKey}&language=en-US`)
    const movieTrailerResults = await movieTrailerRes.json();
    const movieTrailer = movieTrailerResults.results;


    const data = {
        movie,
        movieImages,
        similarMovies,
        movieActors,
        movieCrew,
        movieTrailer

    }


    return {
        props: {
            data
        }
    }
}




export default Movie
