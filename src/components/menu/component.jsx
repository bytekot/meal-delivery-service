import { Dish } from '../dish/component'

import styles from './styles.module.scss'

export const Menu = ({ dishIds }) => (
    <div className={styles.menu}>
        <h3>Menu</h3>
        <ul>
            {dishIds.map(id =>
                <li key={id}>
                    <Dish id={id} />
                </li>
            )}
        </ul>
    </div>
)
