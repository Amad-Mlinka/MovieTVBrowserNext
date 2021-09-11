import Image from 'next/image'
import React from 'react'
import useSWR from 'swr'
import { actorInterface } from '../../interfaces/movieInterface'
import actorStyles from "../../styles/ActorList/Actor.module.scss"
import fetcher from '../fetcher/Fetcher'





const Actor = (props: actorInterface) => {
  const placeholderUrl = "/placeholder.png"
  const { data, error } = useSWR(`https://imdb-api.com/en/API/Images/k_l8gfe3i4/nm${props.imdb_code}`, fetcher)
  if (error) return (<h1>Error</h1>);

  if (!data) return (<h1>Loading...</h1>);

  return (
    <div className={actorStyles.actor}>
      <div className={actorStyles.actorContainer}>
        <div className={actorStyles.actorTitle}>
        <div className={actorStyles.actorName}>{props.name}</div> <span style={{margin: "0px 10px"}}>as</span>  <div className={actorStyles.actorChar}>{props.character_name}</div>
        </div>
        <div className={actorStyles.actorImage}>
          <Image src={props.url_small_image ? props.url_small_image :placeholderUrl} layout={"fill"} objectFit={"cover"}></Image>
        </div>
      </div>
    </div>
  )
}


export default Actor
