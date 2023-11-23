import { useState } from 'react'

export const MenuItem = ({ name }) => {
    const [count, setCount] = useState(0);

    const increase = () => setCount(count => count < 5 ? count + 1 : count)
    const reduce = () => setCount(count => count > 0 ? count - 1 : count)

    return (
        <div>
            <span>{name}</span>
            <button onClick={reduce}> - </button>
            <span>{count}</span>
            <button onClick={increase}> + </button>
        </div>
    )
}
