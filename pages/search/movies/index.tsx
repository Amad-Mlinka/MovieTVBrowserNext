import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Header from '../../../components/header/Header'
import { fetchInterface, movieInterface, tvInterface } from '../../../interfaces/mediaInterface'
import { storeInterface } from '../../../interfaces/storeInterface'
import store, { RootState } from '../../../store/store'
import * as reduxHooks from "../../../hooks/reduxHooks"
import useSWR from 'swr'
import Media from '../../../components/mediaList/Media'

import searchListStyles from "../../../styles/Search.module.scss"

interface contextInterface {
    params: fetchInterface
}

/*Dodati style i vidjeti da li smanjenje diva smanjuje i sam image !!! */


const Search = (props: any) => {
    const fetcher = (url: string) => fetch(url).then(res => res.json())

    const searchTerm: string = reduxHooks.useAppSelector((state: RootState) => state.searchReducer.term)
    const { data, error } = useSWR(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.apiKey}&query=${searchTerm}`, fetcher)
    console.log(data)
    console.log(error)
    const movies: movieInterface[] = data && data.results
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return (
        <>
            <Header text="Search" />
            <div className={searchListStyles.searchList}>
                <div className={searchListStyles.searchListContainer}>
                    {data.results ?
                        data.results.map((movie: movieInterface) =>
                        (<div className={searchListStyles.searchListItem}>
                            <Media image={movie.poster_path} id={movie.id} title={movie.title} overlay={true} year={movie.release_date} type={"movie"} rating={movie.vote_average} />
                        </div>
                        )
                        ) : <h1>No movies</h1>}
                </div>
            </div>




        </>
    )
}









export default Search
