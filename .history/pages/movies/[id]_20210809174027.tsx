import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
//https://api.themoviedb.org/3/movie/497698?api_key=70846ae2c3bdf81734c4dc36fab283cc&language=en-US


const Movie = (props) => {
    const router = useRouter()
    const { id } = router.query;

    useEffect(() => {
        console.log(props)
    }, [props])

    return (
        <div>
            {props}

        </div>
    )


}

export const getStaticPaths = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
    const movies = await res.json();

    const paths= movies.results.map(movie=>{
        return {
            params:{id:movie.id.toString()}
        }
    })

    return {
        paths,
        fallback:false
    }
}

export const getStaticProps = async(context) => {
    const id= context.params.id;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.apiKey}&language=en-US`)
    const movie = await res.json();

    return {
        props:{
            movie
        }
    }
}




export default Movie
