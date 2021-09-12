import Head from 'next/head'

import homeStyles from '../styles/Home.module.scss'
import Header from '../components/header/Header'
import Image from 'next/image'
import ytsLogo from '../public/yts-logo.png'
import imdbLogo from '../public/iMDBLogo.png'
import { NextSeo } from 'next-seo';
import en from "../locales/en"
import bs from "../locales/bs"



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Movie, MovieListData } from '../interfaces/movieListInterface';
import {localeInterface} from '../interfaces/localeInterface'
import React from 'react';
import Link from 'next/link';
import Media from '../components/mediaList/Media'
import { useRouter } from 'next/router'



export default function Home(props: MovieListData) {
  const movies = props.data.movies
  const router = useRouter();
  const { locale } = router;
  const t:localeInterface = locale === "en" ? en : bs

  return (

    <>
      <NextSeo
        title={t.home}
        description={t.welcome}
      />
      <Header text={t.home} />
      <div className={homeStyles.heading}>

        <div className={homeStyles.title}>
          MovieX
        </div>
        <div className={homeStyles.subHeading}>
          {t.homePageTitle1} <Link href="https://yts.mx/"><a><Image alt={"yts logo"} src={ytsLogo} height="20" width="60"></Image></a></Link>  {t.homePageTitle2} <Link href="https://www.imdb.com/"><a><Image alt={"imdb logo"} src={imdbLogo} height="30" width="30"></Image></a></Link>
        </div>
        <hr className={homeStyles.seperator} />
        <div className={homeStyles.upcomingSection}>
          <div className={homeStyles.subTitle}>
            {t.popularMovies}
          </div>
          <div className={homeStyles.upcomingMovies}>
            {movies && movies.map((movie: Movie, i: Number) => (
              <div className={homeStyles.mediaContainer} key={movie.id}>
                <Media movie={movie} overlay={true}></Media>
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
