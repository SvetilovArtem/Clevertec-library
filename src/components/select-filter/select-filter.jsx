import styles from './select-filter.module.scss'

export const Select = () => (
    <div className={styles.selectFilter}>
        <select>
            <option value="По рейтингу">По рейтингу</option>
        </select>
        <div className={styles.filterIcon} />
    </div>
)

