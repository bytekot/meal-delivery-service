import { MenuItem } from '../menu-item/component'

import styles from './styles.module.scss'

export const Menu = ({ items }) => (
    <div className={styles.menu}>
        <h3>Menu</h3>
        <ul>
            {items.map(({ id, name }) =>
                <li key={id}>
                    <MenuItem name={name} />
                </li>
            )}
        </ul>
    </div>
)
