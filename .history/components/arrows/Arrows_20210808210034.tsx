import React from 'react'

import mediaListStyles from '../../styles/MediaList.module.scss'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export const LeftArrow = () => {
    <div className={`${mediaListStyles.arrow} ${mediaListStyles.arrowLeft}`} ><ChevronLeftIcon /></div>
}


export const RightArrow = () =>{
    <div className={`${mediaListStyles.arrow} ${mediaListStyles.arrowRight}`}><ChevronRightIcon /></div>
    }



