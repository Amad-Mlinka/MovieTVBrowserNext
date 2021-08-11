import React from 'react'
import Header from '../../components/header/Header'
import MediaMovieList from '../../components/mediaList/MediaMovieList'
import { movieInterface } from '../../interfaces/mediaInterface'
import moviesStyle from "../../styles/Movies.module.scss"

interface movieHomeInterface {
    recommendedMovies:movieInterface[],
    discoverMovies:movieInterface[],
    popularMovies:movieInterface[],
}



const index = ({recommendedMovies,discoverMovies,popularMovies}:movieHomeInterface) => {
    return (
        <>
           <Header text="Movies"/>

            <div className={moviesStyle.buffer}></div>
            <MediaMovieList mediaType="movie" media={recommendedMovies} heading="Top rated Movies" subHeading="Movies other people like" />
            <MediaMovieList mediaType="movie" media={discoverMovies} heading="Currently in Theaters" subHeading="Know exactly what You are in for" />
            <MediaMovieList mediaType="movie" media={popularMovies} heading="Popular Movies" subHeading="Popular movies today" />
        </>
    )
}

export const getStaticProps = async () => {
    const res1 = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
    const recommendedMoviesRes = await res1.json();
    const recommendedMovies=recommendedMoviesRes.results

    const res2 = await fetch(`
    https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
    const discoverMoviesRes = await res2.json();
    const discoverMovies=discoverMoviesRes.results

    const res3 = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
    const popularMoviesRes = await res3.json();
    const popularMovies=popularMoviesRes.results
  
  
  
    return {
        props: { recommendedMovies, discoverMovies, popularMovies}
    }
  }

export default index
