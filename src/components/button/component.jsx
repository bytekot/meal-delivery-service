import { useContext } from 'react'
import classNames from 'classnames'

import { ThemeContext } from '../../styles/context'

import { BUTTON_TYPES, THEMES } from '../../constants/components'

import styles from './styles.module.scss'

export const Button = ({
    disabled = false,
    type = BUTTON_TYPES.DEFAULT,
    className,
    onClick,
    children,
}) => {
    const { theme } = useContext(ThemeContext)

    return (
        <button 
            className={classNames(styles.button, className, {
                [styles.primary]: type === BUTTON_TYPES.PRIMARY,
                [styles.secondary]: type === BUTTON_TYPES.SECONDARY,
                [styles[THEMES.DARK]]: theme === THEMES.DARK,
            })} 
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
