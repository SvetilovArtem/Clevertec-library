import React from 'react'

import { Raiting } from '../raiting/raiting'

import styles from './card.module.scss'

export const Card = ({ item }) => (
    <li className={styles.card}>
        <img src={item.poster} alt="book" className={styles.poster} />
        <div className={styles.content}>
            <div className={styles.top}>
                <span className={styles.title}>{item.title}</span>
                <span className={styles.author}>{item.author}</span>
            </div>
            <div className={styles.bottom}>
                <div className={styles.raiting}>{ item.raiting > 0 ? <Raiting raiting={item.raiting} /> : 'еще нет оценок'} </div>
                <button type='button' className={styles.orderButton}>Забронировать</button>
            </div>
        </div>
    </li>
)
