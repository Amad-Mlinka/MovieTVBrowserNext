import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Header from '../../../components/header/Header'
import { storeInterface } from '../../../interfaces/storeInterface'
import store, { RootState } from '../../../store/store'
import * as reduxHooks from "../../../hooks/reduxHooks"
import useSWR from 'swr'
import searchListStyles from "../../../styles/Search.module.scss"
import Loading from '../../../components/loading/Loading'
import Media from '../../../components/mediaList/Media'
import { Movie, MovieListData } from '../../../interfaces/movieListInterface'





const Search = () => {
    const fetcher = (url: string) => fetch(url).then(res => res.json())
    

    const [page, setPage] = useState(1);

    const searchTerm: string = reduxHooks.useAppSelector((state: RootState) => state.searchReducer.term)
    console.log(searchTerm.length)
    const { data: searchData, error: searchError } = useSWR(() =>

        searchTerm == "" || searchTerm.length < 2 ?
            `https://yts.mx/api/v2/list_movies.json` :
            `https://yts.mx/api/v2/list_movies.json?query_term=${searchTerm}&page=${page}`


        , fetcher)

    if (searchError) return <div className={searchListStyles.errorText}>failed to load</div>
    if (!searchData) return <div><Loading></Loading></div>
    if (searchData) {
        const movies: MovieListData = searchData
        const movieList:Movie[] | null | undefined=movies && movies.data.movies 
        console.log(movies)

        return (
            <>
                <Header text="Search" />
                <div className={searchListStyles.searchList}>
                    <div className={searchListStyles.searchListContainer}>
                        {movieList ?
                            movieList.map((movie: Movie, i: number) =>
                            (<div key={i} className={searchListStyles.searchListItem}>
                                <Media movie={movie} overlay={true}/>
                            </div>
                            )
                            ) : <h1 className={searchListStyles.errorText}>No movies</h1>}
                    </div>
                    <div className={searchListStyles.searchListPagination}>
                        <ul className={searchListStyles.searchListPaginationContainer}>
                            {movieList && movieList.length > 0 ? searchData.page == 1 ?
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
}











export default Search
