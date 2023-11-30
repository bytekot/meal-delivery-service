import { useState } from 'react'

import { AmountField } from '../amount-field/component'

import styles from './styles.module.scss'

export const MenuItem = ({ item }) => {
    const { ingredients = [], name } = item

    const [amount, setAmount] = useState(0)

    return (
        <div className={styles.menuItem}>
            <div>
                <div className={styles.title}>{name}</div>
                <div className={styles.ingredients}>{ ingredients.join(', ') }</div>
            </div>
            <AmountField
                value={amount}
                onPlus={() => setAmount(amount => amount + 1)}
                onMinus={() => setAmount(amount => amount - 1)}
            />
            
        </div>
    )
}
