import classNames from 'classnames'

import { BUTTON_TYPES } from '../../constants/components'

import styles from './styles.module.scss'

export const Button = ({
    className = '',
    disabled = false,
    type = BUTTON_TYPES.DEFAULT,
    onClick,
    children,
}) => {
    return (
        <button 
            className={classNames(styles.button, className, {
                [styles.primary]: type === BUTTON_TYPES.PRIMARY,
                [styles.secondary]: type === BUTTON_TYPES.SECONDARY,
            })} 
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
