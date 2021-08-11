import React, { useEffect } from 'react'
import Link from 'next/link'

import movieDetailsStyles from "../../styles/MovieDetail.module.scss"



const Movie = ({ movie }) => {
    useEffect(() => {
        console.log(movie)
    }, [movie])
    const imageUrl = `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`

    return (
        <div className={movieDetailsStyles.container} style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className={movieDetailsStyles.basicInfo}>
                <div className={movieDetailsStyles.image}>

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

    const paths = movies.results.map(movie => {
        return {
            params: { id: movie.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
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
