import { AmountField } from '../amount-field/component'

import styles from './styles.module.scss'

export const MenuItem = ({ item }) => {
    const { ingredients = [], name } = item

    return (
        <div className={styles.menuItem}>
            <div>
                <div className={styles.title}>{name}</div>
                <div className={styles.ingredients}>{ ingredients.join(', ') }</div>
            </div>
            <AmountField />
        </div>
    )
}
