import React from 'react'

import { Raiting } from '../raiting/raiting'

import styles from './item.module.scss'

export const Item = ({ item }) => (
    <li className={styles.item}>
        <img src={item.poster} alt="book" />
        <div className={styles.raiting}>{ item.raiting > 0 ? <Raiting raiting={item.raiting} /> : 'еще нет оценок'} </div>
        <span className={styles.title}>{item.title}</span>
        <span className={styles.author}>{item.author}</span>
        <button type='button' className={item.isOrdered ? styles.orderedButton : styles.orderButton}>
            {item.isOrdered ? 'Забронировано' : 'Забранировать'}
        </button>
    </li>
)

