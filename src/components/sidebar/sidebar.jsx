import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './sidebar.module.scss'

export const Sidebar = ({ isActive=true }) => (
    <nav className={styles.sidebar}>
        <div className={styles.sidebarMenu}>
        <div className={styles.sidebarItemActive}><NavLink to="/books">Витрина книг</NavLink></div>
            <ul className={styles.booksList}>
                <li className={isActive ? styles.bookIsActive : styles.book}><NavLink to="/all">Все книги</NavLink></li>
                <li className={styles.book}><NavLink to="/business">Бизнес-книги</NavLink></li>
                <li className={styles.book}><NavLink to="/detectives">Детективы</NavLink></li>
                <li className={styles.book}><NavLink to="/children">Детские книги</NavLink></li>
                <li className={styles.book}><NavLink to="/foreign">Зарубежная литература</NavLink></li>
                <li className={styles.book}><NavLink to="/history">История</NavLink></li>
                <li className={styles.book}><NavLink to="/classic">Классическая литература</NavLink></li>
                <li className={styles.book}><NavLink to="/psyhology">Книги по психологии</NavLink></li>
                <li className={styles.book}><NavLink to="/cs">Компьютерная литература</NavLink></li>
                <li className={styles.book}><NavLink to="/culture">Культура и искусство</NavLink></li>
                <li className={styles.book}><NavLink to="/science">Наука и образование</NavLink></li>
                <li className={styles.book}><NavLink to="/publics">Публицистическая литература</NavLink></li>
                <li className={styles.book}><NavLink to="/directories">Справочники</NavLink></li>
                <li className={styles.book}><NavLink to="/fantastic">Фантастика</NavLink></li>
                <li className={styles.book}><NavLink to="/humorous">Юмористическая литература</NavLink></li>
            </ul>
        </div>
        <div className={styles.sidebarItem}><NavLink to="/rules">Правила пользования</NavLink></div>
        <div className={styles.sidebarItem}><NavLink to="/ofer">Договор оферты</NavLink></div>
    </nav>
)
