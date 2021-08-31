import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Header from '../../../components/header/Header'
import { fetchInterface,  genreInterface,  tvInterface } from '../../../interfaces/mediaInterface'
import { storeInterface } from '../../../interfaces/storeInterface'
import store, { RootState } from '../../../store/store'
import * as reduxHooks from "../../../hooks/reduxHooks"
import useSWR from 'swr'
import searchListStyles from "../../../styles/Search.module.scss"
import Loading from '../../../components/loading/Loading'
import Media from '../../../components/mediaList/Media'


interface propsInterface{
    genreList:genreInterface[]
}


const Search = ({genreList}: propsInterface) => {
    const fetcher = (url: string) => fetch(url).then(res => res.json())

    const [page, setPage] = useState(1);

    const searchTerm: string = reduxHooks.useAppSelector((state: RootState) => state.searchReducer.term)
    const { data: searchData, error: searchError } = useSWR(() =>

        searchTerm == "" ?
            `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.apiKey}&page=${page}` :
            `https://api.themoviedb.org/3/search/tv?api_key=${process.env.apiKey}&query=${searchTerm}&page=${page}`


        , fetcher)

    console.log(searchData)



    const tv: tvInterface[] = searchData && searchData.results
    if (searchError) return <div>failed to load</div>
    if (!searchData) return <div><Loading></Loading></div>
    return (
        <>
            <Header text="Search" />
            <div className={searchListStyles.searchList}>
                <div className={searchListStyles.searchListContainer}>
                    {tv ?
                        tv.map((tv: tvInterface, i: number) =>
                        (<div key={i} className={searchListStyles.searchListItem}>
                            <Media genres={genreList.filter((genre: genreInterface) => tv.genre_ids.includes(genre.id))} image={tv.poster_path} id={tv.id} title={tv.name} overlay={true} year={tv.first_air_date} type={"tv"} rating={tv.vote_average/2} />
                        </div>
                        )
                        ) : <h1>No tv</h1>}
                </div>
                <div className={searchListStyles.searchListPagination}>
                    <ul className={searchListStyles.searchListPaginationContainer}>
                        {tv && tv.length > 0 ? searchData.page == 1 ?
                            <>
                                <li className={searchListStyles.searchListPaginationItem} onClick={() => setPage(searchData.page)}>{searchData.page}</li>
                                {searchData.total_pages > searchData.page + 1 && <li className={searchListStyles.searchListPaginationItem} onClick={() => setPage(searchData.page + 1)}>{searchData.page + 1}</li>}
                                {searchData.total_pages > searchData.page + 2 && <li className={searchListStyles.searchListPaginationItem} onClick={() => setPage(searchData.page + 2)}>{searchData.page + 2}</li>}
                                {searchData.total_pages > searchData.page + 2 && <li className={searchListStyles.searchListPaginationItem}>...</li>}
                                {searchData.total_pages > 3 && <li className={searchListStyles.searchListPaginationItem} onClick={() => setPage(searchData.total_pages)}>{searchData.total_pages}</li>}
                            </>
                            : searchData.page == searchData.total_pages ?
                                <>
                                    <li className={searchListStyles.searchListPaginationItem} onClick={() => setPage(1)}>{1}</li>
                                    <li className={searchListStyles.searchListPaginationItem}>...</li>
                                    <li className={searchListStyles.searchListPaginationItem} onClick={() => setPage(searchData.total_pages - 2)}>{searchData.total_pages - 2}</li>
                                    <li className={searchListStyles.searchListPaginationItem} onClick={() => setPage(searchData.total_pages - 1)}>{searchData.total_pages - 1}</li>
                                    <li className={searchListStyles.searchListPaginationItem} onClick={() => setPage(searchData.total_pages)}>{searchData.total_pages}</li>


                                </> :
                                <>
                                    <li className={searchListStyles.searchListPaginationItem} onClick={() => setPage(searchData.page)}>{searchData.page - 1}</li>
                                    <li className={searchListStyles.searchListPaginationItem} onClick={() => setPage(searchData.page + 1)}>{searchData.page}</li>
                                    <li className={searchListStyles.searchListPaginationItem} onClick={() => setPage(searchData.page + 2)}>{searchData.page + 1}</li>
                                    <li className={searchListStyles.searchListPaginationItem}>...</li>
                                    <li className={searchListStyles.searchListPaginationItem} onClick={() => setPage(searchData.total_pages)}>{searchData.total_pages}</li>


                                </> :
                            <></>

                        }

                    </ul>
                </div>
            </div>




        </>
    )
}

export const getStaticProps = async () => {
    const genresRes = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.apiKey}&language=en-US`)
    const genresObject = await genresRes.json();
    const genreList=genresObject.genres

    return {
        props: {
            genreList
        }
    }
}









export default Search
