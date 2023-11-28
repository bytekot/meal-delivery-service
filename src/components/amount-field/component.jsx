import { useState, useEffect } from 'react'
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
            <button onClick={decrease} disabled={amount === min}> - </button>
            <span>{amount}</span>
            <button onClick={increase} disabled={amount === max}> + </button>
        </div>
    )
}
