/*Imports */
import React, { useEffect } from 'react'
import Image from "next/image"
import _, { map } from 'underscore';
import { useRouter } from 'next/router'

/*Material components*/
import { Rating } from '@material-ui/core'

/*Icons*/

/*Import Plugins*/

/*Styles*/
import movieDetailsStyles from "../../styles/MovieDetail.module.scss"

/*Interfaces */
import { movieInterface, genreInterface } from '../../interfaces/mediaInterface'
import Media from '../../components/mediaList/Media';


interface contextInterface {
    params: movieInterface
}
interface movieInfoInterface {
    movie: movieInterface
}
interface movieDetailsProp {
    movie: movieInterface,
    similarMovies: movieInterface[]
}
interface dataProp {
    data: movieDetailsProp
}

const Movie = ({ data }: dataProp) => {
    const movie: movieInterface = data.movie;
    const similarMovies = data.similarMovies
    



    const imageWidth = 1280
    const backdropImageUrl = `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`
    const imageUrl = `https://image.tmdb.org/t/p/w${imageWidth}/${movie.poster_path}`



    return (
        <div className={movieDetailsStyles.container} >

            <div className={movieDetailsStyles.movieInfo}>
                <div className={` ${movieDetailsStyles.basicInfo}`}>
                    <div className={`${movieDetailsStyles.infoColumn} ${movieDetailsStyles.imageContainer}`}>
                        <div className={movieDetailsStyles.image}>
                            <Image src={imageUrl} width="1000 " height="1500" layout="intrinsic"></Image>
                        </div>
                    </div>

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
                                {movie.genres.map((genre: genreInterface) => (
                                    <li key={genre.id} className={`${movieDetailsStyles.detailsText} ${movieDetailsStyles.genreListItem} `}>
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
                    <div className={`${movieDetailsStyles.infoColumn} ${movieDetailsStyles.similarMovies}`}>
                        {
                            similarMovies.slice(0,4).map(movie => (
                                <div className={movieDetailsStyles.similarMoviesItem}>
                                    <Media key={movie.id} id= {movie.id} overlay={false} title={movie.title} rating={movie.vote_average} year={movie.release_date} image={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`} />
                                </div>

                            ))
                        }
                    </div>
                </div>


                <div className={movieDetailsStyles.actors}>

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
   
    const paths = [...paths1, ...paths2, ...paths3, ...paths4]


    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async (context: contextInterface) => {
    const id = context.params.id;
    const movieRes = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.apiKey}&language=en-US`)
    const movie = await movieRes.json();

    const similarMoviesRes = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.apiKey}&language=en-US`)
    const similarMoviesResults = await similarMoviesRes.json();
    const similarMovies = similarMoviesResults.results;

    const data = {
        movie,
        similarMovies
    }


    return {
        props: {
            data
        }
    }
}




export default Movie
