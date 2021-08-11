import React, { useEffect } from 'react'
import Link from 'next/link'

import movieDetailsStyles from "../../styles/MovieDetail.module.scss"



const Movie = ({ movie }) => {
    useEffect(() => {
        console.log(movie)
    }, [movie])
    const imageUrl = `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`

    return (
        <div className={movieDetailsStyles.container} style={
            { background: `url(${imageUrl}) center center`
             }}>
            <div className={movieDetailsStyles.basicInfo}>
                <div className={movieDetailsStyles.image}>
dsadasd
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
    const res1 = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
    const recommendedMovies = await res1.json();

    const res2 = await fetch(`
    https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
    const discoverMovies = await res2.json();

    const res3 = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
    const popularMovies = await res3.json();

    const paths1 = recommendedMovies.results.map(movie => {
        return {
            params: { id: movie.id.toString() }
        }
    })
    const paths2 = discoverMovies.results.map(movie => {
        return {
            params: { id: movie.id.toString() }
        }
    })
    const paths3 = popularMovies.results.map(movie => {
        return {
            params: { id: movie.id.toString() }
        }
    })

    return {
        paths:[
            paths1,
            paths2,
            paths3
        ],
        fallback: true
    }
}

export const getStaticProps = async (context) => {
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
