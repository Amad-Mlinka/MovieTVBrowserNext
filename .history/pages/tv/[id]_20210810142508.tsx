import React, { useEffect } from 'react'
import Link from 'next/link'

import tvDetailsStyles from "../../styles/MovieDetail.module.scss"



const Tv = ({ tv }) => {
    useEffect(() => {
        console.log(tv)
    }, [tv])
    const imageUrl = `https://image.tmdb.org/t/p/w1280/${tv.backdrop_path}`

    return (
        <div className={tvDetailsStyles.container} style={
            { background: `url(${imageUrl}) center center`
             }}>
            <div className={tvDetailsStyles.basicInfo}>
                <div className={tvDetailsStyles.image}>
dsadasd
                </div>
                <div className={tvDetailsStyles.details}>

                </div>
                <div className={tvDetailsStyles.relatedMedia}>

                </div>
            </div>
            <div className={tvDetailsStyles.actors}>

            </div>
            <div className={tvDetailsStyles.review}>

            </div>
            <div className={tvDetailsStyles.relatedMovies}>

            </div>
        </div>
    )


}

export const getStaticPaths = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
    const tv = await res.json();

    const paths = tv.results.map(tv => {
        return {
            params: { id: tv.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.apiKey}&language=en-US`)
    const tv = await res.json();

    return {
        props: {
            tv
        }
    }
}




export default Tv
