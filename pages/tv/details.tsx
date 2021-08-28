/*Imports */
import React, { useEffect } from 'react'
import Image from "next/image"
import _, { map } from 'underscore';
import { useRouter } from 'next/router'
import ActorList from '../../components/actorList/ActorList';
import { SRLWrapper } from "simple-react-lightbox";
import ReactPlayer from 'react-player'

/*Material components*/
import { Rating } from '@material-ui/core'

/*Icons*/

/*Import Plugins*/

/*Styles*/
import tvDetailsStyles from "../../styles/TvDetail.module.scss"

/*Interfaces */
import { tvInterface, genreInterface, videoInterface, imagesInterface, imageInterface, reviewInterface } from '../../interfaces/mediaInterface'
import { ActorP, CrewP } from "../../interfaces/peopleInterface"
import ReviewList from '../../components/reviewList/ReviewList';





interface contextInterface {
    params: tvInterface
}
interface tvInfoInterface {
    tv: tvInterface
}

interface tvDetailsProp {
    tv: tvInterface,
    tvActors: ActorP[],
    tvCrew: CrewP[],
    tvImages: imagesInterface,
    tvTrailer: videoInterface[],
    tvReviews: reviewInterface[]
}
interface dataProp {
    data: tvDetailsProp
}


const tv = ({ data }: dataProp) => {
    const tv: tvInterface = data.tv;
    const actors = data.tvActors
    const crew = data.tvCrew
    const images = data.tvImages
    const reviews = data.tvReviews
    const trailer = data.tvTrailer.filter(tv => {
        return tv.type === "Trailer" || null
    })





    const imageWidth = 1280
    const backdropImageUrl = `https://image.tmdb.org/t/p/w1280/${tv.backdrop_path}`
    const imageUrl = `https://image.tmdb.org/t/p/w${imageWidth}/${tv.poster_path}`





    return (
        <div className={tvDetailsStyles.container} >

            <div className={tvDetailsStyles.tvInfo}>
                <div className={` ${tvDetailsStyles.basicInfo}`}>
                    <div className={` ${tvDetailsStyles.imageDetailsContainer}`}>

                        {/*First Column */}
                        <div className={`${tvDetailsStyles.infoColumn} ${tvDetailsStyles.imageContainer}`}>
                            <div className={tvDetailsStyles.image}>
                                <Image src={imageUrl} width="1000 " height="1500" layout="intrinsic" alt="tv poster image"></Image>
                            </div>
                        </div>

                        {/*Second Column */}
                        <div className={`${tvDetailsStyles.infoColumn} ${tvDetailsStyles.details}`}>
                            <div className={`${tvDetailsStyles.detailsText} ${tvDetailsStyles.title}`}>
                                <span>{tv.name}</span>
                            </div>
                            <div className={`${tvDetailsStyles.detailsText} ${tvDetailsStyles.year}`}>
                                <span>{tv.first_air_date ? tv.first_air_date.slice(0, 4) : ""}</span>
                            </div>
                            <div className={tvDetailsStyles.rating}>
                                <Rating readOnly value={tv.vote_average / 2} precision={0.2} size="large" />
                                <span className={`${tvDetailsStyles.detailsText} ${tvDetailsStyles.ratingText}`} >{tv.vote_average / 2}</span>
                            </div>
                            <div className={tvDetailsStyles.genres}>
                                <ul className={tvDetailsStyles.genresList}>
                                    {tv.genres.slice(0,3).map((genre: genreInterface, i: number) => (
                                        <li key={i} className={`${tvDetailsStyles.detailsText} ${tvDetailsStyles.genreListItem} `}>
                                            {genre.name}
                                        </li>
                                    ))}
                                </ul>

                            </div>
                            <div className={tvDetailsStyles.synopsis}>
                                <h1 className={`${tvDetailsStyles.detailsText} ${tvDetailsStyles.synopsisTitle}`} >Synopsis</h1>
                                <span className={`${tvDetailsStyles.detailsText} ${tvDetailsStyles.synopsisText}`} >{tv.overview}</span>
                            </div>
                            <div className={`${tvDetailsStyles.tvMediaTrailerContainer}`}>

                            <h1 className={`${tvDetailsStyles.detailsText} ${tvDetailsStyles.synopsisTitle}`}>
                                    Trailer
                                </h1>
                                {trailer.length > 0 ?
                                    <SRLWrapper>
                                        <ReactPlayer width="300px" height="150px" url={`https://www.youtube.com/watch?v=${trailer[0].key}`} />
                                    </SRLWrapper> :
                                    <h1>No trailer</h1>
                                }
                            </div>
                        </div>
                    </div>
                    {/*Third Column */}
                    <div className={`${tvDetailsStyles.infoColumn} ${tvDetailsStyles.tvMedia}`}>
                        <div className={`${tvDetailsStyles.tvMediaContainer}`}>
                            <div className={`${tvDetailsStyles.tvMediaHeading}`}>
                                <div className={`${tvDetailsStyles.imagesTitle} ${tvDetailsStyles.detailsText}`}>
                                    <span>Images</span>
                                </div>
                            </div>


                            <SRLWrapper>
                                <div className={`${tvDetailsStyles.tvMediaImages}`}>
                                    {images.posters.length > 0 ?
                                        images.posters.slice(0, 9).map((image: imageInterface, i: number) => (
                                            <div key={i} className={tvDetailsStyles.tvMediaImageContainer}>
                                                <img key={i} className={`${tvDetailsStyles.tvMediaImage}`} alt={`${i}`} src={`http://image.tmdb.org/t/p/original${image.file_path}`} width={50} height={75} />
                                            </div>
                                        )) :
                                        <h1>No images</h1>
                                    }
                                </div>
                            </SRLWrapper>


                            
                        </div>
                    </div>
                </div>


                <div className={tvDetailsStyles.actors}>
                    <ActorList actors={actors} />

                </div>
                <div className={tvDetailsStyles.review}>
                    <ReviewList reviews={reviews}/>

                </div>
                <div className={tvDetailsStyles.relatedtvs}>

                </div>

            </div>

        </div>
    )


}



export const getServerSideProps = async (context:any) => {
    const id = context.query.id;
    const tvRes = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.apiKey}&language=en-US`)
    const tv = await tvRes.json();

    const tvImagesRes = await fetch(`https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.apiKey}&language=en-US&include_image_language=en,null`)
    const tvImages = await tvImagesRes.json();


    const tvCreditsRes = await fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.apiKey}&language=en-US`)
    const tvCreditsResults = await tvCreditsRes.json();
    const tvActors = tvCreditsResults.cast;
    const tvCrew = tvCreditsResults.crew;

    const tvTrailerRes = await fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.apiKey}&language=en-US`)
    const tvTrailerResults = await tvTrailerRes.json();
    const tvTrailer = tvTrailerResults.results;


    const tvReviewsRes = await fetch(`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${process.env.apiKey}&language=en-US`)
    const tvReviewsResults = await tvReviewsRes.json();
    const tvReviews = tvReviewsResults.results;
    


    const data = {
        tv,
        tvImages,
        tvActors,
        tvCrew,
        tvTrailer,
        tvReviews

    }


    return {
        props: {
            data
        }
    }
}




export default tv
