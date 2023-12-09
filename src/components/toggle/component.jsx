import classNames from 'classnames'

import { useState } from 'react'

import styles from './styles.module.scss'
import { TOGGLE_TYPES } from '../../constants/components'

export const Toggle = ({ label, toggled, onClick, className, type }) => {
    const [isToggled, toggle] = useState(toggled)

    const callback = () => {
        toggle(!isToggled)
        onClick(!isToggled)
    }

    return (
        <label 
            className={classNames(styles.toggle, className, {
                [styles.alt]: TOGGLE_TYPES.ALT === type,
        })}>
            <input type="checkbox" defaultChecked={isToggled} onClick={callback} />
            <span className={styles.toggler} />
            <span className={styles.label}>{label}</span>
        </label>
    )
}
