import { DishContainer } from '../dish/container'
import { Toggle } from '../toggle/component'

import styles from './styles.module.scss'

export const Menu = ({ dishIds }) => (
    <div className={styles.menu}>
        <h3>Menu</h3>
        <Toggle label={'Some label text'} onClick={() => {}} />
        <ul>
            {dishIds.map(dishId =>
                <li key={dishId}>
                    <DishContainer dishId={dishId} />
                </li>
            )}
        </ul>
    </div>
)
