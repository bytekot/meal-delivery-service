import { useState } from 'react'

import { AmountField } from '../amount-field/component'

import styles from './styles.module.scss'

export const Dish = ({ dish }) => {
    const [amount, setAmount] = useState(0)

    if (!dish) {
        return null
    }

    const { ingredients = [], name } = dish

    return (
        <div className={styles.dish}>
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
