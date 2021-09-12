/*Imports */
import React, { useRef } from 'react'
import Actor from './Actor';
import { responsiveSettings } from "../slider/SliderSettings";
import Carousel, { ResponsiveType } from 'react-multi-carousel';

/*Material components*/
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

/*Icons*/

/*Import Plugins*/

/*Styles*/
import actorListStyles from '../../styles/ActorList/ActorList.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { actorInterface } from '../../interfaces/movieInterface';
import 'react-multi-carousel/lib/styles.css';
import { localeInterface } from '../../interfaces/localeInterface';



/*Interfaces */

interface actorListProps {
  actors: actorInterface[] | null | undefined,
  locale:localeInterface
}


const ActorList = ({actors,locale}: actorListProps) => {


  return (
    <>
      <div className={actorListStyles.actorList} >
        <div className={actorListStyles.content}>
          <div className={actorListStyles.header}>
            <div className={actorListStyles.headerContainer}>
              <div className={actorListStyles.heading}>
                <span>{locale.actorsTitle}</span>
              </div>
              <div className={actorListStyles.subHeading}>
                <span>{locale.actorsSub}</span>
              </div>
            </div>
          </div>

            {actors &&
              actors.map((actor: actorInterface) => (
                <Actor key={actor.imdb_code} {...actor} />
              )
              )

            }


        </div>
      </div>
    </>
  )
}

export default ActorList

/*
{actors &&
  actors.map((actor: actorInterface) =>
  (
    <Actor key={actor.imdb_code} {...actor} />
  )
  )
}*/