import React from 'react'

import styles from './footer.module.scss'

export const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.left}>
            <span className={styles.circle}>c</span>
            <span className={styles.attention}>2020-2023 Cleverland. Все права защищены.</span>
        </div>
        <div className={styles.right}>
            <div className={styles.fb} />
            <div className={styles.inst} />
            <div className={styles.vk} />
            <div className={styles.ln} />
        </div>
    </footer>
)
