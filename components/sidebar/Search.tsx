/*Imports */
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import * as reduxHooks from "../../hooks/reduxHooks"
import { changeGenre, changeRating, changeSort, changeTerm, resetGenre, resetRating, resetSort, resetTerm, changeOrder } from '../../store/searchSlice';
import { changeOpen } from '../../store/sidebarSlice';
import { RootState } from '../../store/store';

/*Material components*/


/*Icons*/
import SearchIcon from '@material-ui/icons/Search';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import Switch from '@mui/material/Switch';

/*Import Plugins*/



/*Styles*/
import sidebarStyles from "../../styles/Navigation/Sidebar.module.scss"
import { useRouter } from 'next/router';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { localeInterface } from '../../interfaces/localeInterface';

interface propsInterface {
    locale: localeInterface
}

const Search = ({ locale }: propsInterface) => {
    const router = useRouter()
    const url = router.pathname.split("/")[1];
    const maxRating = 10;

    const genres = [
        "Action",
        "Adventure",
        "Animation",
        "Biography",
        "Comedy",
        "Crime",
        "Documentary",
        "Drama",
        "Family",
        "Fantasy",
        "Film Noir",
        "History",
        "Horror",
        "Music",
        "Musical",
        "Mystery",
        "Romance",
        "Sci-Fi",
        "Short Film",
        "Sport",
        "Superhero",
        "Thriller",
        "War",
        "Western"]


    const dispatch = reduxHooks.useAppDispatch()
    const searchTerm: string = reduxHooks.useAppSelector((state: RootState) => state.searchReducer.term)
    const searchGenre: string = reduxHooks.useAppSelector((state: RootState) => state.searchReducer.genre)
    const searchRating: string = reduxHooks.useAppSelector((state: RootState) => state.searchReducer.rating)
    const searchSort: string = reduxHooks.useAppSelector((state: RootState) => state.searchReducer.sort)
    const searchOrder: string = reduxHooks.useAppSelector((state: RootState) => state.searchReducer.order)



    const sidebar: boolean = reduxHooks.useAppSelector((state: RootState) => state.sidebarReducer.open)

    const changeTermHandler = (term: string) => {
        dispatch(changeTerm(term))
    }
    const resetTermHandler = () => {
        dispatch(resetTerm())
    }

    const changeGenreHandler = (event: any) => {
        dispatch(changeGenre(event.target.value))
    }
    const resetGenreHandler = () => {
        dispatch(resetGenre())
    }

    const changeRatingHandler = (event: any) => {
        dispatch(changeRating(event.target.value))
    }
    const resetRatingHandler = () => {
        dispatch(resetRating())
    }

    const changeSortHandler = (event: any) => {
        dispatch(changeSort(event.target.value))
    }
    const resetSortHandler = () => {
        dispatch(resetSort())
    }

    const changeOrderHandler = (event: any) => {
        dispatch(changeOrder())
        console.log(searchOrder)
    }



    const sidebarToggle = () => {
        dispatch(changeOpen())
    }


    return (
        <div className={`${sidebarStyles.sidebarLink} ${sidebar ? sidebarStyles.sidebarLinkOpen : ""} ${sidebarStyles.sidebarSearch} 
        ${sidebar ? sidebarStyles.sidebarSearchActive : ""}`} onClick={() => {
                !sidebar ? sidebarToggle() : ""
            }}>
            <div className={` ${sidebarStyles.searchContainer}`} >
                <SearchIcon className={sidebarStyles.searchIcon} />
                <input type="search" name="searchBar" value={searchTerm || ""} className={`${sidebarStyles.searchBar} ${!sidebar ? sidebarStyles.searchBarClosed : ""}`}
                    onChange={(e) => {
                        changeTermHandler(e.target.value)
                    }} ></input>
                <Link href={`/search/${url == "tv" ? url : "movies"}`}><DoubleArrowIcon className={sidebarStyles.searchIconConfirm} /></Link>
            </div>
            <div className={`${sidebarStyles.searchModifier}`}>
                <div className={sidebarStyles.searchFilters}>

                    <FormControl variant="filled" sx={{ m: 1, minWidth: 90, color: "white" }}>
                        <InputLabel id="genre">{locale.genre}</InputLabel>
                        <Select
                            labelId="genre"
                            id="demo-simple-select-filled"
                            value={searchGenre}
                            onChange={changeGenreHandler}
                        >
                            <MenuItem value="">
                                <em>{locale.none}</em>
                            </MenuItem>
                            {genres.map((genre: string, i: number) => (
                                <MenuItem key={i} value={genre}>{genre}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl variant="filled" sx={{ m: 1, minWidth: 100 }}>
                        <InputLabel id="demo-simple-select-filled-label">{locale.rating}</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            onChange={changeRatingHandler}
                            value={searchRating}
                        >
                            <MenuItem value={""}>
                                <em>{locale.none}</em>
                            </MenuItem>
                            {
                                [...Array(maxRating)].map((e, i) => (
                                    <MenuItem key={i} value={i + 1}>{i + 1}+</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>


                </div>
                {
                    <div className={sidebarStyles.searchAscending}>
                        <FormControl variant="filled" sx={{ m: 1, minWidth: 210 }}>
                            <InputLabel id="demo-simple-select-filled-label">{locale.sortBy}</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={searchSort == null ? "" : searchSort}
                                onChange={changeSortHandler}
                            >
                                <MenuItem value="">
                                    <em>{locale.none}</em>
                                </MenuItem>
                                <MenuItem value={"title"}>Title</MenuItem>
                                <MenuItem value={"year"}>Year</MenuItem>
                                <MenuItem value={"rating"}>Rating</MenuItem>
                                <MenuItem value={"like_count"}>Likes</MenuItem>
                                <MenuItem value={"date_added"}>Date Added</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                }
                <div className={sidebarStyles.searchOrder}>
                    <Button onClick={resetSortHandler} variant="outlined">Reset</Button>
                    <div className={sidebarStyles.order}>
                        <span>Desc</span>
                        <Switch
                            checked={searchOrder == "asc"}
                            onChange={changeOrderHandler}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                        <span>Asc</span>
                    </div>

                </div>


            </div>
        </div>
    )
}



export default Search
