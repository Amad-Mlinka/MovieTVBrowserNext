import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Header from '../../../components/header/Header'
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

    useEffect(() => {
       console.log(page)
    }, [page])

    const searchTerm: string = reduxHooks.useAppSelector((state: RootState) => state.searchReducer.term)
    const searchGenre: string = reduxHooks.useAppSelector((state: RootState) => state.searchReducer.genre)    
    const searchRating: string = reduxHooks.useAppSelector((state: RootState) => state.searchReducer.rating)
    const searchSort: string = reduxHooks.useAppSelector((state: RootState) => state.searchReducer.sort)
    const { data: searchData, error: searchError } = useSWR(() =>

        searchTerm == "" || searchTerm.length < 2 ?
            `https://yts.mx/api/v2/list_movies.json?page=${page}&${searchGenre!= "" ? "genre="+searchGenre : ""}&${searchRating ? "minimum_rating="+searchRating : ""}&${searchSort ? "sort_by="+searchSort:""} `:
            `https://yts.mx/api/v2/list_movies.json?query_term=${searchTerm}&page=${page}&${searchGenre!= "" ? "genre="+searchGenre : ""}&${searchRating ? "minimum_rating="+searchRating : ""}&${searchSort ? "sort_by="+searchSort:""} `


        , fetcher)

    if (searchError) return <div className={searchListStyles.errorText}>failed to load</div>
    if (!searchData) return <div><Loading></Loading></div>
    if (searchData) {
        const movies: MovieListData = searchData
        const movieList:Movie[] | null | undefined=movies && movies.data.movies 

        

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
                            {movieList && movieList.length > 0 ? movies.data.page_number == 1 ?
                                <>
                                    <li className={searchListStyles.searchListPaginationItem} onClick={() => setPage(movies.data.page_number)}>{movies.data.page_number}</li>
                                    {Math.ceil(movies.data.movie_count/movies.data.limit) > movies.data.page_number + 1 && <li className={searchListStyles.searchListPaginationItem} onClick={() => setPage(movies.data.page_number + 1)}>{movies.data.page_number + 1}</li>}
                                    {Math.ceil(movies.data.movie_count/movies.data.limit) > movies.data.page_number + 2 && <li className={searchListStyles.searchListPaginationItem} onClick={() => setPage(movies.data.page_number + 2)}>{movies.data.page_number + 2}</li>}
                                    {Math.ceil(movies.data.movie_count/movies.data.limit) > movies.data.page_number + 2 && <li className={searchListStyles.searchListPaginationItem}>...</li>}
                                    {Math.ceil(movies.data.movie_count/movies.data.limit) > 3 && <li className={searchListStyles.searchListPaginationItem} onClick={() => setPage(Math.ceil(movies.data.movie_count/movies.data.limit))}>{Math.ceil(movies.data.movie_count/movies.data.limit)}</li>}
                                </>
                                : movies.data.page_number == Math.ceil(movies.data.movie_count/movies.data.limit) ?
                                    <>
                                        <li className={searchListStyles.searchListPaginationItem} onClick={() => setPage(1)}>{1}</li>
                                        <li className={searchListStyles.searchListPaginationItem}>...</li>
                                        <li className={searchListStyles.searchListPaginationItem} onClick={() => setPage(Math.ceil(movies.data.movie_count/movies.data.limit) - 2)}>{Math.ceil(movies.data.movie_count/movies.data.limit) - 2}</li>
                                        <li className={searchListStyles.searchListPaginationItem} onClick={() => setPage(Math.ceil(movies.data.movie_count/movies.data.limit) - 1)}>{Math.ceil(movies.data.movie_count/movies.data.limit) - 1}</li>
                                        <li className={searchListStyles.searchListPaginationItem} onClick={() => setPage(Math.ceil(movies.data.movie_count/movies.data.limit))}>{Math.ceil(movies.data.movie_count/movies.data.limit)}</li>


                                    </> :
                                    <>
                                        <li className={searchListStyles.searchListPaginationItem} onClick={() => setPage(movies.data.page_number)}>{movies.data.page_number - 1}</li>
                                        <li className={searchListStyles.searchListPaginationItem} onClick={() => setPage(movies.data.page_number + 1)}>{movies.data.page_number}</li>
                                        <li className={searchListStyles.searchListPaginationItem} onClick={() => setPage(movies.data.page_number + 2)}>{movies.data.page_number + 1}</li>
                                        <li className={searchListStyles.searchListPaginationItem}>...</li>
                                        <li className={searchListStyles.searchListPaginationItem} onClick={() => setPage(Math.ceil(movies.data.movie_count/movies.data.limit))}>{Math.ceil(movies.data.movie_count/movies.data.limit)}</li>


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
