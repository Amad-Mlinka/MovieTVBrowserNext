import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Header from '../../../components/header/Header'
import { fetchInterface, movieInterface, tvInterface } from '../../../interfaces/mediaInterface'
import { storeInterface } from '../../../interfaces/storeInterface'
import store, { RootState } from '../../../store/store'
import * as reduxHooks from "../../../hooks/reduxHooks"

interface contextInterface {
    params: fetchInterface
}


const Search = (props:any) => {

    const searchTerm:string = reduxHooks.useAppSelector((state:RootState) => state.searchReducer.term)
    return (
        <>
            <Header text="Search" />
            <h1>{searchTerm}</h1>
        </>
    )
}





export const getServerSideProps = async (context: any) => {
    const state:storeInterface = store.getState()
    const {params,req,res} = context;
    console.log("bla"+state.searchReducer.term)



    const movies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.apiKey}&query=${state.searchReducer.term}&page=${params}`);
    const discovermoviesRes = await movies.json();
    const moviesResult = discovermoviesRes;

   
   


    const data = {
        moviesResult,
 
    }


    return {
        props: {
            data
        }
    }
}




export default Search
