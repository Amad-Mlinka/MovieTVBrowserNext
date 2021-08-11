import React, { useEffect } from 'react'
import Link from 'next/link'

import movieDetailsStyles from "../../styles/MovieDetail.module.scss"
import { movieInterface } from '../../interfaces/mediaInterface'

interface contextInterface {
    params:movieInterface
}



const Movie = (movie: movieInterface) => {
    useEffect(() => {
        console.log(movie.backdrop_path)
    }, [movie])
    const imageUrl = `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`
    

    return (
        <div className={movieDetailsStyles.container} style={
            {
                background: `url(${imageUrl}) center center`
            }}>
            <div className={movieDetailsStyles.basicInfo}>
                <div className={movieDetailsStyles.image}>
                    { movie.title}
                </div>
                <div className={movieDetailsStyles.details}>

                </div>
                <div className={movieDetailsStyles.relatedMedia}>

                </div>
            </div>
            <div className={movieDetailsStyles.actors}>

            </div>
            <div className={movieDetailsStyles.review}>

            </div>
            <div className={movieDetailsStyles.relatedMovies}>

            </div>
        </div>
    )


}

export const getStaticPaths = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
    const movies = await res.json();

    const res1 = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
    const recommendedMovies = await res1.json();

    const res2 = await fetch(`
    https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
    const discoverMovies = await res2.json();

    const res3 = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
    const popularMovies = await res3.json();

    const paths1 = movies.results.map((movie:movieInterface) => {
        return {
            params: { id: movie.id.toString() }
        }
    })

    const paths2 = recommendedMovies.results.map((movie:movieInterface) => {
        return {
            params: { id: movie.id.toString() }
        }
    })
    const paths3 = discoverMovies.results.map((movie:movieInterface) => {
        return {
            params: { id: movie.id.toString() }
        }
    })
    const paths4 = popularMovies.results.map((movie:movieInterface) => {
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

export const getStaticProps = async (context:contextInterface) => {
    const id = context.params.id;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.apiKey}&language=en-US`)
    const movie = await res.json();

    return {
        props: {
            movie
        }
    }
}




export default Movie
