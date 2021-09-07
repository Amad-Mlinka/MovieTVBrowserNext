import Head from 'next/head'

import homeStyles from '../styles/Home.module.scss'
import { MovieMediaList} from "../components/mediaList/MediaList"
import Header from '../components/header/Header'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MovieListData } from '../interfaces/movieListInterface';










export default function Home() {

  return (

    <>
      <Header text="Home" />
      <div className={homeStyles.heading}>
        <div className={homeStyles.title}>
          MovieX
        </div>
        <div className={homeStyles.subHeading}>
          The best movie site for finding your next movie to watch on your date night or sleepover.
          Movie data directly from YTS movie group and supplementary data from iMDB.
        </div>
      </div>
    </>

  )
}
