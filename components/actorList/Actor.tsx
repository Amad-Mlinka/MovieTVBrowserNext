import Image from 'next/image'
import React from 'react'
import useSWR from 'swr'
import { actorInterface } from '../../interfaces/movieInterface'
import actorStyles from "../../styles/ActorList/Actor.module.scss"
import fetcher from '../fetcher/Fetcher'





const Actor = (props: actorInterface) => {
  const { data, error } = useSWR(`https://imdb-api.com/en/API/Images/k_l8gfe3i4/nm${props.imdb_code}`, fetcher)
  if (error) return (<h1>Error</h1>);

  if (!data) return (<h1>Loading...</h1>);

  return (
    <div className={actorStyles.actor}>
      <div className={actorStyles.actorContainer}>
        <div className={actorStyles.actorImageContainer}>
         <Image alt={props.name + " image"} src={data.items[0].image} height={200} width={200}/>
        </div>

        <div className={actorStyles.actorInfo}>
          <div className={actorStyles.actorTitle}>
            <span className={actorStyles.actorNameText}> {props.name} as</span>
          </div>
          <div className={actorStyles.actorYear}>
            <span className={actorStyles.actorCharacterText}> {props.character_name}</span>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Actor
