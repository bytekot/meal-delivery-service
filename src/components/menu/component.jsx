import { Dish } from '../dish/component'

import styles from './styles.module.scss'

export const Menu = ({ dishes }) => (
    <div className={styles.menu}>
        <h3>Menu</h3>
        <ul>
            {dishes.map(id =>
                <li key={id}>
                    <Dish id={id} />
                </li>
            )}
        </ul>
    </div>
)
