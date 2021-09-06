import Head from 'next/head'

import homeStyles from '../styles/Home.module.scss'
import { MovieMediaList} from "../components/mediaList/MediaList"
import Header from '../components/header/Header'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MovieListData } from '../interfaces/movieListInterface';





export const getStaticProps = async () => {
  const res1 = await fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=rating`);
  const moviesRated = await res1.json();

  const res2 = await fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=date_added`);
  const moviesAdded = await res2.json();

  const res3 = await fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=download_count`);
  const moviesDownloaded = await res3.json();

  return {
    props: { moviesRated,moviesAdded,moviesDownloaded}
  }


}

interface propInterface{
  moviesRated:MovieListData,
  moviesAdded:MovieListData,
  moviesDownloaded:MovieListData
}





export default function Home({ moviesRated,moviesAdded,moviesDownloaded}:propInterface) {

  return (

    <>
      <Header text="Home" />
      <MovieMediaList mediaType="movie" media={moviesRated.data.movies} heading="Top Rated Movies" subHeading="Discover the best movies" overlay={true} />
      <MovieMediaList mediaType="movie" media={moviesAdded.data.movies} heading="Newly Added Movies" subHeading="Discover the newest movies" overlay={true} />
      <MovieMediaList mediaType="movie" media={moviesDownloaded.data.movies} heading="Popular downloads" subHeading="Discover the most downloaded movies" overlay={true} />
    </>

  )
}
