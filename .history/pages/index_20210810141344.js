import Head from 'next/head'

import homeStyles from '../styles/Home.module.scss'
import MediaList from "../components/mediaList/MediaList"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const tvApi=`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
const movieApi=`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`

export const getStaticProps = async () => {
  const res1 = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
  const movies = await res1.json();

  const res2 = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
  const tv = await res2.json();

  return {
      props: { movies,tv }
  }
}



export default function Home(props) {

  return (
    
    <>
      <Header text="Home"/>
     
      <div className={homeStyles.buffer}></div>
       <MediaList  mediaType="movie" media={props.movies.results} heading="Movies" subHeading="Discover new Movies picked just for you" />
       <MediaList mediaType="tv" media={props.tv.results} heading="TV" subHeading="Discover new TV Shows picked just for you" />
    </>

  )
}
