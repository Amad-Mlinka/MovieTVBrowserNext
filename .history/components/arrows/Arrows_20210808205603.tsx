import React from 'react'

import mediaListStyles from '../../styles/MediaList.module.scss'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const ArrowLeft = () => {
    return (
        <div className={`${mediaListStyles.arrow} ${mediaListStyles.arrowLeft}`} ><ChevronLeftIcon /></div>
        
    )
}

const ArrowRight = () => {
    return (
        <div className={`${mediaListStyles.arrow} ${mediaListStyles.arrowRight}`}><ChevronRightIcon /></div>
    )
}

export default {ArrowLeft, ArrowRight}
