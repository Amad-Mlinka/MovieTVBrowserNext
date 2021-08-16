import React from 'react'
import Header from '../../components/header/Header'
import MediaTvList from '../../components/mediaList/MediaTvList'
import { tvInterface } from '../../interfaces/mediaInterface'
import moviesStyle from "../../styles/Movies.module.scss"

interface tvHomeInterface {
    topShows:tvInterface[],
    currentShows:tvInterface[],
    latestShows:tvInterface[],
}



const index = ({topShows,currentShows,latestShows}:tvHomeInterface) => {
    return (
        <>
           <Header text="Shows"/>
            <div className={moviesStyle.buffer}></div>
            <MediaTvList mediaType="movie" media={topShows} heading="Top rated Shows" subHeading="Shows other people like" overlay={true}/>
            <MediaTvList mediaType="movie" media={currentShows} heading="Popular Shows" subHeading="Popular Shows today" overlay={true}/>

        </>
    )
}

export const getStaticProps = async () => {
    const res1 = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
    const topShowsRes = await res1.json();
    const topShows=topShowsRes.results
    

    const res2 = await fetch(`
    https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
    const currentShowsRes = await res2.json();
    const currentShows=currentShowsRes.results

    const res3 = await fetch(`https://api.themoviedb.org/3/tv/latest?api_key=${process.env.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
    const latestShowsRes = await res3.json();
    const latestShows=latestShowsRes.results

  
  
  
    return {
        props: { topShows, currentShows}
    }
  }

export default index
