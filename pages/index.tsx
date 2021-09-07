import Head from 'next/head'

import homeStyles from '../styles/Home.module.scss'
import { MovieMediaList } from "../components/mediaList/MediaList"
import Header from '../components/header/Header'
import Image from 'next/image'
import ytsLogo from '../public/yts-logo.png'
import imdbLogo from '../public/iMDBLogo.png'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Movie, MovieListData } from '../interfaces/movieListInterface';
import React from 'react';
import Link from 'next/link';
import Media from '../components/mediaList/Media'



export default function Home(props: MovieListData) {
  console.log(props.data.movies)
  const movies = props.data.movies

  return (

    <>
      <Header text="Home" />
      <div className={homeStyles.heading}>

        <div className={homeStyles.title}>
          MovieX
        </div>
        <div className={homeStyles.subHeading}>
          The best movie site for finding your next movie to watch on your date night or sleepover.
          Movie data directly from <Link href="https://yts.mx/"><Image src={ytsLogo} height="20" width="60"></Image></Link>  movie group and supplementary data from <Link href="https://www.imdb.com/"><Image src={imdbLogo} height="30" width="30"></Image></Link>
        </div>
        <hr className={homeStyles.seperator} />
        <div className={homeStyles.upcomingSection}>
          <div className={homeStyles.subTitle}>
            Popular movies
          </div>
          <div className={homeStyles.upcomingMovies}>
            {movies && movies.map((movie: Movie, i: Number) => (
              <div className={homeStyles.mediaContainer}>
                <Media key={movie.id} movie={movie} overlay={true}></Media>
              </div>

            ))

            }
          </div>
        </div>


      </div>
    </>

  )
}


export const getStaticProps = async () => {

  const popularMovieRes = await fetch(`https://yts.mx/api/v2/list_movies.json?&sort_by=download_count&limit=4`)
  const popularMovieData = await popularMovieRes.json();







  return {
    props: popularMovieData,

  }
}
