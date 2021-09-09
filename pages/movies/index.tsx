import React from 'react'
import Header from '../../components/header/Header'
import { MovieMediaList } from '../../components/mediaList/MediaList'
import { MovieListData } from '../../interfaces/movieListInterface'
import moviesStyle from "../../styles/Movies.module.scss"

interface propsInterface{
    moviesRated:MovieListData,
    moviesAdded:MovieListData,
    moviesDownloaded:MovieListData
  }
  


const index = ({ moviesRated, moviesAdded, moviesDownloaded }: propsInterface) => {
    return (
        <>
            <Header text="Movies" />

            <div className={moviesStyle.buffer}></div>
            
            {moviesRated      && <MovieMediaList media={moviesRated.data.movies}      heading="Top Rated Movies"   subHeading="Discover the best movies"            overlay={true} />}
            {moviesAdded      && <MovieMediaList media={moviesAdded.data.movies}      heading="Newly Added Movies" subHeading="Discover the newest movies"          overlay={true} />}
            {moviesDownloaded && <MovieMediaList media={moviesDownloaded.data.movies} heading="Popular downloads"  subHeading="Discover the most downloaded movies" overlay={true} />}
        </>
    )
}

export const getStaticProps = async () => {
    const res1 = await fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=rating`);
    const moviesRated = await res1.json();

    const res2 = await fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=date_added`);
    const moviesAdded = await res2.json();

    const res3 = await fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=download_count`);
    const moviesDownloaded = await res3.json();

    return {
        props: { moviesRated, moviesAdded, moviesDownloaded }
    }


}

export default index
