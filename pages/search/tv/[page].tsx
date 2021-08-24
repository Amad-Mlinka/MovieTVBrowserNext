import { useRouter } from 'next/router'
import React from 'react'
import Header from '../../components/header/Header'
import { movieInterface, tvInterface } from '../../interfaces/mediaInterface'
import { storeInterface } from '../../interfaces/storeInterface'
import store from '../../store/store'

interface contextInterface {
    params: movieInterface | tvInterface
}

const router = useRouter()
const url = router.pathname.split("/")[1];
console.log(url)



const Search = () => {
    return (
        <>
            <Header text="Search"/>
        </>
    )
}


export const getStaticPaths = async (context:any) => {
    const state :storeInterface = store.getState();
    const term = context.params.term;

    
    const media=fetch(`https://api.themoviedb.org/3/search/${url}?api_key=${process.env.apiKey}&query=${store.searchReducer.term}`)
    console.log(state.searchReducer.term)





    const paths = media.map((media: movieInterface | tvInterface) => {
        return {
            params: { id: media.id.toString() }
        }
    })




    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async (context: contextInterface) => {
    const id = context.params.id;
    const movieRes = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.apiKey}&language=en-US`)
    const movie = await movieRes.json();

    const movieImagesRes = await fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.apiKey}&language=en-US&include_image_language=en,null`)
    const movieImages = await movieImagesRes.json();

    const similarMoviesRes = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.apiKey}&language=en-US`)
    const similarMoviesResults = await similarMoviesRes.json();
    const similarMovies = similarMoviesResults.results;

    const movieCreditsRes = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.apiKey}&language=en-US`)
    const movieCreditsResults = await movieCreditsRes.json();
    const movieActors = movieCreditsResults.cast;
    const movieCrew = movieCreditsResults.crew;

    const movieTrailerRes = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.apiKey}&language=en-US`)
    const movieTrailerResults = await movieTrailerRes.json();
    const movieTrailer = movieTrailerResults.results;

    const movieReviewsRes = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.apiKey}&language=en-US`)
    const movieReviewsResults = await movieReviewsRes.json();
    const movieReviews = movieReviewsResults.results;



    const data = {
        movie,
        movieImages,
        similarMovies,
        movieActors,
        movieCrew,
        movieTrailer,
        movieReviews

    }


    return {
        props: {
            data
        }
    }
}

export default Search
