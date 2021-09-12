import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../../components/header/Header'
import { MovieMediaList } from '../../components/mediaList/MediaList'
import { localeInterface } from '../../interfaces/localeInterface'
import { MovieListData } from '../../interfaces/movieListInterface'
import bs from '../../locales/bs'
import en from '../../locales/en'
import moviesStyle from "../../styles/Movies.module.scss"

interface propsInterface {
    moviesRated: MovieListData,
    moviesAdded: MovieListData,
    moviesDownloaded: MovieListData
}



const Movies = ({ moviesRated, moviesAdded, moviesDownloaded }: propsInterface) => {

    const router = useRouter();
    const { locale } = router;
    const t: localeInterface = locale === "en" ? en : bs

    
    return (
        <>
            <NextSeo
                title={t.movieList}
                description={t.movieList}
            />
            <Header text={t.movies} />

            <div className={moviesStyle.buffer}></div>

            {moviesRated && <MovieMediaList media={moviesRated.data.movies} heading={t.topRatedMovies} subHeading={t.topRatedMoviesSub} overlay={true} />}
            {moviesAdded && <MovieMediaList media={moviesAdded.data.movies} heading={t.newlyAddedMovies} subHeading={t.newlyAddedMoviesSub} overlay={true} />}
            {moviesDownloaded && <MovieMediaList media={moviesDownloaded.data.movies} heading={t.popularDownloads} subHeading={t.popularDownloadsSub} overlay={true} />}
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

export default Movies
