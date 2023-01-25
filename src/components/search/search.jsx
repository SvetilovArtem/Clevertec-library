import React from 'react'

import styles from './search.module.scss'

export const Search = () => (
    <div className={styles.searchBlock}>
        <input type='text' placeholder='Поиск книги или автора...' className={styles.search} />
        <div className={styles.searchIcon} />
    </div>
)

