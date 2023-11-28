import { AmountField } from '../amount-field/component'

import styles from './styles.module.scss'

export const MenuItem = ({ name }) => (
    <div className={styles.menuItem}>
        <span className={styles.title}>{name}</span>
        <AmountField />
    </div>
)
