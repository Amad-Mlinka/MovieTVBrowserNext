import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ActorP } from '../../interfaces/peopleInterface'
import actorStyles from "../../styles/Actor.module.scss"



interface actorInterface {
  id: number,
  name: string,
  character: string,
  profile_path: string
}

const Actor = ({ id, name, character, profile_path }: actorInterface) => {
  const imageUrl = `https://image.tmdb.org/t/p/original${profile_path}`

  return (
    <div className={actorStyles.actor}>
      <div className={actorStyles.actorContainer}>
        <div className={actorStyles.actorImageContainer}>
          <Image className={actorStyles.actorImage} src={`${imageUrl}`} width="200" height="300" />
        </div>

        <div className={actorStyles.actorInfo}>
          <div className={actorStyles.actorTitle}>
            <span className={actorStyles.actorNameText}> {name}</span>
          </div>
          <div className={actorStyles.actorYear}>
            <span className={actorStyles.actorCharacterText}> {character}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Actor
