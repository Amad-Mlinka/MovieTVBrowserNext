import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

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

export const getStaticProps = async () => {
    const res1 = await fetch(`https://api.themoviedb.org/3/movie/{movie_id}?api_key=${process.env.apiKey}&language=en-US`);
    const movie = await res1.json();
    console.log(movie)
  
    return {
        props: { movie }
    }
  }
  

export default Movie
