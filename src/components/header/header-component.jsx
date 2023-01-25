import styles from './header.module.scss'

export const Header = () => (
        <header className={styles.header}>
            <div className={styles.logo}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 7C0 3.13401 3.13402 0 7.00002 0H33.0001C36.8661 0 40.0001 3.13401 40.0001 7V33C40.0001 36.866 36.8661 40 33.0001 40H7.00002C3.13402 40 0 36.866 0 33V7Z" fill="#6E76F1"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M32.5375 13.7087H28.5486C26.6072 11.1334 23.5031 9.46448 20.0088 9.46448C14.1326 9.46448 9.36219 14.1828 9.36219 19.9938C9.36219 25.8052 14.1326 30.5231 20.0088 30.5231C23.5031 30.5231 26.6072 28.8542 28.5486 26.2794H32.5375C30.2163 30.7921 25.475 33.8867 20.0088 33.8867C12.2556 33.8867 5.96143 27.6618 5.96143 19.9938C5.96143 12.3262 12.2556 6.10132 20.0088 6.10132C25.475 6.10132 30.2163 9.1959 32.5375 13.7087ZM23.3517 20.6142C23.0569 22.1749 21.6713 23.3574 20.0088 23.3574C18.1314 23.3574 16.6076 21.8503 16.6076 19.9938C16.6076 18.1377 18.1314 16.6306 20.0088 16.6306C21.6713 16.6306 23.0569 17.8131 23.3517 19.3738H40.0001V20.6142H23.3517Z" fill="white"/>
                </svg>
                <span>Cleverland</span>
            </div>
            <span className={styles.burger} />
            <span className={styles.title}>Библиотека</span>
            <div className={styles.user}>
                <span>Привет, Иван!</span>
                <img src="img/avatar.png" alt="" />
            </div>
        </header>
    )

