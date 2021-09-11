import Link from 'next/link'
import React from 'react'
import { Movie } from "../../interfaces/movieListInterface"
import miniMediaStyles from "../../styles/MediaList/MiniMedia.module.scss"
import Image from "next/image"
import { Button, Rating } from '@material-ui/core'

interface propInterface {
    movie: Movie,
    overlay: boolean,
}


const MiniMedia = (props: propInterface) => {
    const movie = props.movie
    const placeholderUrl = "/placeholder.png"
    return (
        <>
            <Link href={`/movies/details?id=${movie.id}`}>
                <div className={miniMediaStyles.media}>

                    <div className={miniMediaStyles.mediaContainer}>
                        <div className={miniMediaStyles.mediaImageContainer}>
                            {<Image alt={movie.title + " image"} layout={"intrinsic"} className={miniMediaStyles.mediaImage} src={`${movie.medium_cover_image ? movie.medium_cover_image : placeholderUrl}`} width="200" height="300" />}
                        </div>
                    </div>
                    <div className={miniMediaStyles.mediaInfo}>
                        <div className={miniMediaStyles.mediaTitle}>
                            <span className={miniMediaStyles.mediaTitleText}> {movie.title}</span>
                        </div>
                        <div className={miniMediaStyles.mediaYear}>
                            <span className={miniMediaStyles.mediaYearText}> {movie.year ? movie.year : "Unknown"}</span>
                        </div>
                    </div>

                </div>
            </Link>
        </>
    )
}

export default MiniMedia
