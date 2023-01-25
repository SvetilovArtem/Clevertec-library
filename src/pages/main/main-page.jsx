import { ListButton } from '../../components/buttons/list-button/list-button';
import { SquareButton } from '../../components/buttons/square-button/square-button';
import { Content } from '../../components/content/content';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header-component';
import { Search } from '../../components/search/search';
import { Select } from '../../components/select-filter/select-filter';
import { Sidebar } from '../../components/sidebar/sidebar';

import styles from './main-page.module.scss'

const items = [
    {   id: 1,
        title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
        author: 'Адитья Бхаргава, 2019',
        raiting: 1,
        poster: 'img/book.png',
        isOrdered: true
    },
    {   id: 2,
        title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
        author: 'Адитья Бхаргава, 2019',
        raiting: 5,
        poster: 'img/book.png',
        isOrdered: false
    },
    {   id: 3,
        title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
        author: 'Адитья Бхаргава, 2019',
        raiting: 0,
        poster: 'img/book.png',
        isOrdered: false
    },
    {   id: 4,
        title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
        author: 'Адитья Бхаргава, 2019',
        raiting: 0,
        poster: 'img/book.png',
        isOrdered: false
    },
    {   id: 5,
        title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
        author: 'Адитья Бхаргава, 2019',
        raiting: 3,
        poster: 'img/book.png',
        isOrdered: true
    },
    {   id: 6,
        title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
        author: 'Адитья Бхаргава, 2019',
        raiting: 4,
        poster: 'img/book.png',
        isOrdered: false
    },
    {   id: 7,
        title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
        author: 'Адитья Бхаргава, 2019',
        raiting: 1,
        poster: 'img/book.png',
        isOrdered: false
    },
    {   id: 8,
        title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
        author: 'Адитья Бхаргава, 2019',
        raiting: 2,
        poster: 'img/book.png',
        isOrdered: false
    },
    {   id: 9,
        title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
        author: 'Адитья Бхаргава, 2019',
        raiting: 0,
        poster: 'img/book.png',
        isOrdered: true
    },
    {   id: 10,
        title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
        author: 'Адитья Бхаргава, 2019',
        raiting: 0,
        poster: 'img/book.png',
        isOrdered: false
    },
]
console.log(items)

export const MainPage = () => (
    <section className={styles.mainPage}>
        <Header />
        <div className={styles.content}>
            <Sidebar />
            <div>
                <div className={styles.controlsBlock}>
                    <div className={styles.controls}>
                        <Search />
                        <Select />
                    </div>
                    <div className={styles.showButtons}>
                        <SquareButton />
                        <ListButton />
                    </div>
                </div>
                <Content items={items} type='list' />
            </div>
        </div>
        <Footer />
    </section>
);
