import { useState } from 'react'
import { useSelector } from 'react-redux'

import { AmountField } from '../amount-field/component'

import { selectDishById } from '../../store/features/dish/selectors'

import styles from './styles.module.scss'

export const Dish = ({ id }) => {
    const item = useSelector(state => selectDishById(state, id))

    if (!item) {
        return null
    }

    const { ingredients = [], name } = item
    const [amount, setAmount] = useState(0)

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