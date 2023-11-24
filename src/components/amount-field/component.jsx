import { useEffect } from 'react';
import { useState } from 'react'

export const AmountField = ({
    value = 0,
    min = 0,
    max = 5,
    step = 1,
    onChange = value => {},
}) => {
    const [amount, setAmount] = useState(value);

    useEffect(() => onChange(amount), [amount])

    const increase = () => setAmount(amount => amount + step)
    const decrease = () => setAmount(amount => amount - step)

    return (
        <div>
            <button onClick={decrease} disabled={amount === min}> - </button>
            <span>{amount}</span>
            <button onClick={increase} disabled={amount === max}> + </button>
        </div>
    )
}
