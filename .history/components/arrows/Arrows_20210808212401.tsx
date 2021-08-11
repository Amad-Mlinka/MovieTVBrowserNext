import React from 'react'

import mediaListStyles from '../../styles/MediaList.module.scss'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export const LeftArrow = (props) => {
    return (
        <div className={`${mediaListStyles.arrow} ${mediaListStyles.arrowLeft}`} onClick={props.prevFunction} ><ChevronLeftIcon /></div>
    )
}


export const RightArrow = (props) => {
    return (
        <div className={`${mediaListStyles.arrow} ${mediaListStyles.arrowRight}`} onClick={props.nextFunction}><ChevronRightIcon /></div>
    )
}



