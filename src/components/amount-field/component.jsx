import { useState, useEffect } from 'react'
import { Button } from '../button/component'

import styles from './styles.module.scss'

export const AmountField = ({
    value = 0,
    min = 0,
    max = 5,
    step = 1,
    onChange = value => { },
}) => {
    const [amount, setAmount] = useState(value)

    useEffect(() => onChange(amount), [amount])

    const increase = () => setAmount(amount => amount + step)
    const decrease = () => setAmount(amount => amount - step)

    return (
        <div className={styles.amountField}>
            <Button onClick={decrease} disabled={amount <= min}> - </Button>
            <span className={styles.amount}>{amount}</span>
            <Button onClick={increase} disabled={amount >= max}> + </Button>
        </div>
    )
}
