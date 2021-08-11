import React from 'react'
import MediaList from '../../components/mediaList/MediaList'
import moviesStyle from "../../styles/Movies.module.scss"



const index = ({recommendedMovies,discoverMovies,latesMovies}) => {
    return (
        <>
            <header className={moviesStyle.header}>
                <div className={moviesStyle.heading}>
                    Home
                </div>

            </header>

            <div className={moviesStyle.buffer}></div>
            <MediaList mediaType="movie" media={recommendedMovies.results} heading="Movies" subHeading="Discover Movies you have not watched before" />
            <MediaList mediaType="movie" media={discoverMovies.results} heading="TV" subHeading="Discover new TV Shows picked just for you" />
            <MediaList mediaType="movie" media={latesMovies.results} heading="TV" subHeading="Discover new TV Shows picked just for you" />
        </>
    )
}

export const getStaticProps = async () => {
    const res1 = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
    const recommendedMovies = await res1.json();

    const res2 = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
    const discoverMovies = await res2.json();

    const res3 = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
    const latesMovies = await res3.json();
  
  
  
    return {
        props: { recommendedMovies, discoverMovies,latesMovies}
    }
  }

export default index
