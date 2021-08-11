import React from 'react'
import MediaList from '../../components/mediaList/MediaList'
import moviesStyle from "../../styles/Movies.module.scss"



const index = ({recommendedMovies,discoverMovies,popularMovies}) => {
    console.log(recommendedMovies,discoverMovies,popularMovies)
    return (
        <>
            <header className={moviesStyle.header}>
                <div className={moviesStyle.heading}>
                    Home
                </div>

            </header>

            <div className={moviesStyle.buffer}></div>
            <MediaList mediaType="movie" media={recommendedMovies.results} heading="Recommended Movies" subHeading="Movies we know you will like" />
            <MediaList mediaType="movie" media={discoverMovies.results} heading="Discover Movies" subHeading="Discover new Movies picked just for you" />
            <MediaList mediaType="movie" media={popularMovies.results} heading="Popular Movies" subHeading="Learn more about the latest movies" />
        </>
    )
}

export const getStaticProps = async () => {
    const res1 = await fetch(`https://api.themoviedb.org/3
    /movie/top_rated?api_key=${process.env.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
    const recommendedMovies = await res1.json();

    const res2 = await fetch(`
    https://api.themoviedb.org/3/discover/movie?api_key=${process.env.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
    const discoverMovies = await res2.json();

    const res3 = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
    const popularMovies = await res3.json();
  
  
  
    return {
        props: { recommendedMovies, discoverMovies, popularMovies}
    }
  }

export default index
