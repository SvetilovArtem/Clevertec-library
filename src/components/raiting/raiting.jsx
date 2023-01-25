import React from 'react'

import styles from './raiting.module.scss'

export const Raiting = ({raiting}) => (

    <div className={styles.raiting}>
        {[1,2,3,4].map((e) => <img src='img/Star.png' alt={e} className={styles.star} />)}
        {[1].map(e => <img src='img/Star-empty.png' alt={e} className={styles.star} />)}
    </div>
)
