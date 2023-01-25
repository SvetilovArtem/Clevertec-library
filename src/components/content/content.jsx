import { Card } from '../cards/card'
import { Item } from '../items/item'

import styles from './content.module.scss'

export const Content = ({ items, type }) => (
    <ul className={styles.content}>
        {type === 'squares' &&  items.map(item => <Item item={item} key={item.id} />)}
        {type === 'list' &&  items.map(item => <Card item={item} />)}
    </ul>
)
