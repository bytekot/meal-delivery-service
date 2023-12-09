import { DishContainer } from '../dish/container'

import styles from './styles.module.scss'

export const Menu = ({ dishIds }) => (
    <div className={styles.menu}>
        <h3>Menu</h3>
        <ul>
            {dishIds.map(dishId =>
                <li key={dishId}>
                    <DishContainer dishId={dishId} />
                </li>
            )}
        </ul>
    </div>
)
